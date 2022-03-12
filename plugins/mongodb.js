"use strict";

const fp = require("fastify-plugin");

// // Register the mongo plugin
module.exports = fp(async function (fastify, opts) {
  fastify.register(require("fastify-mongodb"), {
    url: process.env.MONGODB_URI,
    useUnifiedTopology: true,
  });
});
