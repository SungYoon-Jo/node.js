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
            return {success: false, msg: "패스워드가 일치하지 않습니다."};
        }
        return {success: false, msg: "아이디가 일치하지 않습니다."};
    }
}

module.exports = User;