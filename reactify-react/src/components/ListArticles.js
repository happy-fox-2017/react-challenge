import React from 'react'
import Axios from 'axios'
// import { Link } from 'react-router-dom'

class ListArticles extends React.Component {
     constructor () {
          super()
          this.state = {
               articles : []
          }
     }

  render () {
    return (
         <div>
               <h1>ListArticles </h1>
               <button className="button" onClick={ () => this.getArticles() }>Get The Articles</button>

               {this.state.articles.map((artilcle) => {
              return (
                   <div>
                  <div className="card-image">
                   <figure className="image is-4by3" >
                      {artilcle.title}
                      <img src={ artilcle.urlToImage } alt="Image"/>
                   </figure>
                  </div>
                  <div className="card-content" >
                   <div className="media" >
                      <div className="media-left" >
                        <figure className="image is-48x48" >
                        </figure>
                      </div>
                      <div className="media-content" >
                        <p className="title is-4" >John Smith</p>
                        <p className="subtitle is-6" >@johnsmith</p>
                      </div>
                      </div>
                      <div className="content">
                           { artilcle.description }
                            <a>@bulmaio</a>.
                        <small>11:09 PM - 1 Jan 2016</small>
                      </div>
                     </div>
                  </div>
          )
         })}
         </div>
     )
   }

   componentDidMount () {
        this.getArticles()
   }

   getArticles  () {
        console.log('get article');
       Axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=fabbc131990a4fe48ebea6380db16848')
       .then(response => {
            this.setState({
            articles: response.data.articles
            })
            console.log(response.data)
            console.log("ini response" + response)
       })
       .catch(err => console.log(err))
   }

}

export default ListArticles
