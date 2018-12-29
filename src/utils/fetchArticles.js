import axios from 'axios';

const getArticles = ( url, dispatchMethod, dispatch ) => {
  axios.get(url)
    .then( response => {
        console.log("I fetched articles?", response.data)
        dispatch( dispatchMethod( response.data ))
    })
    .catch( error => console.log(error))
}

export default getArticles;