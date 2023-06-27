# Learningsuite Frontend Assignment

## Assignment instructions
Your Assignment is to build a Kanban-Board, like in Trello where the user is able to drag and drop cards between lists (columns).

This is a great UI example built in React & Material UI: [https://minimals.cc/dashboard/kanban](https://minimals.cc/dashboard/kanban)

The given Example is just inspiration. You don't need to make the card clickable and you don't need to make it as pretty as the example.

Code Clarity & Strucutre is more important in this assignment then the looks of the final UI.

With this test we want to figure out how well you cope with a library that you are probably not familiar with and if you understand the basics of React & TypeScript.

For drag and drop you shall use `react-beautiful-dnd` ([https://github.com/atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)) (it needs to be installed in this monorepo)

<br/>

## Requirements
- Drag and drop (DND) is a must have
- Add a new Card to a column
- Drag a card to another column
- Sorting cards via DND should also work
- Structure the current state of the columns and cards so that the state is serializable as JSON (storing and loading is not required)

<br/>

## Not required
- Deleting a Card is NOT required
- Changing Card or Column title is NOT required
- Showing images is a nice to have but is not required

<br/>

## Getting Started:

First go to the project root and run `yarn` and `yarn start`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Repo documentation
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
