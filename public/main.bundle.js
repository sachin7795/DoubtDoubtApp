webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    text-align : center;\r\n    \r\n}\r\n\r\n.jumbotron{\r\n    margin-bottom : 1%;\r\n}\r\n\r\nimg{\r\n    width : 100%;\r\n    height : 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <img src=\"../../assets/images/aboutimage.png\" alt=\"image not found\">\n          </div>\n        </div>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h2>DOUBT!!DOUBT!! app is build as a project and is based on MEAN(MongoDB, Express, Angular, NodeJS) stack.</h2>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n   background-color: black;\r\n   padding : 20px;\r\n   height : 100%;\r\n}\r\n\r\nfooter{\r\n    color : white;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n<flash-messages></flash-messages>\n</div>\n<router-outlet></router-outlet>\n\n<div class=\"container\">\n<hr>\n<div class=\"row\">\n<footer>\n    <div class=\"col-sm-9\">\n    &copy; copywrite DoubtDoubt.com<br>\n    <a routerLink=\"/about\">About</a><br>\n    <a routerLink=\"/teachers\">Teachers</a>\n    </div>\n    <div id=\"right\" class=\"col-sm-3\">\n        Designed and Developed By : <br>\n        <a href=\"http://sachinsinghchaudhary.herokuapp.com\"><strong>Sachin Singh</strong></a><br>\n        sachinx1000@gmail.com\n    </div>\n</footer>\n</div>\n\n<div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_doubtapp_service__["a" /* DoubtappService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dummy_dummy_component__ = __webpack_require__("../../../../../src/app/dummy/dummy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loggedin_home_loggedin_home_component__ = __webpack_require__("../../../../../src/app/loggedin-home/loggedin-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__studentsignup_studentsignup_component__ = __webpack_require__("../../../../../src/app/studentsignup/studentsignup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__teachers_teachers_component__ = __webpack_require__("../../../../../src/app/teachers/teachers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__teachersignup_teachersignup_component__ = __webpack_require__("../../../../../src/app/teachersignup/teachersignup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__transform_pipe__ = __webpack_require__("../../../../../src/app/transform.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: 'teachers',
        component: __WEBPACK_IMPORTED_MODULE_15__teachers_teachers_component__["a" /* TeachersComponent */]
    },
    { path: 'teachersignup',
        component: __WEBPACK_IMPORTED_MODULE_16__teachersignup_teachersignup_component__["a" /* TeachersignupComponent */]
    },
    {
        path: 'studentsignup',
        component: __WEBPACK_IMPORTED_MODULE_14__studentsignup_studentsignup_component__["a" /* StudentsignupComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'loggedinHome',
        component: __WEBPACK_IMPORTED_MODULE_10__loggedin_home_loggedin_home_component__["a" /* LoggedinHomeComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'dummy',
        component: __WEBPACK_IMPORTED_MODULE_8__dummy_dummy_component__["a" /* DummyComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__teachers_teachers_component__["a" /* TeachersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__teachersignup_teachersignup_component__["a" /* TeachersignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__studentsignup_studentsignup_component__["a" /* StudentsignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__loggedin_home_loggedin_home_component__["a" /* LoggedinHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__transform_pipe__["a" /* TransformPipe */],
            __WEBPACK_IMPORTED_MODULE_8__dummy_dummy_component__["a" /* DummyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#subbut{\r\n    width : 100%;\r\n}\r\n\r\n@media only screen and (max-width : 480px){\r\n    #postimage{\r\n        width : 40%;\r\n        height : 40%;\r\n        float : left;\r\n        margin-right : 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"page-header\">Submit your Doubt here!!</h1>\n<form ngNativeValidate (submit)=\"doubtAsked()\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n                <label>Subject</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"subject\" name=\"subject\" required\n                placeholder=\"Enter subject here...\">\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n                <label>Topic</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"topic\" name=\"topic\" required\n                placeholder=\"Enter topic here...\">\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n                <label>Doubt</label>\n                <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"doubt\" name=\"doubt\" required \n                placeholder=\"Ask your doubt here...\"></textarea>\n            </div>\n            <input id=\"subbut\" type=\"submit\" value=\"ASK\" class=\"btn btn-success\">\n        </div>\n    </div>\n</form>\n<h2 class=\"page-header\">Asked Doubts</h2>\n<div *ngFor=\"let savedDoubt of doubts | transform ; let item=index\">\n    <div class=\"well\">\n        <div class=\"row\">\n            <div class=\"col-sm-2\">\n                <img  id=\"postimage\" src=\"../../assets/images/smallicon.png\" alt=\"icon missing\">\n            </div>\n            <div class=\"col-sm-10\">\n                <h2>{{savedDoubt.department}} Department</h2>\n                <h4>Subject : {{savedDoubt.subject}}</h4>\n                <h4>Topic : {{savedDoubt.topic}}</h4>\n            </div>\n        </div><br>\n            <div style=\"background-color: white;text-align:center; color:black;\" class=\"well\"><p>{{savedDoubt.query}}</p></div>\n        <div *ngFor=\"let answer of savedDoubt.answers\" style=\"background-color: lightgreen;text-align:center; color:black;\" class=\"well\"><p>{{answer}}</p></div>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <h4><span class=\"glyphicon glyphicon-user\">  </span>  {{savedDoubt.username}}</h4>\n            </div>\n            <div class=\"col-sm-6\">\n                    <input (click)=\"reportPost(savedDoubt.query, savedDoubt.department,savedDoubt.subject,savedDoubt.topic)\" style=\"float : right;margin-left:1%;\" type=\"button\" value=\"Report this post\" class=\"btn btn-danger\">\n                <input (click)=\"showhide(item)\" style=\"float : right;\" type=\"button\" value=\"Answer\" class=\"btn btn-success\">\n                \n            </div>\n        </div>\n        <form ngNativeValidate *ngIf=\"item == onlyOneItem\" (submit)=\"submitAnswer(submittedAnswer,savedDoubt.query, savedDoubt.department,savedDoubt.subject,savedDoubt.topic,item)\">\n        <textarea class=\"form-control\" row=\"4\" placeholder=\"Answer here...\" [(ngModel)]=\"submittedAnswer\" name=\"submittedAnswer\" required></textarea>\n        <input type=\"submit\" style=\"width:100%;\" value=\"Submit Answer\" class=\"btn btn-success\" >\n        </form>\n    \n        \n    \n        \n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(doubtappService, router, flashMessage) {
        this.doubtappService = doubtappService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.doubts = this.doubtappService.askeddoubts;
        this.answers = this.doubtappService.answereddoubts;
        this.currentUser = window.localStorage.getItem('4');
        this.date = (new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() + ' at ' + new Date().getHours() + ':' + new Date().getMinutes());
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.flashMessage.show('You must LogIn First', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['login']);
        }
        this.doubtappService.getDoubts()
            .subscribe(function (doubts) { return _this.doubts = doubts; });
    };
    DashboardComponent.prototype.doubtAsked = function () {
        var _this = this;
        var askedDoubt = {
            department: window.localStorage.getItem('1'),
            username: window.localStorage.getItem('4'),
            subject: this.subject,
            topic: this.topic,
            doubt: (this.doubt + '  - by ' + this.currentUser + ' on ' + this.date)
        };
        this.flashMessage.show('You\'ve asked your doubt successfully', { cssClass: 'alert-success', timeout: 5000 });
        this.doubtappService.addDoubt(askedDoubt).subscribe(function (question) { return _this.doubts.unshift(question); });
        //this.router.navigate(['profile']); 
        this.subject = '';
        this.topic = '';
        this.doubt = '';
    };
    DashboardComponent.prototype.showhide = function (item) {
        this.onlyOneItem = item;
    };
    DashboardComponent.prototype.submitAnswer = function (submittedAnswer, query, department, subject, topic, item) {
        var _this = this;
        var answerObject = {
            queryfs: query,
            departmentfs: department,
            subjectfs: subject,
            topicfs: topic,
            submittedAnswerfs: (submittedAnswer + '   - by ' + this.currentUser + ' on ' + this.date)
        };
        this.doubtappService.answerDoubts(answerObject).subscribe(function (answer) { return _this.doubts[item] = answer; });
        this.submittedAnswer = '';
    };
    DashboardComponent.prototype.reportPost = function (query, department, subject, topic) {
        var _this = this;
        var reportedPost = {
            queryfs: query,
            departmentfs: department,
            subjectfs: subject,
            topicfs: topic,
            usernamefs: window.localStorage.getItem('4')
        };
        this.doubtappService.reportthePost(reportedPost).subscribe(function (post) { return _this.post = post; });
        alert('You\'ve reported this post successfully');
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/doubtapp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubtappService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoubtappService = (function () {
    function DoubtappService(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    // retreiving teachers
    DoubtappService.prototype.getTeachers = function () {
        //return this.http.get('http://localhost:3000/api/teachers')
        return this.http.get('api/teachers')
            .map(function (res) { return res.json(); });
    };
    // add teacher
    DoubtappService.prototype.addTeacher = function (newTeacher) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/teacher', newTeacher, {headers : headers})
        return this.http.post('api/teacher', newTeacher, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // add student
    DoubtappService.prototype.addStudent = function (newStudent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/student', newStudent, {headers : headers})
        return this.http.post('api/student', newStudent, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //checking login status
    DoubtappService.prototype.loggedIn = function () {
        if (window.localStorage.getItem('0') == 'N/A') {
            return false;
        }
        else {
            return true;
        }
    };
    //logging in
    DoubtappService.prototype.loginCheck = function (user) {
        if (user.role === 'student') {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            //return this.http.post('http://localhost:3000/api/studentauthenticate', user, {headers : headers})
            return this.http.post('api/studentauthenticate', user, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        if (user.role === 'teacher') {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            //return this.http.post('http://localhost:3000/api/teacherauthenticate', user, {headers : headers})
            return this.http.post('api/teacherauthenticate', user, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else {
            this.flashMessage.show('Please choose a Role', { cssClass: 'alert-danger', timeout: 5000 });
        }
    };
    //saving user data
    DoubtappService.prototype.saveData = function (data) {
        window.localStorage.setItem('0', data.name);
        window.localStorage.setItem('1', data.department);
        if (data.semester) {
            window.localStorage.setItem('2', data.semester);
        }
        else {
            window.localStorage.setItem('2', 'N/A');
        }
        if (data.rollnumber) {
            window.localStorage.setItem('3', data.rollnumber);
        }
        else {
            window.localStorage.setItem('3', 'N/A');
        }
        window.localStorage.setItem('4', data.username);
        window.localStorage.setItem('5', data.email);
    };
    //check teacher username availability
    DoubtappService.prototype.checkUsername = function (username) {
        var user = { username: username };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/checkteacherusername', user, {headers : headers})
        return this.http.post('api/checkteacherusername', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //check student username availability
    DoubtappService.prototype.stucheckUsername = function (username) {
        var user = { username: username };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/checkstudentusername', user, {headers : headers})
        return this.http.post('api/checkstudentusername', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Add doubt
    DoubtappService.prototype.addDoubt = function (askedDoubt) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/addDoubt', askedDoubt, {headers : headers})
        return this.http.post('api/addDoubt', askedDoubt, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Getting doubts
    DoubtappService.prototype.getDoubts = function () {
        //return this.http.get('http://localhost:3000/api/doubts')
        return this.http.get('api/doubts')
            .map(function (res) { return res.json(); });
    };
    //Answer doubts
    DoubtappService.prototype.answerDoubts = function (answerObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/storeAnswer', answerObject, {headers : headers})
        return this.http.post('api/storeAnswer', answerObject, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //refreshing dashboard
    DoubtappService.prototype.refreshngo = function () {
        this.router.navigate(['dashboard']);
    };
    //get user doubts
    DoubtappService.prototype.getUserDoubts = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/userDoubts', data, {headers : headers})
        return this.http.post('api/userDoubts', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete user doubt
    DoubtappService.prototype.DeleteUserDoubt = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/deleteUserDoubt', user, {headers : headers})
        return this.http.post('api/deleteUserDoubt', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Report Post
    DoubtappService.prototype.reportthePost = function (reportedPost) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        //return this.http.post('http://localhost:3000/api/reportPost', reportedPost, {headers : headers})
        return this.http.post('api/reportPost', reportedPost, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return DoubtappService;
}());
DoubtappService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DoubtappService);

var _a, _b, _c;
//# sourceMappingURL=doubtapp.service.js.map

/***/ }),

/***/ "../../../../../src/app/dummy/dummy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width : 480px){\r\n    img{\r\n        width : 100%;\r\n        height : 100%;\r\n        \r\n       \r\n    }\r\n\r\n    .container{\r\n        text-align : center;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dummy/dummy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <input type=\"button\" style=\"float:right;margin-right:0.1%;\" class=\"btn btn-info\" value=\"Your Doubts\" (click)=\"gotodoubts()\">\r\n    <input type=\"button\" style=\"float:right;margin-right:1%;\" class=\"btn btn-success\" value=\"Your Profile\" (click)=\"gotoprofile()\">\r\n    <h1 style=\"text-align:left;\" class=\"page-header\">Your Profile!!</h1>\r\n    <div class=\"well\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5\">\r\n          \r\n            <img src=\"../assets/images/profile.png\" alt=\"profilephoto\">\r\n          \r\n      </div>\r\n      <div class=\"col-sm-7\">\r\n          <div class=\"jumbotron\">\r\n            <h1>{{name}}</h1>\r\n            <h3>Department : {{department}}</h3>\r\n            <h3>Semester : {{semester}}</h3>\r\n            <h3>Roll Number : {{rollnumber}}</h3>\r\n            <h3>Username : {{username}}</h3>\r\n            <h3>Email : {{email}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dummy/dummy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DummyComponent = (function () {
    function DummyComponent(router, flashMessage) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.name = window.localStorage.getItem('0');
        this.department = window.localStorage.getItem('1');
        this.semester = window.localStorage.getItem('2');
        this.rollnumber = window.localStorage.getItem('3');
        this.username = window.localStorage.getItem('4');
        this.email = window.localStorage.getItem('5');
    }
    DummyComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.flashMessage.show('You must LogIn First', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['login']);
        }
    };
    DummyComponent.prototype.gotodoubts = function () {
        this.router.navigate(['profile']);
    };
    DummyComponent.prototype.gotoprofile = function () {
        this.router.navigate(['doubts']);
    };
    return DummyComponent;
}());
DummyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dummy',
        template: __webpack_require__("../../../../../src/app/dummy/dummy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dummy/dummy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _b || Object])
], DummyComponent);

var _a, _b;
//# sourceMappingURL=dummy.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    text-align : center;\r\n    margin-bottom : 15px;\r\n    \r\n    \r\n   \r\n}\r\n\r\n#doubtjumbo{\r\n    padding-top : 1%;\r\n}\r\n\r\n#mainimage{\r\n    width : 100%;\r\n}\r\n\r\n#new,#new1{\r\n    padding : 15px;\r\n}\r\n\r\n.btn{\r\n    width : 50%;\r\n    margin-bottom : 0.5%;\r\n}\r\n\r\n#img1, #img2{\r\n    width : 100%;\r\n}\r\n\r\nh1,h2{\r\n    text-align: center;\r\n}\r\n\r\np{\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    font-size : 18px;\r\n}\r\n\r\n#j2{\r\n    padding : 50px;\r\n    font-size : 20px;\r\n    text-align: justify;\r\n}\r\n\r\n#j1{\r\n    padding : 40px;\r\n    text-align: justify;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n  <div id=\"doubtjumbo\" class=\"jumbotron\">\n    <h1>Have a Doubt?</h1>\n    <h2>Well you are at right place!!</h2><br>\n    <input type=\"button\" class=\"btn btn-info\" value=\"LogIn\" routerLink=\"/login\">\n    <input type=\"button\" class=\"btn btn-success\" value=\"SignUp as a Student\" routerLink=\"/studentsignup\">\n  </div>\n\n  \n  <div id=\"teacherjumbo\" class=\"jumbotron\">\n      <h1>Are you a Teacher?</h1>\n      <h2>Please join us and solve the Doubts and help the students!!</h2><br>\n      <input type=\"button\" class=\"btn btn-info\" value=\"LogIn\" routerLink=\"/login\">\n      <input type=\"button\" class=\"btn btn-success\" value=\"SignUp as a Teacher\" routerLink=\"/teachersignup\">\n  </div>\n\n  \n  <div id=\"expertjumbo\" class=\"jumbotron\">\n      <h1>Experts to solve your every DOUBT!!</h1>\n      <h2>So many experienced teachers have already joined us and believing in us!!</h2><br>\n      <input type=\"button\" class=\"btn btn-info\" value=\"Teachers who believe in us!!\" routerLink=\"/teachers\">\n  </div>\n  \n  \n  <div id=\"new\" class=\"jumbotron\">\n  <div class=\"row\">\n    <h1>No Confusion!!</h1><br>\n    <div class=\"col-sm-6\">\n      <img src=\"../assets/images/homecover2.jpg\" alt=\"image not found\" id=\"img1\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p class=\"jumbotron\" id=\"j1\">Dont be confused and dont waste your time in confusion. We have experts from every department and \n        they will solve your doubts and will help you to build your concepts clearly. Do you have fear that \n        others will laugh if you will ask something or what teacher will think about me? Then this platform is for you.\n        Don't hesitate and ask your queries freely without any fear and solve all your doubts in minimum time. \n      </p>\n    </div>\n  </div>\n  </div>\n  \n  \n  <div id=\"new1\" class=\"jumbotron\">\n  <div class=\"row\">\n    <h1>Best Teachers!!</h1><br>\n    <div class=\"col-sm-6\">\n      <p class=\"jumbotron\" id=\"j2\">We have experts from every subject and topic to answer your queries and clear your doubts.\n          So many teachers from every department have already joined us and are helping us to improve the\n          education system in the many institutions. Not just they are intellectual but also friendly, \n          You will get best experience from them.\n      </p>\n    </div>\n    <div class=\"col-sm-6\">\n        <img src=\"../assets/images/homeexperts.jpg\" alt=\"image not found\" id=\"img2\">\n    </div>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            window.localStorage.setItem('0', 'N/A');
            window.localStorage.setItem('1', 'N/A');
            window.localStorage.setItem('2', 'N/A');
            window.localStorage.setItem('3', 'N/A');
            window.localStorage.setItem('4', 'N/A');
            window.localStorage.setItem('5', 'N/A');
        }
        else {
            this.router.navigate(['loggedinHome']);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loggedin-home/loggedin-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    text-align : center;\r\n    margin-bottom : 15px;\r\n    \r\n    \r\n   \r\n}\r\n\r\n#new,#new1{\r\n    padding : 15px;\r\n}\r\n\r\n.btn{\r\n    width : 60%;\r\n    margin-bottom : 0.5%;\r\n}\r\n\r\n#img1, #img2{\r\n    width : 100%;\r\n}\r\n\r\nh1,h2{\r\n    text-align: center;\r\n}\r\n\r\np{\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    font-size : 18px;\r\n}\r\n\r\n#j2{\r\n    padding : 50px;\r\n    font-size : 20px;\r\n    text-align: justify;\r\n}\r\n\r\n#j1{\r\n    padding : 40px;\r\n    text-align: justify;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loggedin-home/loggedin-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"doubtjumbo\" class=\"jumbotron\">\n    <h1>Have a Doubt?</h1>\n    <h2>Well you are at right place!!</h2>\n    <input type=\"button\" class=\"btn btn-info\" value=\"Go to Dashboard\" routerLink=\"/dashboard\">\n    <input type=\"button\" class=\"btn btn-success\" value=\"Go to your Profile\" routerLink=\"/dummy\">\n  </div>\n\n  <div id=\"teacherjumbo\" class=\"jumbotron\">\n      <h1>Are you a Teacher?</h1>\n      <h2>Please solve the Doubts and help the students!!</h2>\n      <input type=\"button\" class=\"btn btn-info\" value=\"Go to Dashboard\" routerLink=\"/dashboard\">\n      <input type=\"button\" class=\"btn btn-success\" value=\"Go to your Profile\" routerLink=\"/dummy\">\n  </div>\n\n  <div id=\"expertjumbo\" class=\"jumbotron\">\n      <h1>Experts to solve your every DOUBT!!</h1>\n      <h2>So many experienced teachers have already joined us and believing in us!!</h2><br>\n      <input type=\"button\" class=\"btn btn-info\" value=\"Teachers who believe in us!!\" routerLink=\"/teachers\">\n  </div>\n  \n  \n  <div id=\"new\" class=\"jumbotron\">\n  <div class=\"row\">\n    <h1>No Confusion!!</h1><br>\n    <div class=\"col-sm-6\">\n      <img src=\"../assets/images/homecover2.jpg\" alt=\"image not found\" id=\"img1\">\n    </div>\n    <div class=\"col-sm-6\">\n      <p class=\"jumbotron\" id=\"j1\">Dont be confused and dont waste your time in confusion. We have experts from every department and \n        they will solve your doubts and will help you to build your concepts clearly. Do you have fear that \n        others will laugh if you will ask something or what teacher will think about me? Then this platform is for you.\n        Don't hesitate and ask your queries freely without any fear and solve all your doubts in minimum time. \n      </p>\n    </div>\n  </div>\n  </div>\n  \n  \n  <div id=\"new1\" class=\"jumbotron\">\n  <div class=\"row\">\n    <h1>Best Teachers!!</h1><br>\n    <div class=\"col-sm-6\">\n      <p class=\"jumbotron\" id=\"j2\">We have experts from every subject and topic to answer your queries and clear your doubts.\n          So many teachers from every department have already joined us and are helping us to improve the\n          education system in the many institutions. Not just they are intellectual but also friendly, \n          You will get best experience from them.\n      </p>\n    </div>\n    <div class=\"col-sm-6\">\n        <img src=\"../assets/images/homeexperts.jpg\" alt=\"image not found\" id=\"img2\">\n    </div>\n  </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/loggedin-home/loggedin-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedinHomeComponent = (function () {
    function LoggedinHomeComponent(router) {
        this.router = router;
    }
    LoggedinHomeComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.router.navigate(['login']);
        }
    };
    return LoggedinHomeComponent;
}());
LoggedinHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loggedin-home',
        template: __webpack_require__("../../../../../src/app/loggedin-home/loggedin-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loggedin-home/loggedin-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LoggedinHomeComponent);

var _a;
//# sourceMappingURL=loggedin-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select option{\r\n    font-weight : bold;\r\n    font-size : 14px;\r\n    margin : 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form ngNativeValidate (submit)=\"onLoginSubmit()\">\n  <h2 class=\"page-header\">Login</h2>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required placeholder=\"Enter your username here...\">\n  </div>\n  <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required placeholder=\"Enter your password here...\">\n  </div><br>\n  <div class=\"form-group\">\n      <label>Role</label>\n      <select  class=\"form-control\" [(ngModel)]=\"role\" name=\"role\">\n        <option value=\"student\">Student</option>\n        <option value=\"teacher\">Teacher</option>\n      </select>\n  </div><br>\n  <input type=\"submit\" value=\"Login\" class=\"btn btn-info\">\n  <input routerLink=\"/home\" type=\"button\" value=\"Cancel\" class=\"btn btn-danger\">\n</form>{{this.name}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(doubtappService, router, dashboard, flashMessage) {
        this.doubtappService = doubtappService;
        this.router = router;
        this.dashboard = dashboard;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.check = 0;
        }
        else {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            role: this.role
        };
        this.doubtappService.loginCheck(user).subscribe(function (data) {
            if (data.status === true) {
                _this.doubtappService.saveData(data.userData);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show('User not found', { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */], __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand:hover{\r\n    cursor : pointer;\r\n}\r\n\r\n#logidout:hover{\r\n    cursor : pointer;\r\n}\r\n\r\nnav{\r\n    background-color:#28AA28;\r\n    \r\n}\r\n\r\n#navbar ul li a{\r\n    color:white;\r\n    font-weight:bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-tabs\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button style=\"color:white;\" type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <img src=\"../assets/images/navbut.png\" alt=\"image not found\">\n            </button>\n        <a style=\"color:white;font-weight:bold;\" class=\"navbar-brand\" (click)=\"whichhome()\">DOUBT!! DOUBT!!</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li *ngIf=\"!doubtappService.loggedIn()\" routerLinkActive=\"true\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/home\">Home</a></li>\n        <li *ngIf=\"doubtappService.loggedIn()\"><a routerLink=\"/loggedinHome\">Home</a></li>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/teachers\">Teachers</a></li>\n        \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"doubtappService.loggedIn()\"><a routerLink=\"/dummy\">Profile</a></li>\n          <li *ngIf=\"doubtappService.loggedIn()\"><a routerLink=\"/dashboard\">Dashboard</a></li>\n          <li *ngIf=\"!doubtappService.loggedIn()\" class=\"dropdown\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Register\n              <span class=\"caret\"></span></a>\n              <ul style=\"background-color:#199719;\" class=\"dropdown-menu\">\n                <li style=\"text-align:center;\"><a routerLink=\"/teachersignup\">As Teacher</a></li>\n                <li style=\"text-align:center;\"><a routerLink=\"/studentsignup\">As Student</a></li>\n              </ul>\n          </li>\n        <li *ngIf=\"!doubtappService.loggedIn()\"><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li id=\"logidout\" (click)=\"onLogout()\" *ngIf=\"doubtappService.loggedIn()\"><a>Logout</a></li>\n      </ul>\n    </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(doubtappService, router) {
        this.doubtappService = doubtappService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            window.localStorage.setItem('0', 'N/A');
            window.localStorage.setItem('1', 'N/A');
            window.localStorage.setItem('2', 'N/A');
            window.localStorage.setItem('3', 'N/A');
            window.localStorage.setItem('4', 'N/A');
            window.localStorage.setItem('5', 'N/A');
        }
    };
    NavbarComponent.prototype.onLogout = function () {
        window.localStorage.setItem('0', 'N/A');
        window.localStorage.setItem('1', 'N/A');
        window.localStorage.setItem('2', 'N/A');
        window.localStorage.setItem('3', 'N/A');
        window.localStorage.setItem('4', 'N/A');
        window.localStorage.setItem('5', 'N/A');
        this.visible = 'no';
        this.router.navigate(['home']);
    };
    NavbarComponent.prototype.whichhome = function () {
        if (window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') == '') {
            this.router.navigate(['home']);
        }
        else {
            this.router.navigate(['loggedinHome']);
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    text-align: center;\r\n}\r\n\r\nimg{\r\n    \r\n    height : 100%;\r\n    width : 100%;\r\n}\r\n\r\n.jumbotron{\r\n    padding : 10%;\r\n    height : 100%;\r\n    width : 100%;\r\n}\r\n\r\n@media only screen and (max-width : 480px){\r\n    #postimage{\r\n        width : 40%;\r\n        height : 40%;\r\n        float : left;\r\n        margin-right : 10px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <input type=\"button\" style=\"float:right;margin-right:0.1%;\" class=\"btn btn-info\" value=\"Your Doubts\" (click)=\"gotodoubts()\">\n        <input type=\"button\" style=\"float:right;margin-right:1%;\" class=\"btn btn-success\" value=\"Your Profile\" (click)=\"gotoprofile()\">\n  <h1 style=\"text-align:left;\" class=\"page-header\">Your DOUBTS!!</h1>\n  <div *ngFor=\"let userDoubt of userDoubts | transform ; let item=index\">\n      <div class=\"well\">\n          <div class=\"row\">\n              <div class=\"col-sm-2\">\n                  <img id=\"postimage\" src=\"../../assets/images/smallicon.png\" alt=\"icon missing\">\n              </div>\n              <div style=\"text-align:left;\" class=\"col-sm-10\">\n                  <h2>{{userDoubt.department}} Department</h2>\n                  <h4>Subject : {{userDoubt.subject}}</h4>\n                  <h4>Topic : {{userDoubt.topic}}</h4>\n              </div>\n          </div><br>\n              <div style=\"background-color: white;text-align:center; color:black;\" class=\"well\"><p>{{userDoubt.query}}</p></div>\n          <div *ngFor=\"let answer of userDoubt.answers\" style=\"background-color: lightgreen;text-align:center; color:black;\" class=\"well\"><p>{{answer}}</p></div>\n          <div class=\"row\">\n              <div class=\"col-sm-6\">\n                  <h4 style=\"float:left;\"><span class=\"glyphicon glyphicon-user\">  </span>  {{userDoubt.username}}</h4>\n              </div>\n              <div class=\"col-sm-6\">\n                    <input (click)=\"deleteUserDoubt(userDoubt.username,userDoubt.query,item)\" style=\"float : right;margin-left:1%;\" type=\"button\" value=\"Delete\" class=\"btn btn-danger\">\n                <input (click)=\"showhide(item)\" style=\"float : right;\" type=\"button\" value=\"Reply\" class=\"btn btn-success\">\n                \n            </div>\n        </div>\n        <form ngNativeValidate *ngIf=\"item == onlyOneItem\" (submit)=\"submitAnswer(submittedAnswer,userDoubt.query, userDoubt.department,userDoubt.subject,userDoubt.topic,item)\">\n        <textarea class=\"form-control\" row=\"4\" placeholder=\"Answer here...\" [(ngModel)]=\"submittedAnswer\" name=\"submittedAnswer\" required></textarea>\n        <input type=\"submit\" style=\"width:100%;\" value=\"Reply\" class=\"btn btn-success\" >\n        </form>\n          </div>\n      </div>\n  </div>\n  \n\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(doubtappService, router, flashMessage) {
        this.doubtappService = doubtappService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.name = window.localStorage.getItem('0');
        this.department = window.localStorage.getItem('1');
        this.semester = window.localStorage.getItem('2');
        this.rollnumber = window.localStorage.getItem('3');
        this.username = window.localStorage.getItem('4');
        this.email = window.localStorage.getItem('5');
        this.userDoubts = this.doubtappService.userDoubts;
        this.currentUser = window.localStorage.getItem('4');
        this.date = (new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() + ' at ' + new Date().getHours() + ':' + new Date().getMinutes());
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.flashMessage.show('You must LogIn First', { cssClass: 'alert-danger', timeout: 3000 });
            this.router.navigate(['login']);
        }
        var data = { username: this.username };
        this.doubtappService.getUserDoubts(data)
            .subscribe(function (userdoubts) { return _this.userDoubts = userdoubts; });
    };
    ProfileComponent.prototype.gotoprofile = function () {
        this.router.navigate(['dummy']);
    };
    ProfileComponent.prototype.gotodoubts = function () {
        this.router.navigate(['profile']);
    };
    ProfileComponent.prototype.deleteUserDoubt = function (usernametd, querytd, item) {
        var _this = this;
        var user = { usernameD: usernametd, queryD: querytd };
        this.doubtappService.DeleteUserDoubt(user)
            .subscribe(function (deletedDoubt) { return _this.deletedDoubt = deletedDoubt; });
        var data = { username: this.username };
        this.doubtappService.getUserDoubts(data)
            .subscribe(function (userdoubts) { return _this.userDoubts = userdoubts; });
    };
    ProfileComponent.prototype.showhide = function (item) {
        this.onlyOneItem = item;
    };
    ProfileComponent.prototype.submitAnswer = function (submittedAnswer, query, department, subject, topic, item) {
        var _this = this;
        var answerObject = {
            queryfs: query,
            departmentfs: department,
            subjectfs: subject,
            topicfs: topic,
            submittedAnswerfs: (submittedAnswer + '   - by ' + this.currentUser + ' on ' + this.date)
        };
        this.doubtappService.answerDoubts(answerObject).subscribe(function (answer) { return _this.userDoubts[item] = answer; });
        this.submittedAnswer = '';
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/studentsignup/studentsignup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#msg{\r\n    color : red;\r\n    font-weight : bold;\r\n}\r\n\r\nselect option{\r\n    font-weight : bold;\r\n    font-size : 14px;\r\n    margin : 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/studentsignup/studentsignup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Sign Up as a Student</h2>\n  <form ngNativeValidate (submit)=\"addStudent()\">\n    <div class=\"form-group\">\n      <label>Full Name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" required placeholder=\"Enter your full name here...\">\n    </div>\n    <div class=\"form-group\">\n      <label>Department</label>\n      <select class=\"form-control\" [(ngModel)]=\"department\" name=\"department\" required>\n      <option value=\"MTECH\" selected=\"selected\">M.TECH</option>\n      <option value=\"MCA\">MCA</option>\n      <option value=\"MBA\">MBA</option>\n    </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Roll Number</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"rollnumber\" name=\"rollnumber\" required placeholder=\"Enter your roll number here...\">\n    </div>\n    <div class=\"form-group\">\n      <label>Semester</label>\n      <select class=\"form-control\" [(ngModel)]=\"semester\" name=\"semseter\" required>\n      <option value=\"I\" selected=\"selected\">I</option>\n      <option value=\"II\">II</option>\n      <option value=\"III\">III</option>\n      <option value=\"IV\">IV</option>\n      <option value=\"V\">V</option>\n      <option value=\"VI\">VI</option>\n      <option value=\"VII\">VII</option>\n      <option value=\"VIII\">VIII</option>\n      <option value=\"IX\">IX</option>\n      <option value=\"X\">X</option>\n      <option value=\"XI\">XI</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" (change)=\"susernamecheck($event)\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required placeholder=\"Enter username here...\">\n      <span id=\"msg\" *ngIf=\"available==true\">{{usernameMessage}}</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" (change)=\"passwordLength($event)\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required placeholder=\"Enter password here...\">\n      <span id=\"msg\" *ngIf=\"length==true\">{{passwordMessage}}</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required placeholder=\"Enter your email here...\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-success\" value=\"Sign Up\">\n    <input type=\"button\" routerLink=\"/home\" class=\"btn btn-danger\" value=\"Cancel\">\n  </form>\n  <br>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/studentsignup/studentsignup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentsignupComponent = (function () {
    function StudentsignupComponent(doubtappService, router, flashMessage) {
        this.doubtappService = doubtappService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.students = this.doubtappService.students;
        this.usernameMessage = "username already exists";
        this.passwordMessage = "password length must be of 8 or more than 8 characters";
        this.available = false;
        this.length = false;
    }
    StudentsignupComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.check = 0;
        }
        else {
            this.router.navigate(['dashboard']);
        }
    };
    StudentsignupComponent.prototype.addStudent = function () {
        var _this = this;
        var newStudent = {
            name: this.name,
            department: this.department,
            rollnumber: this.rollnumber,
            semester: this.semester,
            username: this.username,
            password: this.password,
            email: this.email
        };
        this.doubtappService.addStudent(newStudent)
            .subscribe(function (student) { return _this.students.push(student); });
        this.flashMessage.show('Your account has been created successfully', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['login']);
    };
    StudentsignupComponent.prototype.susernamecheck = function (username) {
        var _this = this;
        username = this.username;
        this.doubtappService.stucheckUsername(username)
            .subscribe(function (data) {
            //alert(JSON.stringify(data));
            if (JSON.stringify(data) === "[]") {
                //alert('username available');
                _this.available = false;
            }
            else {
                // alert('username already exists');
                _this.available = true;
            }
        });
    };
    StudentsignupComponent.prototype.passwordLength = function (password) {
        password = this.password;
        if (password.length < 8) {
            this.length = true;
        }
        else {
            this.length = false;
        }
    };
    return StudentsignupComponent;
}());
StudentsignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-studentsignup',
        template: __webpack_require__("../../../../../src/app/studentsignup/studentsignup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/studentsignup/studentsignup.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _c || Object])
], StudentsignupComponent);

var _a, _b, _c;
//# sourceMappingURL=studentsignup.component.js.map

/***/ }),

/***/ "../../../../../src/app/teachers/teachers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n    \r\n}\r\n\r\nimg{\r\n    margin : 2%;\r\n    float : left;\r\n}\r\n\r\n@media only screen and (max-width : 480px){\r\n    #teachimage{\r\n     height : 120px;\r\n     width : 130px;\r\n        \r\n       \r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teachers/teachers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Teachers who've trusted us and believing in us</h2>\n  <div class=\"row\"> \n  <div *ngFor=\"let teacher of teachers\">\n      \n        \n          <div class=\"col-sm-6\">\n      <img id=\"teachimage\" src=\"../../assets/images/teachericon.png\" alt=\"no image found\">\n        <div  >\n          <h2>{{teacher.name}}</h2>\n       \n          <p>{{teacher.department}} department</p>\n       \n            <p>{{teacher.username}}</p>\n         \n          <p>{{teacher.email}}</p>\n        </div>\n      </div>\n    </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/teachers/teachers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeachersComponent = (function () {
    function TeachersComponent(doubtappService) {
        this.doubtappService = doubtappService;
        this.teachers = this.doubtappService.teachers;
    }
    TeachersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doubtappService.getTeachers()
            .subscribe(function (teachers) { return _this.teachers = teachers; });
    };
    return TeachersComponent;
}());
TeachersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-teachers',
        template: __webpack_require__("../../../../../src/app/teachers/teachers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teachers/teachers.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object])
], TeachersComponent);

var _a;
//# sourceMappingURL=teachers.component.js.map

/***/ }),

/***/ "../../../../../src/app/teachersignup/teachersignup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#msg{\r\n    color : red;\r\n    font-weight : bold;\r\n}\r\n\r\nselect option{\r\n    font-weight : bold;\r\n    font-size : 14px;\r\n    margin : 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teachersignup/teachersignup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Sign Up as a Teacher</h2>\n  <form ngNativeValidate (submit)=\"addTeacher()\">\n        <div class=\"form-group\">\n          <label>Full Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" required placeholder=\"Enter your full name here...\">\n        </div>\n        <div class=\"form-group\">\n          <label>Department</label>\n          <select class=\"form-control\" [(ngModel)]=\"department\" name=\"department\" required>\n            <option value=\"MTECH\" selected=\"selected\">M.TECH</option>\n            <option value=\"MCA\">MCA</option>\n            <option value=\"MBA\">MBA</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Username</label>\n          <input type=\"text\" (change)=\"tusernamecheck($event)\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required placeholder=\"Enter username here...\">\n          <span id=\"msg\" *ngIf=\"available==true\">{{usernameMessage}}</span>\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" (change)=\"passwordLength($event)\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required placeholder=\"Enter password here...\">\n          <span id=\"msg\" *ngIf=\"length==true\">{{passwordMessage}}</span>\n        </div>\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" required placeholder=\"Enter your email here...\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Sign Up\">\n        <input type=\"button\" class=\"btn btn-danger\" routerLink=\"/home\" value=\"Cancel\">\n  </form>\n  <br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/teachersignup/teachersignup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachersignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__ = __webpack_require__("../../../../../src/app/doubtapp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeachersignupComponent = (function () {
    function TeachersignupComponent(doubtappService, router, flashMessage) {
        this.doubtappService = doubtappService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.teachers = this.doubtappService.teachers;
        this.usernameMessage = "username already exists";
        this.passwordMessage = "password length must be of 8 or more than 8 characters";
        this.available = false;
        this.length = false;
    }
    TeachersignupComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('4') == '' || window.localStorage.getItem('4') == 'N/A' || window.localStorage.getItem('4') === null) {
            this.check = 0;
        }
        else {
            this.router.navigate(['dashboard']);
        }
    };
    TeachersignupComponent.prototype.addTeacher = function () {
        var _this = this;
        var newTeacher = {
            name: this.name,
            department: this.department,
            username: this.username,
            password: this.password,
            email: this.email
        };
        this.doubtappService.addTeacher(newTeacher)
            .subscribe(function (teacher) {
            _this.teachers.push(teacher);
            _this.doubtappService.getTeachers()
                .subscribe(function (teachers) { return _this.teachers = teachers; });
        });
        this.flashMessage.show('Your account has been created successfully', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['login']);
    };
    TeachersignupComponent.prototype.tusernamecheck = function (username) {
        var _this = this;
        username = this.username;
        this.doubtappService.checkUsername(username)
            .subscribe(function (data) {
            //alert(JSON.stringify(data));
            if (JSON.stringify(data) === "[]") {
                //alert('username available');
                _this.available = false;
            }
            else {
                // alert('username already exists');
                _this.available = true;
            }
        });
    };
    TeachersignupComponent.prototype.passwordLength = function (password) {
        password = this.password;
        if (password.length < 8) {
            this.length = true;
        }
        else {
            this.length = false;
        }
    };
    return TeachersignupComponent;
}());
TeachersignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-teachersignup',
        template: __webpack_require__("../../../../../src/app/teachersignup/teachersignup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teachersignup/teachersignup.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__doubtapp_service__["a" /* DoubtappService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages_module__["FlashMessagesService"]) === "function" && _c || Object])
], TeachersignupComponent);

var _a, _b, _c;
//# sourceMappingURL=teachersignup.component.js.map

/***/ }),

/***/ "../../../../../src/app/transform.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransformPipe = (function () {
    function TransformPipe() {
    }
    TransformPipe.prototype.transform = function (value) {
        if (!value)
            return;
        return value.reverse();
    };
    return TransformPipe;
}());
TransformPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'transform'
    })
], TransformPipe);

//# sourceMappingURL=transform.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map