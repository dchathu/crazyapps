webpackJsonp([0,3],{213:function(t,n,e){"use strict";var r=e(0),a=e(306),i=e(10),o=(e.n(i),e(670)),s=(e.n(o),e(669)),c=(e.n(s),e(671));e.n(c);e.d(n,"a",function(){return l});var p=this&&this.__decorate||function(t,n,e,r){var a,i=arguments.length,o=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(i<3?a(o):i>3?a(n,e,o):a(n,e))||o);return i>3&&o&&Object.defineProperty(n,e,o),o},f=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},l=function(){function t(t){this._http=t,this._applicationsUrl="http://crazyapps-api.azurewebsites.net/api/applications/applications.json"}return t.prototype.getApplications=function(){return this._http.get(this._applicationsUrl).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.getApplication=function(t){return this.getApplications().map(function(n){return n.find(function(n){return n.appId===t})})},t.prototype.handleError=function(t){return console.error(t),i.Observable.throw(t.json().error||"Server error")},t=p([e.i(r.R)(),f("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],t);var n}()},383:function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id=383},384:function(t,n,e){"use strict";var r=e(507),a=(e.n(r),e(473)),i=e(0),o=e(506),s=e(503);o.a.production&&e.i(i._40)(),e.i(a.a)().bootstrapModule(s.a)},502:function(t,n,e){"use strict";var r=e(0);e.d(n,"a",function(){return o});var a=this&&this.__decorate||function(t,n,e,r){var a,i=arguments.length,o=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(i<3?a(o):i>3?a(n,e,o):a(n,e))||o);return i>3&&o&&Object.defineProperty(n,e,o),o},i=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},o=function(){function t(){this.title="app works!"}return t=a([e.i(r.G)({selector:"app-root",template:e(663),styles:[e(660)]}),i("design:paramtypes",[])],t)}()},503:function(t,n,e){"use strict";var r=e(147),a=e(0),i=e(464),o=e(306),s=e(324),c=e(502),p=e(505),f=e(213),l=e(504);e.d(n,"a",function(){return h});var d=this&&this.__decorate||function(t,n,e,r){var a,i=arguments.length,o=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(i<3?a(o):i>3?a(n,e,o):a(n,e))||o);return i>3&&o&&Object.defineProperty(n,e,o),o},u=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},h=function(){function t(){}return t=d([e.i(a.I)({declarations:[c.a,p.a,l.a],imports:[r.b,i.a,o.b,s.c.forRoot([{path:"apps",component:p.a},{path:"apps/:id",component:l.a},{path:"",redirectTo:"apps",pathMatch:"full"},{path:"**",redirectTo:"apps",pathMatch:"full"}])],providers:[f.a],bootstrap:[c.a]}),u("design:paramtypes",[])],t)}()},504:function(t,n,e){"use strict";var r=e(0),a=e(324),i=e(213);e.d(n,"a",function(){return c});var o=this&&this.__decorate||function(t,n,e,r){var a,i=arguments.length,o=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(i<3?a(o):i>3?a(n,e,o):a(n,e))||o);return i>3&&o&&Object.defineProperty(n,e,o),o},s=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},c=function(){function t(t,n,e){this._route=t,this._router=n,this._applicationsService=e,this.pageTitle="App Detail"}return t.prototype.ngOnInit=function(){var t=this;this.sub=this._route.params.subscribe(function(n){var e=+n.id;t.getApplication(e)})},t.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},t.prototype.getApplication=function(t){var n=this;this._applicationsService.getApplication(t).subscribe(function(t){return n.application=t},function(t){return n.errorMessage=t})},t=o([e.i(r.G)({template:e(664),styles:[e(661)]}),s("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object,"function"==typeof(c="undefined"!=typeof a.b&&a.b)&&c||Object,"function"==typeof(p="undefined"!=typeof i.a&&i.a)&&p||Object])],t);var n,c,p}()},505:function(t,n,e){"use strict";var r=e(0),a=e(213);e.d(n,"a",function(){return s});var i=this&&this.__decorate||function(t,n,e,r){var a,i=arguments.length,o=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(i<3?a(o):i>3?a(n,e,o):a(n,e))||o);return i>3&&o&&Object.defineProperty(n,e,o),o},o=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},s=function(){function t(t){this._applicationsService=t}return t.prototype.ngOnInit=function(){var t=this;this._applicationsService.getApplications().subscribe(function(n){return t.applications=n},function(n){return t.errorMessage=n})},t=i([e.i(r.G)({template:e(665),styles:[e(662)]}),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof a.a&&a.a)&&n||Object])],t);var n}()},506:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r={production:!0}},507:function(t,n,e){"use strict";var r=e(521),a=(e.n(r),e(514)),i=(e.n(a),e(510)),o=(e.n(i),e(516)),s=(e.n(o),e(515)),c=(e.n(s),e(513)),p=(e.n(c),e(512)),f=(e.n(p),e(520)),l=(e.n(f),e(509)),d=(e.n(l),e(508)),u=(e.n(d),e(518)),h=(e.n(u),e(511)),v=(e.n(h),e(519)),m=(e.n(v),e(517)),g=(e.n(m),e(522)),b=(e.n(g),e(688));e.n(b)},660:function(t,n){t.exports=""},661:function(t,n){t.exports="img{\r\n    width:100%;\r\n}"},662:function(t,n){t.exports='.hovereffect{\r\n  width:100%;\r\n  height:100%;\r\n  float:left;\r\n  overflow:hidden;\r\n  position:relative;\r\n  text-align:center;\r\n  cursor:default;\r\n  background-color:#EC7063;\r\n}\r\n\r\n.hovereffect .overlay{\r\n  width:100%;\r\n  height:100%;\r\n  position:absolute;\r\n  overflow:hidden;\r\n  top:0;\r\n  left:0;\r\n}\r\n\r\n.hovereffect img{\r\n  display:block;\r\n  position:relative;\r\n  -webkit-transform:scale(1.1);\r\n  transform:scale(1.1);\r\n  -webkit-transition:all 0.35s;\r\n  transition:all 0.35s;\r\n  width:100%;\r\n}\r\n\r\n.hovereffect:hover img{\r\n  -webkit-transform:scale(1);\r\n  transform:scale(1);\r\n  filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.7" /><feFuncG type="linear" slope="0.7" /><feFuncB type="linear" slope="0.7" /></feComponentTransfer></filter></svg>#filter\');\r\n  filter:brightness(0.7);\r\n  -webkit-filter:brightness(0.7);\r\n  opacity:0.1;\r\n  width:100%;\r\n}\r\n\r\n\r\n.hovereffect a.info{\r\n  display:inline-block;\r\n  text-decoration:none;\r\n  padding:7px 14px;\r\n  text-transform:uppercase;\r\n  color:#fff;\r\n  border:1px solid #fff;\r\n  margin:50px 0 0 0;\r\n  background-color:transparent;\r\n}\r\n\r\n.hovereffect a.info:hover{\r\n  box-shadow:0 0 5px #fff;\r\n}\r\n\r\n.hovereffect .rotate{\r\n  -webkit-transform:rotate(-45deg);\r\n  transform:rotate(-45deg);\r\n  width:100%;\r\n  height:100%;\r\n  position:absolute;\r\n}\r\n\r\n.group1{\r\n  left:50%;\r\n  position:absolute;\r\n  -webkit-transition:opacity 0.35s, -webkit-transform 0.35s;\r\n  transition:opacity 0.35s, -webkit-transform 0.35s;\r\n  transition:opacity 0.35s, transform 0.35s;\r\n  transition:opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n  -webkit-transform:translate3d(-50%,-50%,0);\r\n  transform:translate3d(-50%,-50%,0);\r\n  -webkit-transform-origin:50%;\r\n  transform-origin:50%;\r\n  background-color:transparent;\r\n  margin:0px;\r\n  padding:0px;\r\n}\r\n\r\n.group1{\r\n  top:50%;\r\n}\r\n\r\n.hovereffect p{\r\n  width:30%;\r\n  text-transform:none;\r\n  font-size:15px;\r\n  line-height:2;\r\n}\r\n\r\n.hovereffect p a{\r\n  color:#fff;\r\n}\r\n\r\n.hovereffect p a:hover,\r\n.hovereffect p a:focus{\r\n  opacity:0.6;\r\n  filter:alpha(opacity=60);\r\n}\r\n\r\n.hovereffect  a i{\r\n  opacity:0;\r\n  filter:alpha(opacity=0);\r\n  -webkit-transition:opacity 0.35s, -webkit-transform 0.35s;\r\n  transition:opacity 0.35s, -webkit-transform 0.35s;\r\n  transition:opacity 0.35s, transform 0.35s;\r\n  transition:opacity 0.35s, transform 0.35s, -webkit-transform 0.35s;\r\n  padding:10px;\r\n  font-size:20px;\r\n}\r\n\r\n.group1 a:first-child i{\r\n  -webkit-transform:translate3d(-60px,-60px,0) rotate(45deg) scale(2);\r\n  transform:translate3d(-60px,-60px,0) rotate(45deg) scale(2);\r\n}\r\n\r\n.hovereffect:hover .group1 i{\r\n  -webkit-transform:translate3d(0,0,0);\r\n  transform:translate3d(0,0,0) rotate(45deg) scale(1);\r\n  opacity:1;\r\n  filter:alpha(opacity=100);\r\n}'},663:function(t,n){t.exports='<nav class="navbar navbar-default">\n  <div class="container-fluid">\n    <div class="navbar-header">\n      <a class="navbar-brand" href="#">CRAZY APPS</a>\n    </div>\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n      <ul class="nav navbar-nav">\n        <li class="active"><a [routerLink]="[\'/apps\']">Apps</a></li>\n        <li><a href="#">Games</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n'},664:function(t,n){t.exports='<div *ngIf="application">\r\n    <div class="col-md-6 col-md-offset-3">\r\n        <div class="panel panel-default">\r\n            <div class="panel-heading">\r\n                <h3 class="panel-title">{{application.appName}}</h3>\r\n            </div>\r\n            <div class="panel-body">\r\n                <img class="img-responsive" src="{{application.thumbnailUrl}}" alt="">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="col-md-4 col-md-offset-4">\r\n    <img src="https://i.stack.imgur.com/fABGY.png" alt="">\r\n</div>\r\n\r\n<a href="https://poratalks.info/apps/1/a/?code=AQBTlEy-zAqwgjIzV-CLtJ_anDl4CRaJc8Yd0yxDou_J6gLOsVuHY5oPK33I0mZzji9JBLuT7vOGEAJ5GzUg77AXa3_QMwAS7v3qCreh-XhFxoc8YBWL2hCozptANvmrgxMJcUFxVu6UQO1EahlZMJ2_dK8f5QgqE9pvIAJhhxEnigVRnead-ugNxn9GRChF_Q72hRCQP89dB8CemTK8jXLkmMa3sBf_pzk9SHXP969hM_Ra3BSturDJzf-o5Z8js--PREH5--1YudbOgbEV3YuURn6aBphL0mS8zjOZUX2eK8aE58eD9FSNumHgiFHvcITMdDhimxmjNgy75pFYicBF&state=3e0333aa726ea8926d9aef187bb5a5d0#_=_"></a>\r\n\r\n<a href="https://www.facebook.com/sharer.php?u=https://poratalks.info/apps/1/a/?id=1251903438203943"></a>\r\n\r\n<a href="http://www.facebook.com/sharer.php?u=https://poratalks.info/apps/1/a/?id=1251903438203943"></a>'},665:function(t,n){t.exports='<div class="row">\n<div class="col-md-6 col-md-offset-3">\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h3 class="panel-title">Most Popular</h3>\n    </div>\n    <div class="panel-body">\n\n      <div class="hovereffect">\n        <a href="#">\n          <img class="img-responsive" src="https://poratalks.info/inc/img/48.jpg" alt="">\n          <div class="overlay">\n            <div class="rotate">\n              <p class="group1">\n                <a href="#">\n                  <i class="fa fa-eye"> Click</i>\n                </a>\n              </p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<div *ngFor="let application of applications" class="col-md-4">\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <h3 class="panel-title">{{application.appName}}</h3>\n    </div>\n    <div class="panel-body">\n\n      <div class="hovereffect">\n        <a [routerLink]="[\'/apps\', application.appId]">\n          <img class="img-responsive" src="{{application.thumbnailUrl}}" alt="">\n          <div class="overlay">\n            <div class="rotate">\n              <p class="group1">\n                <a [routerLink]="[\'/apps\', application.appId]">\n                  <i class="fa fa-eye"> Click</i>\n                </a>\n              </p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>'},689:function(t,n,e){t.exports=e(384)}},[689]);
//# sourceMappingURL=main.c21be6c9e8ef7b712458.bundle.map