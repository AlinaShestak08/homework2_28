"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.PostsPage = void 0;
/* eslint-disable prettier/prettier */
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var services_1 = require("../../../services");
var examples_1 = require("../../examples");
var Tabs_1 = require("../../examples/Tabs");
exports.PostsPage = function () {
    // const [sendedUser, setSendedUser] = useState(false);
    var _a;
    var _b = react_1.useState(), posts = _b[0], setPosts = _b[1];
    var _c = react_1.useState(false), showModal = _c[0], setShowModal = _c[1];
    react_1.useEffect(function () {
        console.log('useEffect');
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            console.log(data);
            setPosts(data);
        });
    }, []);
    // console.log(posts);
    return (
    // <FormTemplate title="Sign in">
    React.createElement(React.Fragment, null,
        React.createElement(Tabs_1.Tabs, { link1Text: "All", url1: '/posts', link2Text: "My favorites", url2: '/posts', link3Text: "Popular", url3: '/posts' }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement(AllPosts, null, (_a = posts === null || posts === void 0 ? void 0 : posts.results) === null || _a === void 0 ? void 0 : _a.map(function (_a) {
            var date = _a.date, title = _a.title, id = _a.id, image = _a.image;
            return (React.createElement(PostCard, { key: id },
                React.createElement(PostImg, { onClick: function () { return setShowModal(true); }, src: image }),
                React.createElement(PostDate, null, date),
                React.createElement(PostTitle, { href: "/posts/" + ("" + id) },
                    " ",
                    title,
                    " "),
                React.createElement(PostButtons, null,
                    React.createElement("div", null,
                        React.createElement(examples_1.LikeButton, { onClick: function () { return console.log("like"); } }),
                        React.createElement(examples_1.DislikeButton, { onClick: function () { return console.log("dislike"); } })),
                    React.createElement(examples_1.FavoriteButton, { onClick: function () { return console.log("favorite"); } })),
                showModal && (React.createElement(examples_1.Modal, { onClick: function () { return setShowModal(false); } },
                    React.createElement(ModalImg, { src: image })))));
        })))
    // </FormTemplate>
    );
};
var AllPosts = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var PostImg = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 246px;\n  width: 300px;\n  cursor: pointer;\n"], ["\n  height: 246px;\n  width: 300px;\n  cursor: pointer;\n"])));
var PostCard = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n  padding: 20px;\n  margin: 5px 5px 10px 5px;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n  padding: 20px;\n  margin: 5px 5px 10px 5px;\n  border-bottom: 1px solid ", ";\n"])), services_1.ColorService.MEDIUM);
var PostDate = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-align: start;\n  font-weight: 400;\n  font-size: 16px;\n  color : ", ";\n  margin: 10px 0px;\n"], ["\n  text-align: start;\n  font-weight: 400;\n  font-size: 16px;\n  color : ", ";\n  margin: 10px 0px;\n"])), services_1.ColorService.GRAY);
var PostTitle = styled_components_1["default"].a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  text-align: start;\n  font-weight: 600;\n  font-size: 18px;\n  text-decoration: none;\n  margin-bottom: 10px;\n\n  :hover {\n    color:  ", ";\n  }\n"], ["\n  color: ", ";\n  text-align: start;\n  font-weight: 600;\n  font-size: 18px;\n  text-decoration: none;\n  margin-bottom: 10px;\n\n  :hover {\n    color:  ", ";\n  }\n"])), services_1.ColorService.BLACK, services_1.ColorService.PRIMARY);
var PostButtons = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var ModalImg = styled_components_1["default"].img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  max-width: 500px;\n"], ["\n  max-width: 500px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
