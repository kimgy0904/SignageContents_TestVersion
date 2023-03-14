const { Client } = require("pg");
const client = new Client({
    user: "shelter",
    host: "127.0.0.1",
    database: "cms_shelter_server",
    password: "20121208",
    port: 5433,
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    client.end();
});