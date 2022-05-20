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

    async register() {
        const client = this.body;
        try {
        const response = await UserStorge.save(client);
        return response;
        } catch (err) {
            return  {success: false, msg: err};
        }
    }
}

module.exports = User;