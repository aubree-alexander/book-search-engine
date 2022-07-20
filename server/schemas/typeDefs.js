const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID
        user: User
    }

    input saveBookInput {
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String, email: String, password: String): Auth

        login(email: String, password: String): Auth

        saveBook(bookData: saveBookInput): User

        removeBook(bookId: ID): User
    }

`

export default typeDefs