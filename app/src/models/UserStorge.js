"use strict";

class UserStorge {
    static #users = {
        id: ["good", "day", "command"],
        passwd: ["111", "222", "333"],
        name: ["감자", "고구마", "와플"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorge;