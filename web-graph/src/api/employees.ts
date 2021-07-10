import { gql } from "@apollo/client";
import { client } from "./index";

export const getEmployees = (variables: { q: String, sort: String, sortKey: String, limit: Number, offset: Number }) => {
    return client.query({ query: gql`
    {
        getEmployees(q: "${variables.q}", sort: "${variables.sort}", sortField: "${variables.sortKey}", limit: ${variables.limit}, offset: ${variables.offset}){
          limit,
          offset,
          count,
          items {
            id, 
            username,
            name, 
            age, 
            hire_date
          }
        }
      }`,
      fetchPolicy: "no-cache"
    })
}

export const inactivateEmployee = (id: String) => {
  return client.mutate({
    mutation: gql`
      mutation {
        inactivateEmployee(
            id: "${id}"
        ) 
      }`
  })
}
