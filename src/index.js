import { GraphQLServer } from 'graphql-yoga'
var jsonxml = require('jsontoxml');

// Type definitions {schema}

const typeDefs = `
    type Query {
        me(test: String): String
        hello: String!
    }

`

async function hello(p) {

    var rep = '"'
    var json = p.replace(/'/g, rep)

    let s = await jsonxml(json)
    console.log(s)
    return s;
}
// Resolvers

const resolvers = {
    Query: {
        me(parent, args, ctx, info) {
            console.log()
            var test = JSON.stringify(args.test)
            var obj = JSON.parse(test)


            return hello(args.test)
        },
        hello() {
            return 'This is my first Query'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up')
})