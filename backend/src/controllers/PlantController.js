const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const plants = await connection("plants").select("*");
    return response.json(plants);
  },

  async create(request, response) {
    const { name, strain, nickname } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("plants").insert({ id, name, strain, nickname });

    return response.json({ id });
  }
};
