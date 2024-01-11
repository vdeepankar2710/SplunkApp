'use strict';


const axios = require("axios");
const { getHandler } = require("./requestHandler");


module.exports.hello = async (event) => {
  let tempRes = await getHandler('/servicesNS/-/-/alerts/alert_actions')

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is first hello!',
        input: event,
        // data: resAxios,
        statusCode: 200
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
