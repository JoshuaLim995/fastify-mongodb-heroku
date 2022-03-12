const {
  listUsers,
  addUser,
  getUser,
  updateUser,
} = require("../controllers/users.controller");

async function routes(fastify, options) {
  fastify.get("/users", listUsers);
  fastify.get("/users/:id", getUser);
  fastify.post("/users", addUser);
  fastify.put("/users/:id", updateUser);
}
module.exports = routes;
