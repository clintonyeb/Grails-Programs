webpackJsonp([0,4],{

/***/ 1014:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(417);


/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Tweet; });
/* unused harmony export Vote */
/* unused harmony export Tag */
/* unused harmony export Song */
/* unused harmony export NewContentNumber */
var Content = (function () {
    function Content(obj) {
        this.text = obj.text;
        this.lastUpdated = obj.lastUpdated;
        this.flagged = obj.flagged;
        this.avatars = obj.avatars;
        this.user = obj.user;
        this.vote = obj.vote;
        this.contentType = obj.contentType;
        this.tags = obj.tags;
        this.title = obj.title || null;
        this.venue = obj.event || null;
        this.dateOfEvent = obj.dateOfEvent || null;
    }
    return Content;
}());
var Tweet = (function () {
    function Tweet(obj) {
        this.text = obj.text;
        this.lastUpdated = obj.lastUpdated;
        this.flagged = obj.flagged;
        this.avatars = obj.avatars;
        this.user = obj.user;
        this.vote = obj.vote;
        this.contentType = obj.contentType;
        this.tags = obj.tags;
    }
    return Tweet;
}());
var Vote = (function () {
    function Vote(upVotes, downVotes, lastUpdated, user) {
        this.upVotes = upVotes;
        this.downVotes = downVotes;
        this.lastUpdated = lastUpdated;
        this.user = user;
    }
    return Vote;
}());
var Tag = (function () {
    function Tag(tagName) {
        this.tagName = tagName;
    }
    return Tag;
}());
var Song = (function () {
    function Song() {
    }
    return Song;
}());
var NewContentNumber = (function () {
    function NewContentNumber(obj) {
        this.announcement = obj.announcement || 0;
        this.article = obj.article || 0;
        this.event = obj.event || 0;
    }
    return NewContentNumber;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/content.js.map

/***/ },

/***/ 340:
/***/ function(module, exports) {

//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/user.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testdata_content__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testdata_user__ = __webpack_require__(563);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentService = (function () {
    function ContentService() {
    }
    ContentService.prototype.getContent = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(__WEBPACK_IMPORTED_MODULE_2__testdata_content__["a" /* testContent */]);
    };
    ContentService.prototype.getUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__testdata_user__["a" /* testUsers */]);
    };
    ContentService.prototype.createMenuItems = function () {
        return [
            {
                name: 'Home',
                count: 10
            },
            {
                name: 'Announcements',
                count: 7
            },
            {
                name: 'Articles',
                count: 3
            },
            {
                name: 'Events',
                count: 0
            },
            {
                name: 'Your Profile',
                count: 0
            },
            {
                name: 'Map Guide',
                count: 0
            },
            {
                name: 'KIIT Info',
                count: 0
            },
            {
                name: 'Help and Support',
                count: 0
            },
            {
                name: 'Attribution',
                count: 0
            },
            {
                name: 'Terms and Conditions',
                count: 0
            },
        ];
    };
    ContentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ContentService);
    return ContentService;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/content.service.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_utilities__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(store, http) {
        this.store = store;
        this.http = http;
    }
    UserService.prototype.getCurrentUser = function () {
        var authUser = {
            username: 'clinton',
            access_token: 'token',
            roles: ['role']
        };
        return {
            id: 1,
            password: '',
            authUser: authUser,
            uniqueId: 11111,
            avatar: null,
            enabled: true,
            gender: '1'
        };
    };
    UserService.prototype.loginUser = function (username, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utilities_utilities__["a" /* BASE_URL */] + "/login", JSON.stringify({ username: username, password: password }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utilities_utilities__["b" /* getBasicHeaders */])())
            .map(function (res) {
            if (res) {
                if (res.status === 200 || res.status === 201) {
                    var authUser = res.json();
                    //this.store.dispatch({type: LOGIN, payload: {authUser}});
                    //setAccessToken(authUser);
                    //console.log('saved token');
                    return authUser;
                }
            }
        }).catch(function (error) {
            if (error.status < 400 || error.status === 500) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(new Error(error.status));
            }
        });
    };
    UserService.prototype.registerNewUser = function (username, nickname, password, gender) {
        console.log(JSON.stringify({ username: username, nickname: nickname, password: password, gender: gender }));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__utilities_utilities__["a" /* BASE_URL */] + "/guests/users", JSON.stringify({ username: username, nickname: nickname, password: password, gender: gender }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utilities_utilities__["b" /* getBasicHeaders */])())
            .map(function (response) {
            var authUser = response.json();
            var user = response.json();
            user.authUser = authUser;
        });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/user.service.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(214);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BASE_URL; });
/* unused harmony export getAccessToken */
/* unused harmony export setAccessToken */
/* unused harmony export removeAccessToken */
/* harmony export (immutable) */ exports["b"] = getBasicHeaders;
/* unused harmony export getAuthenticatedHeader */
/* harmony export (immutable) */ exports["c"] = type;

var BASE_URL = 'http://localhost:8080/api';
function getAccessToken() {
    var item = localStorage.getItem('access_token');
    console.log('token', item);
    return item ? JSON.parse(item) : null;
}
function setAccessToken(authUser) {
    localStorage.setItem('access_token', JSON.stringify(authUser));
    return true;
}
function removeAccessToken() {
    localStorage.removeItem('access_token');
    return true;
}
function getBasicHeaders() {
    var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    header.append('Accept', 'application.json');
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: header });
}
function getAuthenticatedHeader() {
    var authUser = getAccessToken();
    if (authUser && authUser.access_token) {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        header.append('Accept', 'application.json');
        header.append('X-Auth-Token', "" + authUser.access_token);
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* RequestOptions */]({ headers: header });
    }
}
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/utilities.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/environment.js.map

/***/ },

/***/ 416:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 416;


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(537);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/main.js.map

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_utilities__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionTypes; });
/* unused harmony export LoginAction */
/* unused harmony export LogoutAction */
/* unused harmony export LoggedInAction */
/* unused harmony export LoggedOutAction */
/* unused harmony export RegisterAccountAction */
/* unused harmony export AccountRegisteredAction */
/* unused harmony export LogInErrorAction */

var ActionTypes = {
    LOGGING_IN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Logging in'),
    LOGGING_IN_ERROR: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Logging in error'),
    LOGGED_IN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Logged in'),
    LOGGING_OUT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Logging out'),
    LOGGED_OUT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Logged out'),
    REGISTER_ACCOUNT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Register new account'),
    ACCOUNT_REGISTERED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utilities_utilities__["c" /* type */])('[User] Account registered'),
};
var LoginAction = (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGGING_IN;
    }
    return LoginAction;
}());
var LogoutAction = (function () {
    function LogoutAction() {
        this.type = ActionTypes.LOGGING_OUT;
    }
    return LogoutAction;
}());
var LoggedInAction = (function () {
    function LoggedInAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGGED_IN;
    }
    return LoggedInAction;
}());
var LoggedOutAction = (function () {
    function LoggedOutAction() {
        this.type = ActionTypes.LOGGED_OUT;
    }
    return LoggedOutAction;
}());
var RegisterAccountAction = (function () {
    function RegisterAccountAction(paylaod) {
        this.paylaod = paylaod;
        this.type = ActionTypes.REGISTER_ACCOUNT;
    }
    return RegisterAccountAction;
}());
var AccountRegisteredAction = (function () {
    function AccountRegisteredAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.ACCOUNT_REGISTERED;
    }
    return AccountRegisteredAction;
}());
var LogInErrorAction = (function () {
    function LogInErrorAction(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGGING_IN_ERROR;
    }
    return LogInErrorAction;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/user_actions.js.map

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_content_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(contentService, userService) {
        this.contentService = contentService;
        this.userService = userService;
        this.loginModalShowing = false;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        this.contents = this.contentService.getContent();
        this.tweets = this.contentService.getContent();
        this.menuItems = this.contentService.createMenuItems();
        this.user = this.userService.getCurrentUser();
    };
    AppComponent.prototype.changeSideNavState = function () {
        /*$('.ui.sidebar')
            .sidebar('toggle')
          ;*/
    };
    AppComponent.prototype.topBarButtonClicked = function (value) {
        switch (value) {
            case 'login':
                this.loginModalShowing = !this.loginModalShowing;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(722),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_content_service__["a" /* ContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_content_service__["a" /* ContentService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app.component.js.map

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sidebar_side_menu_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_side_header_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_others_search_box_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sidebar_side_bar_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_others_profile_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_others_map_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_others_kiit_info_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_others_help_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_others_attribution_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_others_terms_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_content_content_component__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_content_tweet_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_content_content_container_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_others_top_bar_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_auth_login_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_auth_register_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_content_tweet_smart_component__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_content_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_user_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_content_announcement_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_content_article_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_others_content_editor_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_content_situation_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__reducers_index__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngrx_store__ = __webpack_require__(226);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_sidebar_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_sidebar_side_header_component__["a" /* SideHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_others_search_box_component__["a" /* SearchBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_sidebar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_others_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_others_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_others_kiit_info_component__["a" /* KiitInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_others_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_others_attribution_component__["a" /* AttributionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_others_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_content_tweet_component__["a" /* TweetComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_content_content_container_component__["a" /* ContentContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_others_top_bar_component__["a" /* TopBarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_auth_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_auth_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_content_tweet_smart_component__["a" /* TweetSmartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_content_announcement_component__["a" /* AnnouncementComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_content_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_others_content_editor_component__["a" /* ContentEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_content_situation_component__["a" /* SituationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29__ngrx_store__["c" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_28__reducers_index__["a" /* reducer */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_23__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app.module.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngDoCheck = function () {
        if (this.show) {
            $('.ui.modal')
                .modal('show');
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], LoginComponent.prototype, "show", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(723),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/login.component.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(724),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterComponent);
    return RegisterComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/register.component.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnnouncementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnnouncementComponent = (function () {
    function AnnouncementComponent() {
    }
    AnnouncementComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], AnnouncementComponent.prototype, "content", void 0);
    AnnouncementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-announcement',
            template: __webpack_require__(725),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], AnnouncementComponent);
    return AnnouncementComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/announcement.component.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArticleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ArticleComponent.prototype, "content", void 0);
    ArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-article',
            template: __webpack_require__(726),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleComponent);
    return ArticleComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/article.component.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentContainerComponent = (function () {
    function ContentContainerComponent() {
    }
    ContentContainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], ContentContainerComponent.prototype, "contents", void 0);
    ContentContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-content-container',
            template: __webpack_require__(727),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ContentContainerComponent);
    return ContentContainerComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/content-container.component.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_content__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_content__["a" /* Content */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_content__["a" /* Content */]) === 'function' && _a) || Object)
    ], ContentComponent.prototype, "content", void 0);
    ContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-content',
            template: "\n    <div class=\"ui top ribbon label\">{{content.contentType}}</div>\n   <!-- <app-content-editors></app-content-editors>-->\n    <div class=\"ui large feed\">\n      <div class=\"event\">\n        <div class=\"label\">\n          <a><i [class]=\"content.icon\"></i></a>\n        </div>\n        <div class=\"content\">\n          <div class=\"summary\">\n            <a>\n              {{content.contentType}}\n            </a> pay attention, please!\n            <span class=\"date\">\n                       {{content.lastUpdated}}\n                    </span>\n          </div>\n          <!--here-->\n          <h2 *ngIf=\"content.title\" class=\"ui teal sub header\">\n            <b>{{content.title}}</b>\n          </h2>\n          <div class=\"description\">\n            <p>\n              {{content.text}}\n            </p>\n          </div>\n          <div *ngIf=\"content.contentType === 'event'\">\n              <div class=\"ui middle aligned animated selection relaxed list\">\n          <a class=\"item\">\n            <i class=\"paint brush icon\"></i>\n            Dance Party\n          </a>\n          <a class=\"item\">\n            <i class=\"calendar icon\"></i>\n            22nd October, 2017\n          </a>\n          <a class=\"item\">\n            <i class=\"alarm icon\"></i>\n            2:00 pm sharp!\n          </a>\n          <a class=\"item\">\n            <i class=\"university icon\"></i>\n            Campus 6\n          </a>\n          <a class=\"item\">\n            <i class=\"rupee icon\"></i>\n            Free!\n          </a>\n        </div>\n            </div>\n          <div *ngFor=\"let avatar of content.avatars\" class=\"extra images\">\n          <a><img src=\"../../images/custom/male-avatar-small.png\"></a>\n        </div>\n        <div *ngFor=\"let tag of content.tags\" class=\"ui middle aligned selection relaxed horizontal list\">\n          <a class=\"item\">\n            <i class=\"tag icon\"></i> {{tag.tagName}}\n          </a>\n        </div>\n          <div class=\"meta\">\n          <a class=\"like\">\n            <i class=\"thumbs up icon\"></i> {{content.vote.upVotes}} UpVotes\n          </a>\n          <a class=\"like\">\n            <i class=\"thumbs down icon\"></i> {{content.vote.downVotes}} DownVotes\n          </a>\n        </div>\n          <!--here-->\n          <div class=\"ui selection list\">\n            <span class=\"meta\">Submitted by:</span>\n            <a class=\"item\">\n              <i class=\"spy icon\"></i>\n              {{content.user.authUser.username}}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n",
            styles: [],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ContentComponent);
    return ContentComponent;
    var _a;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/content.component.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SituationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SituationComponent = (function () {
    function SituationComponent() {
    }
    SituationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], SituationComponent.prototype, "content", void 0);
    SituationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-situation',
            template: __webpack_require__(728),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], SituationComponent);
    return SituationComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/situation.component.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TweetSmartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TweetSmartComponent = (function () {
    function TweetSmartComponent() {
    }
    TweetSmartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], TweetSmartComponent.prototype, "tweets", void 0);
    TweetSmartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-tweet-smart',
            template: __webpack_require__(729),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], TweetSmartComponent);
    return TweetSmartComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/tweet-smart.component.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_content__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TweetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TweetComponent = (function () {
    function TweetComponent() {
    }
    TweetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_content__["b" /* Tweet */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_content__["b" /* Tweet */]) === 'function' && _a) || Object)
    ], TweetComponent.prototype, "tweet", void 0);
    TweetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-tweet',
            template: __webpack_require__(730),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ChangeDetectionStrategy */].OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], TweetComponent);
    return TweetComponent;
    var _a;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/tweet.component.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AttributionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttributionComponent = (function () {
    function AttributionComponent() {
    }
    AttributionComponent.prototype.ngOnInit = function () {
    };
    AttributionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-attribution',
            template: __webpack_require__(731)
        }), 
        __metadata('design:paramtypes', [])
    ], AttributionComponent);
    return AttributionComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/attribution.component.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContentEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentEditorComponent = (function () {
    function ContentEditorComponent() {
    }
    ContentEditorComponent.prototype.ngOnInit = function () {
    };
    ContentEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-content-editor',
            template: __webpack_require__(732)
        }), 
        __metadata('design:paramtypes', [])
    ], ContentEditorComponent);
    return ContentEditorComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/content-editor.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__(733)
        }), 
        __metadata('design:paramtypes', [])
    ], HelpComponent);
    return HelpComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/help.component.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KiitInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KiitInfoComponent = (function () {
    function KiitInfoComponent() {
    }
    KiitInfoComponent.prototype.ngOnInit = function () {
    };
    KiitInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-kiit-info',
            template: __webpack_require__(734)
        }), 
        __metadata('design:paramtypes', [])
    ], KiitInfoComponent);
    return KiitInfoComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/kiit-info.component.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__(735)
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/map.component.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
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
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(736)
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/profile.component.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBoxComponent = (function () {
    function SearchBoxComponent() {
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    SearchBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-search-box',
            template: "\n<div class=\"item\">\n  <div class=\"ui transparent icon input\">\n    <input type=\"text\" placeholder=\"Search...\">\n    <i class=\"search icon\"></i>\n  </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/search-box.component.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TermsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-terms',
            template: __webpack_require__(737)
        }), 
        __metadata('design:paramtypes', [])
    ], TermsComponent);
    return TermsComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/terms.component.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopBarComponent = (function () {
    function TopBarComponent() {
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.prototype.sideButtonClicked = function () {
        this.buttonClicked.emit();
        return false;
    };
    TopBarComponent.prototype.loginButtonClicked = function () {
        this.buttonClicked.emit('login');
    };
    TopBarComponent.prototype.registerButtonClicked = function () {
        this.buttonClicked.emit('register');
    };
    TopBarComponent.prototype.helpButtonClicked = function () {
        this.buttonClicked.emit('help');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], TopBarComponent.prototype, "buttonClicked", void 0);
    TopBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-top-bar',
            template: __webpack_require__(738)
        }), 
        __metadata('design:paramtypes', [])
    ], TopBarComponent);
    return TopBarComponent;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/top-bar.component.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_user__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngAfterViewInit = function () {
    };
    SideBarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Array)
    ], SideBarComponent.prototype, "menuItems", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_user__["User"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_user__["User"]) === 'function' && _a) || Object)
    ], SideBarComponent.prototype, "user", void 0);
    SideBarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-side-bar',
            template: __webpack_require__(739)
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
    var _a;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/side-bar.component.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_user__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideHeaderComponent = (function () {
    function SideHeaderComponent() {
    }
    // @ViewChild('avatar') avatar;
    SideHeaderComponent.prototype.ngAfterViewInit = function () {
        // this.avatar.nativeElement.setAttribute('src', this.user.avatar.avatarByte);
    };
    SideHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_user__["User"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_user__["User"]) === 'function' && _a) || Object)
    ], SideHeaderComponent.prototype, "user", void 0);
    SideHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-side-header',
            template: "\n  <a class=\"teal item\">\n  <div class=\"ui teal header\">\n    <img #avatar src=\"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50\" \n    alt=\"image\" class=\"ui mini circular image\">\n    <div class=\"content\">\n      {{user.authUser.username}}\n      <div class=\"ui blue sub header\">{{user.uniqueId}}</div>\n    </div>\n  </div>\n</a>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SideHeaderComponent);
    return SideHeaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/side-header.component.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_menu_item__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_menu_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_menu_item__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuComponent = (function () {
    // @Input() link: string;
    //@Input() active: boolean;
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_menu_item__["MenuItem"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_menu_item__["MenuItem"]) === 'function' && _a) || Object)
    ], SideMenuComponent.prototype, "menu", void 0);
    SideMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-side-menu',
            template: "\n    <a class=\"item\" >\n  {{menu.name}}\n  <div class=\"ui label\" [ngClass]=\"{'left pointing teal': menu.count}\">\n    {{menu.count}}\n  </div>\n</a>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], SideMenuComponent);
    return SideMenuComponent;
    var _a;
}());
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/side-menu.component.js.map

/***/ },

/***/ 559:
/***/ function(module, exports) {

//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/menu-item.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_user_reducers__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_core_compose__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ngrx_core_compose__);
/* harmony export (immutable) */ exports["a"] = reducer;





var reducers = {
    user: __WEBPACK_IMPORTED_MODULE_0__reducers_user_reducers__["a" /* userReducer */]
};
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* combineReducers */])(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/index.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__ = __webpack_require__(535);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return userReducer; });

var initialState = {
    entity: {
        id: 0,
        authUser: null,
        enabled: false,
        gender: '',
        password: '',
        avatar: null,
        uniqueId: 0
    },
    loading: false,
    error: false,
    authenticated: false
};
var userReducer = function (oldState, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].LOGGED_IN:
            return Object.assign({}, oldState, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].LOGGING_OUT:
            return Object.assign({});
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].REGISTER_ACCOUNT:
            return oldState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].ACCOUNT_REGISTERED:
            return oldState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].LOGGED_OUT:
            return oldState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].LOGGING_IN:
            return oldState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_user_actions__["a" /* ActionTypes */].LOGGING_IN_ERROR:
            return oldState;
        default:
            return oldState;
    }
};
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/user_reducers.js.map

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return testContent; });
var testContent = [{
        text: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        lastUpdated: "9/9/2016",
        flagged: false,
        vote: {
            upVotes: 23,
            downVotes: 93,
            lastUpdated: '4/13/2016',
            user: null
        },
        contentType: "announcement",
        tags: [
            { tagName: "Indigo" },
            { tagName: "Goldenrod" },
            { tagName: "Green" }
        ],
        title: "rgilbert0",
        dateOfEvent: "4/13/2016",
        venue: "Tarrafal",
        user: {
            id: 1,
            password: "",
            authUser: {
                username: "plopez0",
                roles: ['USER'],
                access_token: '233333333'
            },
            uniqueId: 1,
            avatar: {
                avatarContentType: "fstephens0",
                avatarByte: "https://robohash.org/quodipsamipsum.bmp?size=50x50&set=set1",
                lastUpdated: "5/27/2016"
            },
            enabled: true,
            gender: "1"
        },
        icon: 'content icon'
    },
    {
        text: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        lastUpdated: "9/9/2016",
        flagged: false,
        vote: {
            upVotes: 23,
            downVotes: 93,
            lastUpdated: '4/13/2016',
            user: null
        },
        contentType: "article",
        tags: [
            { tagName: "Indigo" },
            { tagName: "Goldenrod" },
            { tagName: "Green" }
        ],
        title: "rgilbert0",
        dateOfEvent: "4/13/2016",
        venue: "Tarrafal",
        user: {
            id: 1,
            password: "",
            authUser: {
                username: "plopez0",
                roles: ['USER'],
                access_token: '233333333'
            },
            uniqueId: 1,
            avatar: {
                avatarContentType: "fstephens0",
                avatarByte: "https://robohash.org/quodipsamipsum.bmp?size=50x50&set=set1",
                lastUpdated: "5/27/2016"
            },
            enabled: true,
            gender: "1"
        },
        icon: 'content icon'
    },
    {
        text: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        lastUpdated: "9/9/2016",
        flagged: false,
        vote: {
            upVotes: 23,
            downVotes: 93,
            lastUpdated: '4/13/2016',
            user: null
        },
        contentType: "situation",
        tags: [
            { tagName: "Indigo" },
            { tagName: "Goldenrod" },
            { tagName: "Green" }
        ],
        title: "rgilbert0",
        dateOfEvent: "4/13/2016",
        venue: "Tarrafal",
        user: {
            id: 1,
            password: "",
            authUser: {
                username: "plopez0",
                roles: ['USER'],
                access_token: '233333333'
            },
            uniqueId: 1,
            avatar: {
                avatarContentType: "fstephens0",
                avatarByte: "https://robohash.org/quodipsamipsum.bmp?size=50x50&set=set1",
                lastUpdated: "5/27/2016"
            },
            enabled: true,
            gender: "1"
        },
        icon: 'content icon'
    },
    {
        text: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        lastUpdated: "9/9/2016",
        flagged: false,
        vote: {
            upVotes: 23,
            downVotes: 93,
            lastUpdated: '4/13/2016',
            user: null
        },
        contentType: "announcement",
        tags: [
            { tagName: "Indigo" },
            { tagName: "Goldenrod" },
            { tagName: "Green" }
        ],
        title: "rgilbert0",
        dateOfEvent: "4/13/2016",
        venue: "Tarrafal",
        user: {
            id: 1,
            password: "",
            authUser: {
                username: "plopez0",
                roles: ['USER'],
                access_token: '233333333'
            },
            uniqueId: 1,
            avatar: {
                avatarContentType: "fstephens0",
                avatarByte: "https://robohash.org/quodipsamipsum.bmp?size=50x50&set=set1",
                lastUpdated: "5/27/2016"
            },
            enabled: true,
            gender: "1"
        },
        icon: 'content icon'
    }
];
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/content.js.map

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return testUsers; });
var testUsers = [{
        id: 1,
        password: "",
        authUser: {
            username: "plopez0",
            roles: ['USER'],
            access_token: '233333333'
        },
        uniqueId: 1,
        avatar: {
            avatarContentType: "fstephens0",
            avatarByte: "https://robohash.org/quodipsamipsum.bmp?size=50x50&set=set1",
            lastUpdated: "5/27/2016"
        },
        enabled: true,
        gender: "1"
    }];
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/user.js.map

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/polyfills.js.map

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = ".pusher{\n  width: calc(100% - 260px);\n}\n"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<app-side-bar\n    class=\"ui large visible left vertical menu fixed push sidebar\"\n    [user]=\"user\" [menuItems]=\"menuItems\">\n</app-side-bar>\n<div class=\"pusher right\">\n  <div class=\"ui fixed fluid container\">\n    <app-top-bar class=\"ui top menu\" (buttonClicked)=\"topBarButtonClicked($event)\"></app-top-bar>\n    <app-login [show]=\"loginModalShowing\"></app-login>\n  </div>\n  <div class=\"ui segment grid container\">\n    <div class=\"eleven wide column\">\n      <app-content-container [contents]=\"contents | async\"></app-content-container>\n    </div>\n    <div class=\"five wide column\">\n      <!--<app-tweet-smart [tweets]=\"tweets | async\"></app-tweet-smart>-->\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = "<div class=\"ui modal\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Profile Picture\n  </div>\n  <div class=\"image content\">\n    <div class=\"ui medium image\">\n      <img src=\"/images/avatar/large/chris.jpg\">\n    </div>\n    <div class=\"description\">\n      <div class=\"ui header\">We've auto-chosen a profile image for you.</div>\n      <p>We've grabbed the following image from the <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> image associated with your registered e-mail address.</p>\n      <p>Is it okay to use this photo?</p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui black deny button\">\n      Nope\n    </div>\n    <div class=\"ui positive right labeled icon button\">\n      Yep, that's me\n      <i class=\"checkmark icon\"></i>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<div class=\"ui top ribbon label\">Announcement</div>\n<app-content-editor></app-content-editor>\n<div class=\"ui large feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <a><i class=\"announcement icon\"></i></a>\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a>\n          Announcement\n        </a> pay attention, please!\n        <span class=\"date\">\n          {{content.lastUpdated}} secs go\n        </span>\n      </div>\n      <h2 class=\"ui teal sub header\">\n        <b>{{content.title}}</b>\n      </h2>\n      <div class=\"description\">\n        {{content.text}}\n      </div>\n      <div class=\"meta\">Submitted by:\n        <a class=\"item\">\n          <i class=\"spy icon\"></i>\n          {{content.user.authUser.username}}\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "<div class=\"ui top ribbon label\">Article</div>\n<app-content-editor></app-content-editor>\n<div class=\"ui large feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <a><img src=\"../../images/custom/male-avatar-tiny.png\"></a>\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a>\n          Clinton Yeboah\n        </a> submitted a new article\n        <span class=\"date\">\n          53 secs go\n        </span>\n      </div>\n      <h2 class=\"ui teal sub header\">\n        <b>To be, or not to be</b>\n      </h2>\n      <div class=\"description\">\n        <p>\n          To be, or not to be, that is the question:<br>\n          Whether 'tis Nobler in the mind to suffer<br>\n          The Slings and Arrows of outrageous Fortune,<br>\n          Or to take Arms against a Sea of troubles,<br>\n          And by opposing end them: to die, to sleep<br>\n          No more; and by a sleep, to say we end<br>\n          The Heart-ache, and the thousand Natural shocks<br>\n          That Flesh is heir to? 'Tis a consummation<br>\n          Devoutly to be wished. To die, to sleep,<br>\n          To sleep, perchance to Dream; aye, there's the rub,<br>\n          For in that sleep of death, what dreams may come,<br>\n          When we have shuffled off this mortal coil,<br>\n          Must give us pause. There's the respect<br>\n          That makes Calamity of so long life:<br>\n          <a>Read more</a>\n        </p>\n      </div>\n      <div class=\"extra images\">\n        <a><img src=\"../../images/custom/male-avatar.png\"></a>\n        <a><img src=\"../../images/custom/male-avatar.png\"></a>\n      </div>\n      <div class=\"ui middle aligned selection relaxed horizontal list\">\n        <a class=\"item\">\n          <i class=\"tag icon\"></i> Poetry\n        </a>\n        <a class=\"item\">\n          <i class=\"tag icon\"></i> Moral Lesson\n        </a>\n        <a class=\"item\">\n          <i class=\"tag icon\"></i> Emotional\n        </a>\n      </div>\n      <div></div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"thumbs up icon\"></i> 4 Likes\n        </a>\n        <a class=\"like\">\n          <i class=\"thumbs down icon\"></i> 4 Likes\n        </a>\n      </div>\n      <div class=\"ui selection list\">\n        <span class=\"meta\">Submitted by:</span>\n        <a class=\"item\">\n          <i class=\"spy icon\"></i>\n          Clinton Yeboah\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let content of contents\">\n  <div [ngSwitch]=\"content.contentType\">\n    <template [ngSwitchCase]=\"'announcement'\">\n      <app-announcement [content]=\"content\"></app-announcement>\n    </template>\n    <template [ngSwitchCase]=\"'article'\">\n      <app-article [content]=\"content\"></app-article>\n    </template>\n    <template [ngSwitchCase]=\"'situation'\">\n      <app-situation [content]=\"content\"></app-situation>\n    </template>\n  </div>\n</div>\n\n"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "<div class=\"ui top ribbon label\">Event</div>\n<app-content-editor></app-content-editor>\n<div class=\"ui large feed\">\n  <div class=\"event\">\n    <div class=\"label\">\n      <a><i class=\"pencil icon\"></i></a>\n    </div>\n    <div class=\"content\">\n      <div class=\"summary\">\n        <a>\n          A New Event\n        </a> was added\n        <span class=\"date\">\n          53 secs go\n        </span>\n      </div>\n      <h2 class=\"ui teal sub header\">\n        <b>Dance Party</b>\n      </h2>\n      <div class=\"description\">\n        <p>\n          Have you ever been stunned by the sight of a lap dance.<br>\n          Come see use rock it, LIVE!\n        </p>\n      </div>\n      <div class=\"ui middle aligned animated selection relaxed list\">\n        <a class=\"item\">\n          <i class=\"paint brush icon\"></i>\n          Dance Party\n        </a>\n        <a class=\"item\">\n          <i class=\"calendar icon\"></i>\n          22nd October, 2017\n        </a>\n        <a class=\"item\">\n          <i class=\"alarm icon\"></i>\n          2:00 pm sharp!\n        </a>\n        <a class=\"item\">\n          <i class=\"university icon\"></i>\n          Campus 6\n        </a>\n        <a class=\"item\">\n          <i class=\"rupee icon\"></i>\n          Free!\n        </a>\n      </div>\n      <div class=\"extra images\">\n        <a><img src=\"../../images/custom/male-avatar-small.png\"></a>\n        <a><img src=\"../../images/custom/male-avatar-small.png\"></a>\n        <a><img src=\"../../images/custom/male-avatar-small.png\"></a>\n        <a><img src=\"../../images/custom/male-avatar-small.png\"></a>\n        <a><img src=\"../../images/custom/male-avatar-small.png\"></a>\n      </div>\n      <div class=\"meta\">\n        <a class=\"like\">\n          <i class=\"thumbs up icon\"></i> 4 Likes\n        </a>\n        <a class=\"like\">\n          <i class=\"thumbs down icon\"></i> 4 Likes\n        </a>\n      </div>\n      <div class=\"ui selection list\">\n        <span class=\"meta\">Submitted by:</span>\n        <a class=\"item\">\n          <i class=\"spy icon\"></i>\n          Clinton Yeboah\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "<app-tweet *ngFor=\"let tweet of tweets\"></app-tweet>\n"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "<div class=\"ui segment container\">\n  <div class=\"ui small feed\">\n    <div class=\"event\">\n      <div class=\"label\">\n        <a><img src=\"../../../assets/images/male-avatar-tiny.png\"></a>\n      </div>\n      <div class=\"content\">\n        <div class=\"summary\">\n          <a class=\"user\">\n            {{tweet.user.authUser.username}}\n          </a> said something\n        </div>\n        <div class=\"extra text\">\n          {{tweet.text}}\n        </div>\n        <div *ngFor=\"let avatar of tweet.avatars\" class=\"extra images\">\n          <a><img src=\"../../../assets/images/male-avatar-tiny.png\"></a>\n        </div>\n        <div class=\"meta\">\n          <a class=\"like\">\n            <i class=\"thumbs up icon\"></i> {{tweet.vote.upVotes}} Likes\n          </a>\n          <a class=\"like\">\n            <i class=\"thumbs down icon\"></i>{{tweet.vote.downVotes}} DisLikes\n          </a>\n          <span class=\"date\">\n                    {{tweet.lastUpdated}}\n                </span>\n          <div class=\"ui floating right left inline pointing dropdown\">\n            <i class=\"dropdown icon\"></i>\n            <div class=\"right menu\">\n              <a class=\"item\">\n                <i class=\"edit icon\"></i>\n                Edit\n              </a>\n              <a class=\"item\">\n                <i class=\"remove icon\"></i>\n                Remove\n              </a>\n              <a class=\"item\">\n                <i class=\"legal icon\"></i>\n                Report\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "<p>\n  attribution works!\n</p>\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "<div class=\"ui tiny top right attached label\">\n  <div class=\"ui horizontal linked list\">\n    <a class=\"item\" data-tooltip=\"Share\">\n      <i class=\"share icon\"></i>\n    </a>\n    <a class=\"item\" data-tooltip=\"Edit\" data-position=\"bottom right\">\n      <i class=\"edit icon\"></i>\n    </a>\n    <a class=\"item\" data-tooltip=\"Delete\" data-position=\"bottom right\">\n      <i class=\"remove icon\"></i>\n    </a>\n    <a class=\"item\" data-tooltip=\"Report\" data-position=\"bottom right\">\n      <i class=\"legal icon\"></i>\n    </a>\n  </div>\n</div>\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "<p>\n  kiit-info works!\n</p>\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = "<p>\n  terms works!\n</p>\n"

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = "<!--<a class=\"item\" (click)=\"sideButtonClicked()\">\n  <i class=\"sidebar icon\"></i>\n  Menu\n</a>-->\n<a class=\"item\">\n  <i class=\"teal student icon\"></i>\n</a>\n<a class=\"header item\">\n  <i>KIIT UNIVERSITY SOCIAL NETWORK</i>\n</a>\n<div class=\"icon menu\">\n  <a class=\"item\" data-tooltip=\"Post New Item\" data-position=\"bottom right\">\n    <i class=\"teal write icon\"></i>\n  </a>\n  <a class=\"item\" data-tooltip=\"Play Song\" data-position=\"bottom right\">\n    <i class=\"teal video play outline icon\"></i>\n  </a>\n  <a class=\"item\" data-tooltip=\"Give feedback\" data-position=\"bottom right\">\n    <i class=\"teal smile icon\"></i>\n  </a>\n</div>\n<div class=\"right menu\">\n  <a class=\"item\" (click)=\"registerButtonClicked\">Register</a>\n  <a class=\"item\" (click)=\"loginButtonClicked\">Login</a>\n  <a class=\"item\" (click)=\"helpButtonClicked\">Help</a>\n</div>\n"

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = "<app-side-header [user]=\"user\"></app-side-header>\n<app-search-box></app-search-box>\n<div *ngFor=\"let item of menuItems\">\n  <app-side-menu [menu]=\"item\"></app-side-menu>\n</div>\n"

/***/ }

},[1014]);
//# sourceMappingURL=main.bundle.map