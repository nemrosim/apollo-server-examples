const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
   
    type User {
        id: Int
        name: String
    }
    
    type Query {
        users: [User]
    }
`;

const mockedUsers = [
    {
        id: '1',
        name: 'John',
    },
    {
        id: '2',
        author: 'Paul',
    },
];

const resolvers = {
    Query: {
        users: () => mockedUsers,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
