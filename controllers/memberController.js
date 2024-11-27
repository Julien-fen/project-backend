const Member = require('../models/Member');

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMember = async (req, res) => {
  try {
    const { firstName, lastName, address, classId } = req.body;
    const newMember = await Member.create({ firstName, lastName, address, classId });
    res.json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
