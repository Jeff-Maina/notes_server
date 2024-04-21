// authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
import User from '../database/models/user'; // Assuming you have a User model defined with Sequelize

const verifyAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get the bearer token from the Authorization header
        const authHeader = req.headers['authorization'];

        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized yo', errors: token });
        }

        // Verify the token
        const decoded: any = jwt.verify(token, 'private_key'); // Replace 'your-secret-key' with your actual secret key

        // Check if the user exists
        const user = await User.findByPk(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized yo' });
        }

        // Attach the user object to the request for further processing
        (req as any).currentUser = user;

        next(); // Move to the next middleware or route handler
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = verifyAuth;