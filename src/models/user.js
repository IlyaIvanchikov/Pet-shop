const fs = require('fs');
const path = require('path');

class User {

    constructor(login, email, password) {
            this.login = login;
            this.email = email;
            this.password = password;
        }

    toJSON() {
            return {
                login: this.login,
                email: this.email,
                password: this.password,
            }
        }

    async save() {
            const users = await User.allInfo();
            users.push(this.toJSON());
            return new Promise((resolve, reject) => {
                fs.writeFile
                (path.join(__dirname, 'user.json'),
                JSON.stringify(users),
                (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
                        }
                    )
                })
            };

    static allInfo() {
        return new Promise((resolve, reject) => {
            fs.readFile
            (path.join(__dirname, 'user.json'),
            'utf-8',
            (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(content));
            }
                    }
                )
            })
        };
    async search() {
    const UserLog = await User.allInfo();    
    const result = UserLog.find(item => 
        (item.login === this.login) && (item.password === this.password));
    return result;    
    };

}

module.exports = User;