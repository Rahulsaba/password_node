
const prisma = require('./db.config.js');


const createMedia = async (req, res) => {
    const { socialmedia, password } = await req.body;
    try {
         await prisma.SocialMedia.create({
            data: { socialmedia, password },
        });
        res.status(201).json({ message: 'Media Created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
        // res.status(500).json({ error: "network error" });
    }
}

const getMedia = async (req, res) => {
    try {
        const users = await prisma.SocialMedia.findMany();
        res.status(201).json({data: users});

    } catch (error) {
        res.status(400).json({ error: error.message });
        // res.status(500).json({ error: "network error" });
    }
}

// Delete a user by ID

const deleteMedia = async (req, res) => {
    const { id } = req.params;
    console.log(id, 'id-backend');
    try {
        await prisma.SocialMedia.delete({
            where: { id },
        });
        res.status(201).json({ message: 'Media deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const createUser = async (req, res) => {
    const { name, email } = req.body;
    console.log(...req, 'req-res');

    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
        res.status(500).json({ error: "network error" });
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



module.exports = {
    createMedia,
    getMedia,
    deleteMedia,
    createUser,
    getUsers
};

