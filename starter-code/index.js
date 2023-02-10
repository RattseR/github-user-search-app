var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
{
    function createUserCard(event) {
        return __awaiter(this, void 0, void 0, function () {
            var months, cardhtml, username, result, searchbox;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        (function (months) {
                            months[months["January"] = 0] = "January";
                            months[months["February"] = 1] = "February";
                            months[months["March"] = 2] = "March";
                            months[months["April"] = 3] = "April";
                            months[months["May"] = 4] = "May";
                            months[months["June"] = 5] = "June";
                            months[months["July"] = 6] = "July";
                            months[months["August"] = 7] = "August";
                            months[months["September"] = 8] = "September";
                            months[months["Octomber"] = 9] = "Octomber";
                            months[months["November"] = 10] = "November";
                            months[months["December"] = 11] = "December";
                        })(months || (months = {}));
                        cardhtml = "";
                        username = document.getElementById('search-name').value;
                        return [4 /*yield*/, fetch("https://api.github.com/users/".concat(username))];
                    case 1:
                        result = _a.sent();
                        if (result.status === 200) {
                            fetch("https://api.github.com/users/".concat(username)).then(function (response) {
                                response.json().then(function (user) {
                                    var oldelement = document.querySelector('.user_info_outer');
                                    if (oldelement) {
                                        oldelement.remove();
                                    }
                                    var usernickname = user.login;
                                    var avatarurl = user.avatar_url;
                                    var companies = 'No Info';
                                    var datestring = user.created_at;
                                    var date = new Date(datestring);
                                    var followers = user.followers;
                                    var following = user.following;
                                    var repositories = user.public_repos;
                                    var location = 'Not Avialable';
                                    var blog = 'Not Avialable';
                                    var twitter = "";
                                    var bio = "User Bio Is Not Avialable";
                                    console.log(date);
                                    var datemonth = months[date.getMonth()];
                                    var dateday = date.getDay();
                                    var dateyear = date.getFullYear();
                                    if (user.twitter_username) {
                                        twitter = user.twitter_username;
                                    }
                                    else {
                                        twitter = 'Not Avialable';
                                    }
                                    if (user.bio) {
                                        bio = user.bio;
                                    }
                                    else {
                                        bio = "User Bio is not avialable";
                                    }
                                    if (user.company) {
                                        companies = user.company;
                                    }
                                    else {
                                        companies = 'Not Avialable';
                                    }
                                    if (user.location) {
                                        location = user.location;
                                    }
                                    if (user.blog)
                                        (blog = user.blog);
                                    cardhtml = cardhtml +
                                        "\n            <div class=\"desktop_user_image\">\n              <img class=\"desktop_img\" src=\"".concat(avatarurl, "\">\n            </div>\n            <div class=\"user_box\">\n              <div class=\"mobile_user_image\">\n                <img class=\"mobile_img\" src=\"").concat(avatarurl, "\">\n              </div>\n              <div class=\"registration_info\">\n                <div class=\"usernames\">\n                  <h2 class=\"the_username dark\">").concat(usernickname, "</h2>\n                  <p class=\"username\">").concat(companies, "</p>\n                </div>\n                <p class=\"registration_date\">Joined ").concat(dateday, " ").concat(datemonth, " ").concat(dateyear, "</p>\n              </div>\n            </div>\n            <p class=\"user_bio\">").concat(bio, "</p>\n            <div class=\"rep_followers\">\n              <div class=\"followers\">\n                <h5 class=\"follower_head\">Repos</h5>\n                <p id='repositories' class=\"follower_info dark\">").concat(repositories, "</p>\n              </div>\n              <div class=\"followers\">\n                <h5 class=\"follower_head\">Followers</h5>\n                <p id='follower-quantity' class=\"follower_info dark\">").concat(followers, "</p>\n              </div>\n              <div class=\"followers\">\n                <h5 class=\"follower_head\">Following</h5>\n                <p id='following' class=\"follower_info dark\">").concat(following, "</p>\n              </div>\n            </div>\n            <div class=\"wokrplace_details\">\n              <div class=\"area1\">\n                <div class=\"section1\">\n                  <img class=\"bottom_icons loc-icon\" src=\"./assets/icon-location.svg\">\n                  <p class=\"bottom_text\">").concat(location, "</p>\n                </div>\n                <div class=\"section1\">\n                  <img class=\"bottom_icons blog-icon\" src=\"./assets/icon-website.svg\">\n                  <a class=\"bottom_text links\" href=\"").concat(blog, "\">").concat(blog, "</a>\n                </div>\n              </div>\n              <div class=\"area2\">\n                <div class=\"section1\">\n                  <img class=\"bottom_icons twitter-icon\" src=\"./assets/icon-twitter.svg\">\n                  <p class=\"bottom_text\">").concat(twitter, "</p>\n                </div>\n                <div class=\"section1\">\n                  <img class=\"bottom_icons compani-icon\" src=\"./assets/icon-company.svg\">\n                  <p class=\"bottom_text\">").concat(companies, "</p>\n                </div>\n              </div>\n            </div>\n          \n\n            ");
                                    var user_outer = document.createElement('div');
                                    user_outer.classList.add('user_info_outer');
                                    var maincontainer = document.querySelector('.main_container');
                                    user_outer.innerHTML = cardhtml;
                                    maincontainer.appendChild(user_outer);
                                })["catch"](function (error) { console.log(error); });
                            });
                        }
                        else {
                            searchbox = document.getElementById('search-name');
                            searchbox.value = 'No Result';
                            searchbox.classList.add('errormessage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    document.getElementById('search').addEventListener('click', createUserCard);
    document.getElementById('search-name').addEventListener('focus', function (e) {
        if (e.target.classList.contains('errormessage')) {
            e.target.value = '';
            e.target.classList.remove('errormessage');
        }
    });
    function changeTheme(event) {
        if (document.getElementById('mode-indicator').classList.contains('lightmode')) {
            console.log(document.getElementById('mode-indicator').getAttribute('src'));
            document.getElementById('mode-indicator').src = "./assets/icon-sun.svg";
            document.querySelector('.mode_name').innerHTML = 'LIGHT';
            document.querySelector('body').style.backgroundColor = '#141D2F';
            document.querySelector('body').style.color = '#FFFFFF';
            document.querySelector('.main_container').style.backgroundColor = '#141D2F';
            document.querySelector('.search_area').style.backgroundColor = '#1E2A47';
            document.querySelector('.search_name').style.backgroundColor = '#1E2A47';
            document.querySelector('.user_info_outer').style.backgroundColor = '#1E2A47';
            document.querySelector('.rep_followers').style.backgroundColor = '#141D2F';
            document.querySelector('.search_name').style.color = '#FFFFFF';
            document.querySelector('.search_name').style.caretColor = '#0079FF';
            document.querySelector('.links').style.color = '#FFFFFF';
            var array = document.querySelectorAll('.dark');
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var element = array_1[_i];
                element.classList.remove('dark');
                element.classList.add('light');
            }
        }
    }
    (_a = document.getElementById('mode-indicator')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', changeTheme);
}
