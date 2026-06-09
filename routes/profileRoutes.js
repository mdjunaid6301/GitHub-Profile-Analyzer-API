const express = require("express");
const router = express.Router();

const {
    analyzeProfile,
    getAllProfiles,
    getSingleProfile
} = require("../controllers/profileController");

router.post("/analyze", analyzeProfile);

router.get("/profiles", getAllProfiles);

router.get("/profiles/:username", getSingleProfile);

module.exports = router;