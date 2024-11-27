const Class = require('../models/Class');

exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createClass = async (req, res) => {
  try {
    const { number, description } = req.body;
    const newClass = await Class.create({ number, description });
    res.json(newClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
