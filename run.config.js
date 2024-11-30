module.exports = {
    apps: [{
        name: "next-test1",
        script: "node_modules/.bin/next",
        args: "start -p 3000",
        env: {
            NODE_ENV: "dev"
        }
    }]
};