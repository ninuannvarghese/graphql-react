const graphql = require("graphql");
//const _ = require("loadsh");
const axios = require("axios");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;
/*const users = [
  { id: "1", firstName: "Sid", age: 3 },
  { id: "2", firstName: "Sandhra", age: 6 }
];*/
//Schema for users
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});
// returns the usertype when queried with the ID
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        // return _.find(users, { id: args.id });
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(response => response.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});