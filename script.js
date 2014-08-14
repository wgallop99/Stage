
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
    });


home.init();


});
