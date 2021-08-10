
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login_v2","pages/index/index","pages/people/people","pages/parameter/parameter","pages/manage/manage","pages/foodData/index","pages/foodUpd/index","pages/catheter/index","pages/catheterUpd/index","pages/special/index","pages/specialUpd/index","pages/report/report","pages/bladderData/index","pages/urineData/index","pages/renalData/index","pages/ureteralData/index","pages/me/salary","pages/me/aboutMe","pages/me/mentalTest/list","pages/me/mentalTest/index","pages/me/mentalTest/explain","pages/me/course","pages/signOut/signOut","pages/signOut/success","pages/setting/userdetail","pages/setting/useredit"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"lijinghai","navigationStyle":"custom","navigationBarTextStyle":"white"},"tabBar":{"selectedColor":"#87CEFF","color":"#C0C0C0","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/img/home.png","selectedIconPath":"static/img/active_home.png"},{"text":"个人中心","pagePath":"pages/people/people","iconPath":"static/img/people.png","selectedIconPath":"static/img/active_people.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"MedicalSystem_uniapp","compilerVersion":"3.1.22","entryPagePath":"pages/login/login_v2","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login_v2","meta":{"isQuit":true},"window":{}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"医疗管理系统","enablePullDownRefresh":true}},{"path":"/pages/people/people","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":true}},{"path":"/pages/parameter/parameter","meta":{},"window":{"navigationBarTitleText":"病理参数","enablePullDownRefresh":true}},{"path":"/pages/manage/manage","meta":{},"window":{"navigationBarTitleText":"事件管理","enablePullDownRefresh":true}},{"path":"/pages/foodData/index","meta":{},"window":{"navigationBarTitleText":"餐饮事件","enablePullDownRefresh":true}},{"path":"/pages/foodUpd/index","meta":{},"window":{"navigationBarTitleText":"记录餐饮事件","enablePullDownRefresh":true}},{"path":"/pages/catheter/index","meta":{},"window":{"navigationBarTitleText":"导尿事件","enablePullDownRefresh":true}},{"path":"/pages/catheterUpd/index","meta":{},"window":{"navigationBarTitleText":"记录导尿事件","enablePullDownRefresh":true}},{"path":"/pages/special/index","meta":{},"window":{"navigationBarTitleText":"特殊事件","enablePullDownRefresh":true}},{"path":"/pages/specialUpd/index","meta":{},"window":{"navigationBarTitleText":"记录特殊事件","enablePullDownRefresh":true}},{"path":"/pages/report/report","meta":{},"window":{"navigationBarTitleText":"事件报表","enablePullDownRefresh":true}},{"path":"/pages/bladderData/index","meta":{},"window":{"navigationBarTitleText":"膀胱动力学资料","enablePullDownRefresh":true}},{"path":"/pages/urineData/index","meta":{},"window":{"navigationBarTitleText":"尿常规资料","enablePullDownRefresh":true}},{"path":"/pages/renalData/index","meta":{},"window":{"navigationBarTitleText":"肾功能资料","enablePullDownRefresh":true}},{"path":"/pages/ureteralData/index","meta":{},"window":{"navigationBarTitleText":"输尿管B超数据资料","enablePullDownRefresh":true}},{"path":"/pages/me/salary","meta":{},"window":{"navigationBarTitleText":"薪资排行","navigationStyle":"custom"}},{"path":"/pages/me/aboutMe","meta":{},"window":{"navigationBarTitleText":"关于作者","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/list","meta":{},"window":{"navigationBarTitleText":"答题测试","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/index","meta":{},"window":{"navigationBarTitleText":"答题测试","navigationStyle":"custom"}},{"path":"/pages/me/mentalTest/explain","meta":{},"window":{"navigationBarTitleText":"答题规则说明"}},{"path":"/pages/me/course","meta":{},"window":{"navigationBarTitleText":"班级课程","navigationStyle":"custom"}},{"path":"/pages/signOut/signOut","meta":{},"window":{"navigationBarTitleText":"退出登录"}},{"path":"/pages/signOut/success","meta":{},"window":{"navigationBarTitleText":"退出成功页面"}},{"path":"/pages/setting/userdetail","meta":{},"window":{"navigationBarTitleText":"用户详情"}},{"path":"/pages/setting/useredit","meta":{},"window":{"navigationBarTitleText":"用户编辑"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
