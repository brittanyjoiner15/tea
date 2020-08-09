//newTea function for post tea route

const newTea = (req, res, next) => {
  res.json({ message: "POST new tea" }); // dummy function for now
};

const getAllTea = (req, res, next) => {
  res.json({ message: "GET all tea" });
};

const deleteAllTea = (req, res, next) => {
  res.json({ message: "DELTE all tea" });
};

const getOneTea = (req, res, next) => {
  res.json({ message: "GET one tea" });
};

const newComment = (req, res, next) => {
  res.json({ message: "POST one tea comment" });
};

const deleteOneTea = (req, res, next) => {
  res.json({ message: "DELETE one tea" });
};

module.exports = {
  newTea,
  getAllTea,
  deleteAllTea,
  getOneTea,
  newComment,
  deleteOneTea,
};
