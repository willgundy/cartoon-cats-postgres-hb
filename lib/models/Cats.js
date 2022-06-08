const pool = require('../utils/pool');

class Cats {
    id;
    name;
    type;
    url;
    year;
    lives;
    isSidekick;

    constructor(cat) {
        this.id = cat.id;
        this.name = cat.name;
        this.type = cat.type;
        this.url = cat.url;
        this.year = cat.year;
        this.lives = cat.lives;
        this.isSidekick = cat.issidekick;
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT id, name FROM cats;')
        return rows.map((row) => new Cats(row));
    }

    static async getCatById(id) {
        const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
        if (!rows[0]) return null;

        return new Cats(rows[0]);
    }
}

module.exports = Cats;