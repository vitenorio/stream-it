import connection from "../../database/connection"

// @ts-ignore types for _ and args 
async function createUser(_, args) {
    const { name, email, password, work, github, image } = args.input
    const user = { name, email, password, work, github, image }

    await connection('users')
        .where('email', email)
        .first()
        .then(emailAlreadyExists => {
            return emailAlreadyExists && Promise.reject(
                new Error('Email já cadastrado!')
            )
        })

    const newUser = await connection('users').insert(user)

    return { id: newUser[0], ...user }
}

export default createUser