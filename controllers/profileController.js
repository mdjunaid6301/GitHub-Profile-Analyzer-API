const db = require("../config/db");
const { getGithubProfile } = require("../services/githubService");

const analyzeProfile = async (req, res) => {
    try {
        const { username } = req.body;

        const user = await getGithubProfile(username);

        await db.execute(
            `INSERT INTO profiles
            (username, name, followers, following,
             public_repos, public_gists, profile_url)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                user.login,
                user.name,
                user.followers,
                user.following,
                user.public_repos,
                user.public_gists,
                user.html_url
            ]
        );

        res.status(201).json({
            message: "Profile stored successfully",
            username: user.login
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getAllProfiles = async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT * FROM profiles"
        );

        res.status(200).json(rows);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getSingleProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const [rows] = await db.execute(
            "SELECT * FROM profiles WHERE username = ?",
            [username]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Profile not found"
            });
        }

        res.status(200).json(rows[0]);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = { analyzeProfile, getAllProfiles, getSingleProfile };