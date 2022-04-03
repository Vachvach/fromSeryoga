const UserService = require('./User.service')

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body)
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            return res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id)
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async update(req, res) {
        try {
            const updUser = await UserService.update(req.body, req.params.id)
            return res.json(updUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async delete(req, res) {
        try {
            const delUser = await UserService.delete(req.params.id)
            return res.json(delUser);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new UserController()