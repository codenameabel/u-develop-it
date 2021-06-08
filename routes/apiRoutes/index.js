const express = require('express'); 
const router = express.Router(); 

// Path for candidateRoutes.js
router.use(require('./candidateRoutes'));

// Path for partyRoutes.js
router.use(require('./partyRoutes'));



module.exports = router;