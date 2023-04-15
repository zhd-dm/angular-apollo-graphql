import {gql} from 'apollo-angular';

export const DRAGONS_QUERY = gql`
    query dragons(
        $limit: Int,
        $offset: Int
    ) {
        dragons(
            limit: $limit,
            offset: $offset
        ) {
            active
            description
            id
            name
        }
    }
`;
