const db = require("../db")
const { UnauthorizedError, BadRequestError } = require("../utils/errors")

class Nutrition {

    static async createNutrition(values) {
        console.log("running createnutrition")
        // throw error if any credential fields are missing
        const requiredFields = ["name", "category", "calories", "image_url"]
        const quantity = values.quantity || 1

        requiredFields.forEach((field) => {
            if (!values.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        // create a new nutrition instance in the database with their info
        const result = await db.query(`
            INSERT INTO nutrition (
                name,
                category,
                quantity,
                calories,
                image_url,
                user_id
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id, name, category, quantity, calories, image_url, user_id, created_at;
        `, [values.name, values.category, values.quantity, values.calories, values.image_url, values.user_id])

        const nutrition = result.rows[0]
        return nutrition
    }

    static async fetchNutritionById(id) {
        if (!id) {
            throw new BadRequestError("No nutrition ID provided")
        }

        const query = `SELECT * FROM users WHERE id = $1`
        const result = await db.query(query, [id])

        if (result) {
            const nutrition = result.rows[0]
            return nutrition
        } else {
            throw new NotFoundError("No nutrition with this ID found")
        }
    }

    static async listNutritionForUser(user_id) {
        if (!user_id) {
            throw new BadRequestError("No user ID provided")
        }

        // get all the rows in nutrition where it's user_id matches the user_id parameter
        const query = `SELECT * FROM nutrition
                       WHERE user_id = $1
                      `
        const result = await db.query(query, [user_id])

        // gives an array
        return result.rows
    }
}

module.exports = Nutrition