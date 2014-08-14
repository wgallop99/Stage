
$(document).ready(function() {
  var home = {

      init: function() {
        home.initStyling();
        home.initEvents();
      },


      initStyling: function() {
        home.renderTextSide($(".tonightEvents"));
      },

      initEvents: function() {},


      render: function(template, data, $target) {
          var tmpl = _.template(template, data);
          $target.append(tmpl);
      },


      renderTextSide: function($target) {
        home.render($("#eventSideTmpl").html(), event_data, $target);

      },

      

    }

    // $(".mainNav a").on("click", function(event){
    //   event.preventDefault();
    //   var navigated = "." + $(this).attr("rel");
    //   $(".mainInfo").children().removeClass("currentTab");
    //   $(navigated).addClass("currentTab");
    //   $(this).closest('li').addClass("active");
    //   $(this).closest('li').siblings().removeClass("active");
    // });



home.init();


});
