const Typesense  = require('typesense')

let typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: 'localhost',
      port: '8108',
      protocol: 'http',
    },
  ],
  apiKey: '6D1FqksPCghSwHWUEdI8No1GV5fqO9t9irhCD7Jq7VWcGGzB',
  connectionTimeoutSeconds: 2,
})

// typesenseClient.keys().retrieve().then((res) => {
//   console.log(res);
// })

module.exports = typesenseClient;