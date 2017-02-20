// Config for router

angular.module("myApp")
    .run(
    	[           "$rootScope","$state","$stateParams",
    	    function($rootScope,  $state,  $stateParams) {
                //将以下两个服务添加到根作用域方便使用
    	    	$rootScope.$state = $state;
    	    	$rootScope.$stateParams = $stateParams;
    	    }
    	]
    )

    .config(
    	[           "$stateProvider","$urlRouterProvider",
    	    function($stateProvider,  $urlRouterProvider) {
    	    	$urlRouterProvider
    	    	    .otherwise("/app/page/profile");
    	    	$stateProvider
    	    	    .state("app", {
    	    	    	abstract:true,
    	    	    	url:"/app",
    	    	    	templateUrl:"tpl/app.html"
    	    	    })

    	    	    .state("app.v1",{
    	    	    	url:"/v1",
    	    	    	templateUrl:"tpl/app_dashboard_v1.html",
    	    	    	resolve:{
    	    	    		deps:["$ocLazyLoad",function($ocLazyLoad) {
    	    	    			return $ocLazyLoad.load(["js/controllers/chart.js"]);
    	    	    		}]
    	    	    	}
    	    	    })

                    .state("app.v2", {
                        url:"/v2",
                        templateUrl:"tpl/app_dashboard_v2.html",
                        resolve:{
                            deps:["$ocLazyLoad",function($ocLazyLoad) {
                                return $ocLazyLoad.load(["js/controllers/chart.js"]);
                            }]
                        }
                    })
                    //pages
                    .state("app.page", {
                        url:"/page",
                        template: "<div ui-view class='fade-in-down'></div>"
                    })

                    .state("app.page.profile", {
                        url:"/profile",
                        templateUrl:"tpl/page_profile.html"
                    })

                    .state("access", {
                        url:"/access",
                        template:"<div ui-view class='fade-in-right-big smooth'></div>"    //smooth
                    })

                    .state("access.404", {
                        url:"/404",
                        templateUrl:"tpl/page_404.html"
                    })

                    .state("access.signin",{
                        url:"/signin",
                        templateUrl:"tpl/page_signin.html",
                        resolve:{
                            deps:["uiLoad",function(uiLoad) {
                                return uiLoad.load(["js/controllers/signin.js"]);
                            }]
                        }
                    })

                    .state("access.forgotpwd",{
                        url:"/forgotpwd",
                        templateUrl:"tpl/page_forgotpwd.html"
                    })

                    .state("access.signup",{
                        url:"/signup",
                        templateUrl:"tpl/page_signup.html",
                        resolve:{
                            deps:["$ocLazyLoad",function($ocLazyLoad) {
                                return $ocLazyLoad.load(["js/controllers/signup.js"]);
                            }]
                        }
                    })

                    // mail
                    .state("app.mail", {
                        url:"/mail",
                        abstract:true,
                        templateUrl:"tpl/mail.html",
                        resolve: {
                            deps: ["$ocLazyLoad",function($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    "js/app/mail/mail.js",
                                    "js/app/mail/mail-service.js",
                                    "vendor/libs/moment.min.js",
                                    "vendor/bower_components/wangEditor/dist/js/wangEditor.js",
                                    "vendor/bower_components/wangEditor/dist/css/wangEditor.css"
                                ]);
                            }]
                        }
                    })

                    .state("app.mail.list", {
                        url:"/inbox/{fold}",
                        templateUrl:"tpl/mail.list.html"
                    })

                    .state("app.mail.detail", {
                        url:"/{mailId:[0-9]{1,4}}",
                        templateUrl:"tpl/mail.detail.html"
                    })

                    .state("app.mail.compose", {
                        url:"/compose",
                        templateUrl:"tpl/mail.compose.html"  
                    })

                    //responsive Demo
                    .state("responsive", {
                        url:"/responsive",
                        template:"<div ui-view class='fade-in-right-big'></div>"    //smooth 这里可以添加动画的钩子
                    })

                    .state("responsive.casing", {
                        url:"/casing",
                        templateUrl:"tpl/responsive_casing.html",
                        resolve: {
                            deps:["uiLoad", function(uiLoad) {
                                return uiLoad.load(["css/casing.css"]);
                            }]
                        }
                    })

                    .state("responsive.jnshome", {
                        url:"/jnshome",
                        templateUrl:"tpl/responsive_jns_home.html",
                        resolve: {
                            deps:["uiLoad", function(uiLoad) {
                                return uiLoad.load(["css/jns-base.css","css/jns-home.css"]);
                            }]
                        }
                    })

                    .state("responsive.jnsrecommend", {
                        url:"/jnsrecommend",
                        templateUrl:"tpl/responsive_jns_recommend.html",
                        resolve: {
                            deps:["uiLoad", function(uiLoad) {
                                return uiLoad.load(["css/jns-base.css","css/jns-recommend.css"]);
                            }]
                        }
                    })

                    .state("responsive.jnsdetail", {
                        url:"/jnsdetail",
                        templateUrl:"tpl/responsive_jns_detail.html",
                        resolve: {
                            deps:["uiLoad", function(uiLoad) {
                                return uiLoad.load(["css/jns-base.css","css/jns-detail.css"]);
                            }]
                        }
                    })
    	    }
    	]
    )
