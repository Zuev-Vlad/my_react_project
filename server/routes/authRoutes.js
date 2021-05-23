const { Router } = require('express')
const SchemaUser = require('../../schema/User')
const bcrypt = require('bcryptjs')
const emailValidator = require('email-validator')
const { wrapperResponse } = require('./../common/common')

const authRouter = Router()

authRouter.post('/register', async(req, res) => {
    try {
        const { email, password } = req.body
        const candidate = await SchemaUser.findOne({ email })
        if (candidate) {
            return res.status(404)
                .json(wrapperResponse({ success: false, message: 'Такой логин уже зарегистрирован!' }))
        }

        if (!emailValidator.validate(email)) {
            return res.status(404)
                .json(wrapperResponse({ success: false, message: 'Вы ввели некорректный Email!' }))
        }

        if (password.length < 6) {
            return res.status(404)
                .json(wrapperResponse({ success: false, message: 'Длина пароля должна быть не менее 6 символов' }))
        }

        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = new SchemaUser({ email: email, password: hashPassword })
        await newUser.save()

        res.status(201)
            .json(wrapperResponse({ success: true, message: 'Пользователь успешно добавлен!' }))

    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Что-то  пошло не так! Попробуйте повторить попытку позже!'
        })
        console.log(e)
    }
})

authRouter.post('/login', async(req, res) => {
    try {

    } catch (e) {

    }
})

module.exports = authRouter;