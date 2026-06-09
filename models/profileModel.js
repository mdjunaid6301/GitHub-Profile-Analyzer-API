const db = require("../config/db");

const saveProfile = async (data) => {

    const sql = `
    INSERT INTO profiles
    (username,followers,following,public_repos)
    VALUES(?,?,?,?)
    `;

    await db.execute(sql, [
        data.username,
        data.followers,
        data.following,
        data.public_repos
    ]);
};

module.exports = {
    saveProfile
};