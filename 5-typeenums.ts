let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User2 = [number, string]

const newUser: User2 = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true)