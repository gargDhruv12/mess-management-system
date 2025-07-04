const RationItem = require('../models/RationItem');

exports.getAllRationItems = async (req, res) => {
  try {
    const items = await RationItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items', error: err.message });
  }
};

exports.addRationItem = async (req, res) => {
  try {
    const item = new RationItem(req.body);
    await item.save();
    res.status(201).json({ message: 'Item added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add item', error: err.message });
  }
};
