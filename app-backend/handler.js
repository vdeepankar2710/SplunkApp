'use strict';


const axios = require("axios");
const { getHandler } = require("./requestHandler");

// const axiosHandler = async () => {
  
//   axios.get('https://Deepankar:Deep@123@localhost:8089/servicesNS/-/-/alerts/alert_actions?output_mode=json'
//     // 'http://Deepankar:Deep@123@127.0.0.1:8000/en-US/splunkd/__raw/servicesNS/-/search/data/ui/views?output_mode=json&search=((isDashboard%3D1%20AND%20(rootNode%3D%22dashboard%22%20OR%20rootNode%3D%22form%22%20OR%20rootNode%3D%22view%22%20OR%20rootNode%3D%22html%22)%20AND%20isVisible%3D1)%20AND%20(eai%3Aacl.app%3D%22search%22)%20AND%20((eai%3Aacl.sharing%3D%22user%22%20AND%20eai%3Aacl.owner%3D%22deepankar%22)%20OR%20(eai%3Aacl.sharing!%3D%22user%22)))&sort_dir=asc&sort_key=label&sort_mode=alpha&count=100&offset=0&digest=1&_=1704820865595'
// , {
//     // params: {
//     //   ID: 12345
//     // }
//   })
//   .then(function (response) {
//     console.log(response);
//     return response;
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   // .finally(function () {
//   //   // always executed
//   // });
  
// }


module.exports.hello = async (event) => {

  // let resAxios = await axiosHandler();
  // resAxios = JSON.stringify(resAxios);


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
