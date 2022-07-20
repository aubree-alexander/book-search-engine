import { gql } from '@apollo/client'

//add user mutation
export const ADD_USER = gql`
    mutation addUser ($username: String, $email: String, $password: String) {
        addUser (username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`
//login mutation
export const LOGIN = gql`
    mutation login ($email: String, $password: String) {
        login (email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`

//save book mutation
export const SAVE_BOOK = gql`
    mutation saveBook ($bookData: saveBookInput) {
        saveBook (bookData: $bookData) {
            _id
            email
            username
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`

//remove book mutation
export const REMOVE_BOOK = gql`
    mutation removeBook ($bookId: ID) {
        removeBook (bookId: $bookId) {
            _id
            email
            username
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`

