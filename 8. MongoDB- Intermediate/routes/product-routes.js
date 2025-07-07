const {inserSampleProducts, getProductStats, getProductAnalysis} = require('../controllers/product-controller')
const express = require("express")

const router = express.Router();
router.post ("/add", inserSampleProducts)
router.post ("/stats", getProductStats)
router.post('/analysis', getProductAnalysis)

module.exports = router;