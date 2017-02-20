// lazyload config
angular.module("myApp").
/**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
**/
constant("JQ_CONFIG", {
	easyPieChart:     ["vendor/jquery/charts/easypiechart/jquery.easy-pie-chart.js"],
	sparkline:        ["vendor/jquery/charts/sparkline/jquery.sparkline.js"],
	plot:             ["vendor/jquery/charts/flot/jquery.flot.min.js",
	                   "vendor/jquery/charts/flot/jquery.flot.resize.js",
	                   "vendor/jquery/charts/flot/jquery.flot.tooltip.min.js",
                     "vendor/jquery/charts/flot/jquery.flot.spline.js",
                     "vendor/jquery/charts/flot/jquery.flot.orderBars.js",
                     "vendor/jquery/charts/flot/jquery.flot.pie.min.js"
	                  ],
  chosen:           ["vendor/jquery/chosen/chosen.jquery.min.js",
                     "vendor/jquery/chosen/chosen.css"
                    ],
  wysiwyg:          ["vendor/jquery/wysiwyg/bootstrap-wysiwyg.js",
                     "vendor/jquery/wysiwyg/jquery.hotkeys.js"
                    ],
  froala:           ["vendor/bower_components/froala_editor/js/froala_editor.min.js",
                     "vendor/bower_components/froala_editor/css/froala_editor.min.css"  //报错？
                    ]           
})

//ocLazyLoad config
.config(["$ocLazyLoadProvider" ,function($ocLazyLoadProvider) {
     // We configure ocLazyLoad to use the lib script.js as the async loader
    $ocLazyLoadProvider.config({
        debug:true,
        events:true,
        modules:[
            {
                name:"",
                files:[]
            }
      ]
    })
}])