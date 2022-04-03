const User = require('./User.schema')

class UserService {
    async create(user) {
        const newUser = await User.create({...user})
        return newUser
    }
    async getAll() {
        const users = await User.find().populate('books')
        return users
    }
    async getOne(id) {
        if(!id){
            throw new Error('Id is not specified')
        }
        const user = await User.findById(id)
        return user
    }
    async update(user, userId) {
        if(!userId) {
            throw new Error('Id is not specified')
        }
        const updUser = await User.findByIdAndUpdate(userId, user, {new: true})
        return updUser
    }
    async delete(id) {
        if(!id) {
            throw new Error('Id is not specified')
        }
        const delUser = await User.findByIdAndDelete(id)
        return delUser
    }
}

module.exports = new UserService()