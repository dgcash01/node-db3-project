const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findSteps,
};

function find() {
  return db("schemes");
}

function findById(id) {
  const schemes = db("schemes")
    .where({ id })
    .first();
    // return schemes.length > 0 ? schemes : Promise.reject("null");
    return schemes;
}

function add(scheme) {
  return db("schemes").insert(scheme, "id");
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

function findSteps(id) {
  return db("steps")
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .where("scheme_id", id)    
    .orderBy("step_number","asc")
}