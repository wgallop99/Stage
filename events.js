$(document).ready(function() {
  var event = {

      init: function() {
        event.initStyling();
        event.initEvents();
      },


      initStyling: function() {

        event.renderEventDisplay($(".eventDisplay"));
      },

      initEvents: function() {},


      render: function(template, data, $target) {
          var tmpl = _.template(template, data);
          $target.append(tmpl);
      },


      renderEventDisplay: function($target){
        event.render($("#eventDateTmpl").html(), event_data, $target);
      },

    }





event.init();


});
