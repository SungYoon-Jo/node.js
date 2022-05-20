"use strict";

const { response } = require("express");
const UserStorge = require("./UserStorge");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const { id, passwd } = await UserStorge.getUserInfo(client.id);
        if (id) {
            if (id === client.id && passwd === client.passwd){
                return {success: true};
            }
            return {success: false, msg: "패스워드가 일치하지 않습니다."};
        }
        return {success: false, msg: "아이디가 존재하지 않습니다."};
    }

    register() {
        const client = this.body;
        const response = UserStorge.save(client);
        return response;
    }
}

module.exports = User;