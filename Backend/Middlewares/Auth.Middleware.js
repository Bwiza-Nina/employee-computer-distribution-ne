const jwt  = require('jsonwebtoken');

const authenticateJWT = async (req,res,next) => {
    const authHeader = req.headers.authorization || req.cookies.token;

    if(authHeader){
        if(!authHeader.startsWith('Bearer ')) return res.status(401).json({
            success: false,
            status: 401,
            message: 'Access Denied'
        })
        const [header, token] = authHeader.split(" ");
        if(!(header && token)){
            return res.status(401).send("Authentication credentials are required");
        }
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err){
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    }
    return res.sendStatus(401);
};

module.exports = authenticateJWT;