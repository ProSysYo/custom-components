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
              city(i) {
                return `City ${i + 1}`;
              },
              phone(i) {
                return `+79025676${i + 1}`;
              },
              
            })
          },

        seeds(server) {
            server.create("user", { name: "Bob", city: "Moscow", phone:"+796677878"})
            server.create("user", { name: "Lex", city: "St.Petersburg", phone:"+796677434"})
            server.create("user", { name: "Dima", city: "Yoshkar-Ola", phone:"+7966743434"})
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