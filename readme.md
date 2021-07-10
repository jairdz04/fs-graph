### To run this project follow the next instructions


## API

- Go to the `api-graph` folder.
- Run `npm i` inside the directory in your terminal
- In the root of the project replace the `.env` file (You can ask to me for it)
- Run `npm run dev`
- Go to `http://localhost:3001/graphql`


Stack: NodeJS, ExpressJS, Apollo server [express], MongoDB.

Once the server is running inside the `api-grap` folder is a file called `queries.gql` there you can find the queries and mutations available to test.


## WEBSITE

- Go to the `web-graph` folder.
- Run `npm i` inside the directory in your terminal
- Run `npm start`
- Go to `http://localhost:3000`

Stack: ReactJS, Apollo server [React], Material UI

Once the website is running, you will be able to see something like this:


## Search

Search by name: The request to the API is made only if you have typed more than 2 values.
<img width="1700" alt="Captura de Pantalla 2021-07-10 a la(s) 5 02 12 p  m" src="https://user-images.githubusercontent.com/10820075/125177361-bacdd280-e1a0-11eb-800a-8e9fc9ee2b5b.png">

## Table 

Columns: Name, Age, Username, Hire Date [All fields are sortable ASC OR DESC]

<img width="1600" alt="Captura de Pantalla 2021-07-10 a la(s) 5 02 37 p  m" src="https://user-images.githubusercontent.com/10820075/125177385-e5b82680-e1a0-11eb-8765-9682a48592ed.png">

## Table Actions

Delete: Inactivate the selected user. [Removed from the list as well]

<img width="193" alt="Captura de Pantalla 2021-07-10 a la(s) 5 02 51 p  m" src="https://user-images.githubusercontent.com/10820075/125177396-01233180-e1a1-11eb-9e13-ea4cc0f0081c.png">


## Pagination

<img width="1610" alt="Captura de Pantalla 2021-07-10 a la(s) 5 02 44 p  m" src="https://user-images.githubusercontent.com/10820075/125177399-07b1a900-e1a1-11eb-8bc3-0dfc605c9057.png">



## Final notes


Database:

```
For this project, I have created a replica set cluster in Mongo Atlas. 
One single collection was created and was called `employee` with more than 2000+ rows to test with.
```
