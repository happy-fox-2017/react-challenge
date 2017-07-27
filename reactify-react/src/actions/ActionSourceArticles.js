import axios from 'axios'

export const SelectSources = (source, sortBy) => {
     return (dispatch) => {
          axios.get('https://newsapi.org/v1/sources?language=en&apiKey=fabbc131990a4fe48ebea6380db16848')
          .then(response=>{
               console.log('Response Source Artcles '+response.data);
               return dispatch({
                    type : 'FETCH_SOURCES',
                    payload : response.data
               })
          })
          .catch((err) => {
               console.log(err)
          })
     }
}
