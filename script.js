
$(document).ready(function() {
  var home = {

      init: function() {
        home.initStyling();
        home.initEvents();
      },


      initStyling: function() {
        home.renderTextSide($(".tonightEvents"));
        home.renderEventDisplay($(".eventDisplay"));
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
    }

    $(".topNav a").on("click", function(event){
      event.preventDefault();
      var navigated = "." + $(this).attr("rel");
      $(".container").children().removeClass("currentTab");
      $(navigated).addClass("currentTab");
    });



home.init();


});
