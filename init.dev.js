const bst = require('bespoken-tools');

const server = new bst.LambdaServer('./src/index', 10000, true);
server.start(() => console.log('[init.dev]: server started and listening on port 10000!'));
