

$(document).ready(function() {
  var home = {

      init: function() {
        home.initStyling();
        home.initEvents();
      },


      initStyling: function() {
        home.renderTextSide($(".tonightEvents"));
        home.renderEventDisplay($(".alltab"));
        home.renderTextCharTab($(".charlestonTab"));
        home.renderTextMountpTab($(".mountPTab"));
        home.renderTextnCharTab($(".nCharlesTab"));
      },

      initEvents: function() {


      },


      render: function(template, data, $target) {
          var tmpl = _.template(template, data);
          $target.html(tmpl);
      },


      renderTextSide: function($target) {
        home.render($("#eventSideTmpl").html(), event_data, $target);

      },

      renderEventDisplay: function($target){
        home.render($("#eventDateTmpl").html(), event_data, $target);



      },
      renderTextCharTab: function($target) {
        home.render($("#charlestonTmpl").html(),event_data, $target);

      },
      renderTextMountpTab: function($target) {
        home.render($("#mountpTmpl").html(),event_data, $target);

      },
      renderTextnCharTab: function($target) {
        home.render($("#northCharTmpl").html(), event_data, $target);

      },
    }

///TOGGLES THE MAIN PAGES///
    $(".topNav a").on("click", function(event){
      event.preventDefault();
      var navigated = "." + $(this).attr("rel");
      $(".container").children().removeClass("currentTab");
      $(navigated).addClass("currentTab");
    });


///TOGGLES THE EVENTS PAGE LOCATION TABS///
    $(".navBar a").on("click", function(event){
      event.preventDefault();
      var navigated = "." + $(this).attr("rel");
      $(".eventDisplay").children().removeClass("activeTab");
      $(navigated).addClass("activeTab");
      $(this).closest('li').addClass("activeLink");
      $(this).closest('li').siblings().removeClass("activeLink");
    });

///TOGGLES THE SCROLL DOWN NAV BAR///
    $("#menu a").on("click", function(event){
      event.preventDefault();
      $(".topNav").toggleClass("topNav2");
    });


    $(".eventDisplay").on("click", ".event_container a", function(e){
      e.preventDefault();
      var info = $(this).closest(".event_container").data("index");
      var event = event_data[info];
      var date = moment(event.datetime).utc().format('DD');
      var band = event.artists[0].name;
      var venue = event.venue.name;
      var time = moment(event.datetime).utc().format('hh:mm a')
      for(var i=1; i<=31; i++){
        if(date == i){
          var numI = i.toString();
          var icon = "<span class=\"mic\"" + "title=\"band info\">" + "<img style=\"width:18px;\"" + "src=\"images/micIcon.png\"" + "alt=\"mic\"" + ">"
                    + "<span class=\"drop hidden\"" + "style=\"width:50px; font-size: 10px; padding: 5px;\">" + band + " at " + venue + " " + time + "</span>"
                    + "</span>";
          $(".calendar #" + numI).append(icon);
          $(".calendar .mic").on("mouseenter", function(event){
            $(".drop").removeClass("hidden");           $(".drop").closest('td').siblings().children().closest(".mic").addClass("hidden");
          });

          $(".calendar .mic").on("mouseleave", this, function(event){
            $(".drop").addClass("hidden");
          });
        }
      }
    });

    $(window).scroll(function(event) {
      //what is the y position of what the scroll is
      var y = $(window).scrollTop();

    if (y >= 430) {

      $('.calendar').addClass('fixed');

    } else {
      $('.calendar').removeClass('fixed');

    }
    });





//////////FUNCTION FOR APPENDING FORM INFO TO DATA ARRAY///////////
    $(".getStaged form").on("click", "button", function(e){
      e.preventDefault();
      var newEvent= {};

      var bandName = $("#getBandName").val();

      var eventDate = "2014-"+$("#getMonth").val()+"-"+$("#getDay").val();

      var eventTime = "";
      if($("#getTime").val() < 12 && $("#getTod").val() == "pm"){
        eventTime = "T"+(Number($("#getTime").val()) + 12) + ":00:00";

      }else if($("#getTime").val() < 12 && $("#getTod").val() == "am"){
        eventTime = "T"+$("#getTime").val() + ":00:00";

      }else if($("#getTime").val() == 12 && $("#getTod").val() == "am"){
        eventTime = "T"+"00:00:00"

      }else if($("#getTime").val() == 12 && $("#getTod").val() == "pm"){
        eventTime = "T"+"12:00:00"
      }


      var eventVen = $("#getVenue").val();
      var eventCity = $("#getCity").val();
      var eventAddr = $("#getAddr").val();


      newEvent = {
        "artists":[
          {
            "name":bandName
          }
         ],
         "datetime":eventDate + eventTime,
         "venue":{
         "region": "SC",
         "city": eventCity,
         "name": eventVen
      }

    };
    event_data.unshift(newEvent);

    home.renderEventDisplay($(".alltab"));

});



home.init();


});
