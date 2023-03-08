const hello = () => {
    return 'Hello from Express'
}

const world = (body) => {
    return `Firstname: ${body.firstname}`
}

module.exports  = {hello, world}