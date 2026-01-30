const { getAllUsersService, loginUserService, createUserService, updateMeService, updateUsersByAdminService } = require("../services/userService.js")


const getAllUsers = async (req, res, next) => {

    try {

        const users = await getAllUsersService(req.query);

        res.status(200).json({
            status: "success",
            results: users.length,
            data: users
        });

    } catch (error) {
        next(error)
    }

}


const getMyProfile = async (req, res, next) => {
    try {

        res.status(200).json({
            success: true,
            user: req.user
        })


    } catch (error) {
        next(error)
    }
}


const createUser = async (req, res, next) => {
    try {

        const user = await createUserService(req.body);

        res.status(201).json({
            success: true,
            user: {
                name: user.name,
                email: user.email,
                age: user.age,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
}


const loginUser = async (req, res, next) => {
    try {

        const { user, token } = await loginUserService(req.body.email, req.body.password)



        res.status(200).json({
            success: true,
            token,
            user: {
                name: user.name,
                email: user.email,
                age: user.age,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
}


const updateMe = async (req, res, next) => {

    try {


        const updateUser = await updateMeService(req.user._id, req.body)

        res.status(200).json({
            success: true,
            data: updateUser
        })

    } catch (error) {
        next(error)
    }

}


const updateUsersByAdmin = async (req, res, next) => {

    try {

        const updatedUser = await updateUsersByAdminService(req.params.id, req.body);

        res.status(200).json({
            success: true,
            data: updatedUser
        });

    } catch (error) {
        next(error)
    }

}


module.exports = { getAllUsers, getMyProfile, createUser, loginUser, updateMe, updateUsersByAdmin }