//this file is getting queries/resolvers/typedefs from back end and prepares them to be used by react front end.

import { gql } from '@apollo/client'

//GET_ME query
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
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

