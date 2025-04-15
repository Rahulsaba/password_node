const prisma = require('../db.config.js');

const createNote = async (req, res) => {
  const { title, content, links, account, passsowrd } = req?.body
  const userId = req?.user_id;
  try {
    const note = await prisma.Note.create({
      data: {
        title,
        content,
        links,
        account,
        passsowrd,
        userId,
      },
    });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Could not create note', error: true });
  }
};

const getAllNotes = async (req, res) => {
  const userId = req?.user_id;
  try {
    const notes = await prisma.Note.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    res.status(201).json({ data: notes });
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch notes', error: err.message });
  }
};

module.exports = {
  createNote,
  getAllNotes
}