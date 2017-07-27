import axios from 'axios'

export const ListArticle = (source, sortBy) => {
     source = source || 'abc-news-au'
     sortBy = sortBy || 'top'
     return (dispatch) => {
          axios.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sortBy}&apiKey=fabbc131990a4fe48ebea6380db16848`)
          .then(response=>{
               console.log('List Article axios'+response.data)
               return dispatch({
                    type : 'LISTARTICLE',
                    payload : response.data
               })
          })
          .catch((err) => {
               console.log(err);
          })
     }
}
