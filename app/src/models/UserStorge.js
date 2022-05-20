"use strict";

const fs = require("fs").promises;

class UserStorge {

    static #getUserInfo(data,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});

        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data,id);
            })
            .catch(console.error);

    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id); W
        users.name.push(userInfo.name);
        users.passwd.push(userInfo.passwd);
        return { success: true };
    }
}

module.exports = UserStorge;