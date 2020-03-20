import {Server, Model, Factory} from 'miragejs';

export function makeServer({ environment = "development" } = {}) {
    let server = new Server({
        environment,

        models: {
            user: Model,
        },
        
        factories: {
            user: Factory.extend({
              name(i) {
                return `User ${i + 1}`;
              },
      
              isDone: false
            })
          },

        seeds(server) {
            server.create("user", { name: "Bob"})
            server.create("user", { name: "Alice"})
            server.create("user", { name: "Max"})
            server.createList("user", 10)
        },

        routes() {
            this.namespace = "api"
            this.get("/users", schema => {
                return schema.users.all()
            });
        }

    });

    return server;
};