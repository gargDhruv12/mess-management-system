const ExtraItem = require('../models/ExtraItem');

exports.addExtraItem = async (req, res) => {
  try {
    const item = new ExtraItem(req.body);
    await item.save();
    res.status(201).json({ message: 'Extra item added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add item', error: err.message });
  }
};

exports.getExtraItemsByStudent = async (req, res) => {
  try {
    const items = await ExtraItem.find({ rollNumber: req.params.rollNumber });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items', error: err.message });
  }
};
