"use strict";

const UserStorge = require("./UserStorge");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id, passwd} = UserStorge.getUserInfo(body.id);

        if (id) {
            if (id === body.id && passwd === body.passwd){
                return {success: true};
            }
            return {success: false, msg: "not password"};
        }
        return {success: false, msg: "not id"};
    }
}

module.exports = User;