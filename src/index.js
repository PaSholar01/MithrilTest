var m = require("mithril")

var UserList = require("./views/UserList")

m.mount(document.body, UserList)//m.mount renders the specified component(UserList) into a DOM element(document.body)