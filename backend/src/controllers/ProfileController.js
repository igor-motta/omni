const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const plant_id = request.headers.authorization;

    const notes = await connection("notes")
      .where("plant_id", plant_id)
      .select("*");
    return response.json({ notes });
  }
};
