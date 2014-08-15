
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

      initEvents: function() {},


      render: function(template, data, $target) {
          var tmpl = _.template(template, data);
          $target.append(tmpl);
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

    $(".topNav a").on("click", function(event){
      event.preventDefault();
      var navigated = "." + $(this).attr("rel");
      $(".container").children().removeClass("currentTab");
      $(navigated).addClass("currentTab");
    });

    $(".navBar a").on("click", function(event){
      event.preventDefault();
      var navigated = "." + $(this).attr("rel");
      $(".eventDisplay").children().removeClass("activeTab");
      $(navigated).addClass("activeTab");
      $(this).closest('li').addClass("activeLink");
      $(this).closest('li').siblings().removeClass("activeLink");
    });

    $("#menu a").on("click", function(event){
      event.preventDefault();
      $(".topNav").toggleClass("topNav2");
    });

    $(".alltab").on("click", ".event_container a", function(e){
      e.preventDefault();
      var info = $(this).closest(".event_container").data("index");
      console.log(info);
      var event = event_data[info];
      console.log(event);

      var date = moment(event.datetime).utc().format('DD');
      var band = event.artists[0].name;
      var venue = event.venue.name;
      var time = moment(event.datetime).utc().format('hh:mm a')
      for(var i=1; i<=31; i++){
        if(date == i){
          console.log(date);
          var numI = i.toString();
          $(".calendar #" + numI).append(" " + band + " ");
        }
      }
    });


home.init();


});
