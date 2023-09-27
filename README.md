# Learningsuite Backend Assignment

## Assignment instructions
Your Assignment is to build a Kanban-Board, like in Trello where the user is able to drag and drop cards between lists (columns).

This is a great UI example built in React & Material UI: [https://minimals.cc/dashboard/kanban](https://minimals.cc/dashboard/kanban)

The given Example is just inspiration. You don't need to make the card clickable and you don't need to make it as pretty as the example.

Code Clarity & Strucutre is more important in this assignment then the looks of the final UI.

With this test we want to figure out how well you cope with a library that you are probably not familiar with and if you understand the basics of React & TypeScript.

For drag and drop you shall use `react-beautiful-dnd` ([https://github.com/atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)) (it needs to be installed in this monorepo)

<br/>

## Requirements
- Add a new Card to a column
- Drag a card to another column
- Sorting cards via DND should also work
- Store everything in Postgres efficiently and so that it can be valiated via the SQL schema (so no json storing)
- Generate Migrations for the SQL schema

<br/>

## Not required
- Deleting a Card is NOT required
- Changing Card or Column title is NOT required
- Showing images is a nice to have but is not required

<br/>

## Getting Started:

First go to the client folder and run `yarn` and `yarn start`.
Then go to the server folder and run `yarn` and `yarn start`.

You can get the database running with `docker-compose up -d` in the server folder.

You can get graphql type gen running with `yarn codegen` in the client folder.