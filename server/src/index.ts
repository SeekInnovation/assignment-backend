import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'
import {readFileSync} from 'fs'
import cors from 'cors'

const schema = buildSchema(readFileSync('./schema.graphql', 'utf-8'))

const kanban = [
    {
        id: "column1",
        name: 'Todo',
        items: [
            {
                id: 'item1',
                name: 'Item 1',
                done: false
            },
            {
                id: 'item2',
                name: 'Item 2',
                done: false
            }
        ]
    },
    {
        id: "column2",
        name: 'Doing',
        items: [
            {
                id: 'item3',
                name: 'Item 3',
                done: false
            },
        ],
    },
    {
        id: "column3",
        name: 'Done',
        items: [
            {
                id: 'item4',
                name: 'Item 4',
                done: true
            }
        ]
    }
];

const root = {
    kanban: () => kanban,
    moveItem: ({itemId, toListId, index}: {itemId: string, toListId: string, index: number}) => {
        const columnFrom = kanban.find(column => column.items.find(item => item.id === itemId))
        const columnTo = kanban.find(column => column.id === toListId)
        if (!columnFrom || !columnTo) {
            throw new Error('Column not found')
        }
        const item = columnFrom.items.find(item => item.id === itemId)
        if (!item) {
            throw new Error('Item not found')
        }
        columnFrom.items = columnFrom.items.filter(item => item.id !== itemId)
        columnTo.items.splice(index, 0, item)
        return kanban
    }
}

const app = express()

//TODO: remove cors?
app.use(cors())

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

app.listen(4000, () => console.log('Server Started 🔥\nBrowse http://localhost:4000/graphql'))