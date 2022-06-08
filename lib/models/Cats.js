const pool = require('../utils/pool');

class Cats {
    id;
    name;
    age;

    constructor(cat) {
        this.id = cat.id;
        this.name = cat.name;
        this.age = cat.age;
    }

    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM cats;')
        return rows.map((row) => new Cats(row));
    }
}