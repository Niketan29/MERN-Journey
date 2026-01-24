let users = [
    { id: 1, name: "John", email: "john@test.com" },
    { id: 2, name: "Jane", email: "jane@test.com" },
];


const getUsers = (req,res)=>{
    res.status(200).json({
        users
    })
}

const getUserById = (req,res)=>{
    let {id}=req.params;

    const user = users.find((user)=>user.id === Number(id));

    if(!user){
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json({
        user
    })
}

const createUser = (req,res)=>{
    const {name,email}= req.body;

    const newUser = {
        id : users.length+1,
        name,
        email
    }

    users.push(newUser);

    res.status(200).json({
        success:true,
        user : newUser
    })
}

module.exports={getUserById,getUsers,createUser};