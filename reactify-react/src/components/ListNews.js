import React from 'react'
import { connect } from 'react-redux'
import { Thumbnail, Row, Col, Grid } from 'react-bootstrap'
import logo from '../logo.svg'


const ListNews = (props) => {
     var listnews = props.listNews.result
     if(listnews) {
          return (
               <div>
                     {
                          listnews.articles.map((article,index) => {
                   return (
                         <Grid key={ index } >
                             <Row>
                             <Col xs={6} md={4}>
                               <Thumbnail  src={article.urlToImage} alt="242x200" >
                                 <h3><a href={article.url}>{article.title}</a></h3>
                                 <p>{article.description}</p>
                                 <p>
                                 </p>
                               </Thumbnail>
                             </Col>
                             </Row>
                           </Grid>
                )
               })
             }
               </div>
           )
     } else {
          return (
               <div>
                    <img src={logo} className="App-logo" alt="logo" />
               </div>
          )
     }
}


const mapStateToProps = (state) => {
     return {
          listNews : state.listArticles
     }
}

export default connect(mapStateToProps)(ListNews)
