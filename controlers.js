const express = require('express');
const prisma = require('./db.config.js');
const app = express();

const createUser = async (req, res) => {
    const { name, email } = req.body;
    console.log(req.body , 'req-res');
    
    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get all users

// Get a single user by ID
// app.get('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const user = await prisma.user.findUnique({
//             where: { id },
//         });
//         if (user) {
//             res.json(user);
//         } else {
//             res.status(404).json({ error: 'User not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// Update a user by ID
// app.put('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     try {
//         const user = await prisma.user.update({
//             where: { id },
//             data: { name, email },
//         });
//         res.json(user);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// Delete a user by ID
// app.delete('/users/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         await prisma.user.delete({
//             where: { id },
//         });
//         res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


module.exports = {
    createUser,
    getUsers
};

