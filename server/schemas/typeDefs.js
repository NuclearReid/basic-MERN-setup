const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String!
        password: String!
    }

    type Auth {
        token: String
        User: User
    }

    type Query{
        users: [User]
        me: User
    }

    type Mutation {
        addUser(
            email: String!
            password: String!
            #foo: [ID]
        ): Auth

        login(
            email: String!
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;