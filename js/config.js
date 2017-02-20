// config

var app = angular.module("myApp");

app.config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide,   $httpProvider) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
        
        /*
        通过$httpProvider改变$http服务的默认设置，使后端PHP脚本中
        能够使用$_POST[]来能正确获取前端通过$http服务post过来的参数。
        如果使用jQUery的$.ajax(),$.post()等方法时不存在以上问题，也不需要
        一下设置.
        */
        $httpProvider.defaults.transformRequest = function(obj) {
            var str = [];
            for(var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        };

        $httpProvider.defaults.headers.post = {
            "Content-Type":"application/x-www-form-urlencoded"
        }
    }]
);
