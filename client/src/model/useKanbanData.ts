import {graphql} from "../gql";
import {useQuery} from "@tanstack/react-query";
import request from "graphql-request";
import {GRAPHQL_SERVER} from "../config";

const KANBAN_QUERY = graphql(/* GraphQL */`
    query Kanban {
        kanban {
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

export function useKanbanData() {
    return useQuery({
        queryKey: ['kanban'],
        queryFn: async () =>
            request(
                GRAPHQL_SERVER,
                KANBAN_QUERY,
            ),
    });
}