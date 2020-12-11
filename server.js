const express = require("express");
//const { expressGraphQL } = require("express-graphql");
var { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();

//Registering the GraphQL express server
/*app.use("/graphql", expressGraphQL => ({
  schema,
  //dev tool makes queries against our dev server only intented to use in dev env
  graphiql: true
}));*/
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
