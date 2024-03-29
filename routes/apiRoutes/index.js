const express = require('express'); 
const router = express.Router(); 

// Route for candidateRoutes.js
router.use(require('./candidateRoutes'));

// Route for partyRoutes.js
router.use(require('./partyRoutes'));

// Route for voterRoutes.js 
router.use(require('./voterRoutes'));

// Route for voteRoutes.js 
router.use(require('./voteRoutes'));

module.exports = router;