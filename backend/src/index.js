const env = require("./config/env");
const App = require("./app");

const port = env.PORT;

new App().server.listen(port, () => console.log(`The server is running on http://localhost:${port}`));
