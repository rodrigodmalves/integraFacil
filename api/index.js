const axios = require('axios');
const dateFormat = require('dateformat');

var headers = {
    'Content-Type': 'application/json'
}

horario = new Date;

var options = {
    url: "https://hookb.in/BYrOLx6J72i202xdVBn9" ,
    method: 'PUT',
    headers: headers,
    json: true,
    body: {user:"demo", last_name:"test",contact:"989898989",horario_envio:dateFormat(horario, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
}

axios.put(options.url, options.body)
    .then(
        console.log("Enviado com sucesso")
    ).catch(function(e) {
            console.log(e);
        }
    );
