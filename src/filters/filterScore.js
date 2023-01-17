export const filterScore = (users, score) => {
    switch (score) {
        case '> 20':
            return users.filter(user => user.score > 20)
        case '< 10':
            return users.filter(user => user.score < 10)
        default:
            return users
    }
}
