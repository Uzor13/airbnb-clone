import {User} from "../../../model";

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).end() //Method Not Allowed
        return
    }
    const {email, password, passwordConfirmation} = req.body

    if (password !== passwordConfirmation) {
        res.end(JSON.stringify({status: 'error', message: 'Passwords do  not match'}))
        return
    }

    const user = await User.create({email, password})
    res.end(JSON.stringify({status: 'success', message: "User added"}))
}