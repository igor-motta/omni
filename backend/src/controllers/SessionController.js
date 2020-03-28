const connection = require("../database/connection");

module.exports = {
  async login(request, response) {
    const { id } = request.body;

    const plant = await connection("plants")
      .where("id", id)
      .select("name")
      .first();
    if (!plant) {
      return response
        .status(400)
        .json({ error: "No plant found with this id!" });
    }
    return response.json({ plant });
  }
};
