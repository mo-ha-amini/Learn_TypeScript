type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User1 = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com"
// myUser._id = "asa"