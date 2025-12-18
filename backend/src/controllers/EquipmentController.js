const db = require('../config/db');
const { successResponse, errorResponse, ERROR_CODES } = require('../utils/response');
const getAllItems = async (req, res) => {
     try {
    const [rows] = await db.query('SELECT * FROM equipment ORDER BY id DESC')
    res.json(rows)
    console.log(rows);
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};
const createItem = async (req, res) => {
 const { name, type, status, lastCleaned } = req.body
 console.log(req.body);

const cleanedDate = last_cleaned
  ? new Date(lastCleaned).toISOString().slice(0, 19).replace('T', ' ')
  : null;

  if (!name || !type || !status) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  try {
    const [result] = await db.query(
      `INSERT INTO equipment (name, type, status, last_cleaned)
       VALUES (?, ?, ?, ?)`,
      [name, type, status, cleanedDate]
    )

    res.status(201).json({ id: result.insertId })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }  
};
const updateItem = async (req, res) => {
const { id } = req.params
  const { name, type, status, last_cleaned } = req.body

  try {
    await db.query(
      `UPDATE equipment
       SET name=?, type=?, status=?, last_cleaned=?
       WHERE id=?`,
      [name, type, status, last_cleaned, id]
    )

    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
};
const deleteItem = async (req, res) => {
      const { id } = req.params  
      try {
        await db.query('DELETE FROM equipment WHERE id=?', [id])
        res.json({ success: true })
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
};

 module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem
};