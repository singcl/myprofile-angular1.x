angular.module("myApp")
    .directive("initializeTooltip", function() {
        return function postLink(scope, ielem, iattrs) {
            $("[data-toggle='tooltip']").tooltip({
                container: "body"
            });
        };
    })

/* 下面写法也可，官方推荐返回对象而不是函数
angular.module("myApp").directive("initializeTooltip", function() {
  return {
    restrict:"EA",
    link:function(scope,ielem,iattrs) {
      $("[data-toggle='tooltip']").tooltip();
    }
  };
});
*/
.directive("initializeWangEditor", function() {
    return {
        restrict: "EA",
        link: function(scope, ielem, iattrs) {
            var editor = new wangEditor("reply");
            // 自定义菜单
            /*
		    editor.config.menus = [
		        'source',
		        '|',     // '|' 是菜单组的分割线
		        'bold',
		        'underline',
		        'italic',
		        'strikethrough',
		        'eraser',
		        'forecolor',
		        'bgcolor'
		     ];
			// 颜色
			editor.config.colors = {
				"#880000":"暗红色",
				"#800080":"紫色",
				"#ff0000":"红色"
			};
            */
            //自定义表情查看官方文档http://www.kancloud.cn/wangfupeng/wangeditor2/113977

            editor.config.emotions = {
                //第一组表情包
                "weibo": {
                    "title": "默认",
                    "data": "./vendor/bower_components/wangEditor/static/emotions/weibo/weibo.data"
                },
                //第二组表情包
                "jinxing": {
                    "title": "搞笑",
                    "data": "./vendor/bower_components/wangEditor/static/emotions/jinxing/jinxing.data"
                },
                /*
			    //第三组表情包    表情太多了，暂时注释掉不加载
			    "sina":{
		            "title":"新浪",
		            "data":"./vendor/bower_components/wangEditor/static/emotions/sina/sina.data"
			    }
			    */
            };


            editor.create();
            /*
			方法二：使用element DOM来选取元素实例化编辑器
			获取元素
		    var div = document.getElementById('div1');
		    生成编辑器
		    var editor = new wangEditor(div);
		    editor.create();
		    */
            // 初始化内容
            //editor.$txt.html("<span style = 'color:#e4c6d0;'>...<span>");
            // editor.disable();    
        }
    };
})

.directive("initializeFroalaEditor", function() {
        return {
            restrict: "EA",
            link: function(scope, ielem, iattrs) {
                $(document).ready(function() {
                    $("#froala").editable({
                        inlineMode: false,
                        alwaysBlank: true
                    });
                })
            }
        }
    })
    .directive("cycleCarousel", function() {
        return {
            restrict: "EA",
            link: function(scope, ielem, iattrs) {
                $('#myCarousel').carousel({
                    interval: 3000
                });
                $('#myCarousel').carousel('cycle');
            }
        }
    })