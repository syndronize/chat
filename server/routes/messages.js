const { addMessage, getMessages, uploadImage, getImages } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/uploadimg/", uploadImage);
router.post("/getimg/", getImages);
router.post("/getmsg/", getMessages);

module.exports = router;
