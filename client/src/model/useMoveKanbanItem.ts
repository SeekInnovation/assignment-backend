import {useMutation, useQueryClient} from "@tanstack/react-query";
import request from "graphql-request";
import {GRAPHQL_SERVER} from "../config";
import {graphql} from "../gql";

const MUTATE_MOVE_ITEM = graphql(/* GraphQL */`
    mutation MoveItem($itemId: ID!, $toListId: ID!, $index: Int!) {
        moveItem(itemId: $itemId, toListId: $toListId, index: $index) {
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

export function useMoveKanbanItem() {
    const client = useQueryClient()

    return useMutation({
        mutationFn: async (variables: { itemId: string, toListId: string, index: number }) =>
            request(
                GRAPHQL_SERVER,
                MUTATE_MOVE_ITEM,
                variables,
            ),
        // //optimistic update
        // onMutate: async ({index, itemId, toListId}) => {
        //     client.setQueryData(['kanban'], (old: KanbanQuery | undefined) => {
        //         if (!old) return old;
        //         const kanban = old.kanban
        //         const columnFrom = kanban.find(column => column.items.find(item => item.id === itemId))
        //         const columnTo = kanban.find(column => column.id === toListId)
        //         if (!columnFrom || !columnTo) {
        //             throw new Error('Column not found')
        //         }
        //         const item = columnFrom.items.find(item => item.id === itemId)
        //         if (!item) {
        //             throw new Error('Item not found')
        //         }
        //         columnFrom.items = columnFrom.items.filter(item => item.id !== itemId)
        //         columnTo.items.splice(index, 0, item)
        //         return {kanban}
        //     })
        // },
        // update
        onSuccess: (data, variables) => {
            client.setQueryData(['kanban'], {kanban: data.moveItem})
        }
    });
}