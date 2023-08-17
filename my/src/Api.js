import axios from 'axios';

const Api = {

    // REQUISICAO API
    getPersons: async function(){
        let res =  await axios.get(`https://jsonplaceholder.typicode.com/users`);   // Requisição HTTP para a URL (API)
        let {data} = await res;     // await aguarda a resposta 
        console.log(data);
        return data;
    }

}

export default Api;