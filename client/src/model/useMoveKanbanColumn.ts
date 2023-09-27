import {useMutation, useQueryClient} from "@tanstack/react-query";
import request from "graphql-request";
import {GRAPHQL_SERVER} from "../config";
import {graphql} from "../gql";

const MUTATE_MOVE_ITEM = graphql(/* GraphQL */`
    mutation MoveColumn($id: ID!, $index: Int!) {
        moveColumn(listId: $id, index: $index) {
            id
            name
            items {
                id
                name
                done
            }
        }
    }
`)

export function useMoveKanbanColumn() {
    const client = useQueryClient()

    return useMutation({
        mutationFn: async (variables: { id: string, index: number }) =>
            request(
                GRAPHQL_SERVER,
                MUTATE_MOVE_ITEM,
                variables,
            ),
        // update
        onSuccess: (data, variables) => {
            client.setQueryData(['kanban'], {kanban: data.moveColumn})
        }
    });
}