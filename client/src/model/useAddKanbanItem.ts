import {useMutation, useQueryClient} from "@tanstack/react-query";
import request from "graphql-request";
import {GRAPHQL_SERVER} from "../config";
import {graphql} from "../gql";

const MUTATE_ADD_ITEM = graphql(/* GraphQL */`
    mutation AddItem($name: String!, $toListId: ID!) {
        addItem(name: $name, listId: $toListId) {
            id
            name
            done
        }
    }
`)

export function useAddKanbanItem() {
    const client = useQueryClient()

    return useMutation({
        mutationFn: async (variables: { name: string, toListId: string }) =>
            request(
                GRAPHQL_SERVER,
                MUTATE_ADD_ITEM,
                variables,
            ),
        // update
        onSuccess: async (data, variables) => {
            await client.refetchQueries(['kanban'])
        }
    });
}