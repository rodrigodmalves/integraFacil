const axios = require('axios');

var headers = {
    'Content-Type': 'application/json'
}
var options = {
    url: "https://hookb.in/BYrOLx6J72i202xdVBn9" ,
    method: 'POST',
    headers: headers,
    json: true,
    body: {user:"demo", last_name:"test",contact:"989898989"}
}
axios.post(options.url, options.body)
    .then(
        console.log("Enviado com sucesso")
    ).catch(function(e) {
            console.log(e);
        }
    );