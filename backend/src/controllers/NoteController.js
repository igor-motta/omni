const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("notes").count();

    const notes = await connection("notes")
      .join("plants", "plants.id", "=", "notes.plant_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select(["notes.*", "plants.name", "plants.nickname", "plants.strain"]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(notes);
  },
  async create(request, response) {
    const plant_id = request.headers.authorization;
    const { title, date, note } = request.body;

    const [id] = await connection("notes").insert({
      title,
      date,
      note,
      plant_id
    });

    return response.json({ id });
  },
  async delete(request, response) {
    const plant_id = request.headers.authorization;
    const { id } = request.params;

    const note = await connection("notes")
      .where("id", id)
      .select("plant_id")
      .first();

    if (note.plant_id != plant_id) {
      return response.status(401).json({ error: "operation not permitted!" });
    }
    await connection("notes")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
