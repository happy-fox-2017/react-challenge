import React, { Component } from 'react';
import axios from 'axios'

const styles = {
    container: {
        paddingTop: 40
    }
}

export default class People extends Component {
    constructor () {
        super()
        this.state = {
            articles: []
        }
    }

    componentDidMount () {
        this.getNews()
    }

    getNews () {
        axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=beb2f163c5bb43e38c5ae0e00d06ec8f')
        .then((response) => {
            this.setState({
                articles: response.data.articles
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render () {
        return (
            <div className="container" style={styles.container}>
                <div className="row">
                {this.state.articles.map((article, index) => {
                    return <div key={index} className="col s12 m6 l4">
                            <div className="card z-depth-3">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={article.urlToImage} alt="..."/>
                                    <span className="card-title activator gray-text text-darken-4">{article.author}</span>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator gray-text text-darken-4">{article.title}</span>
                                    <p>{article.description}</p>
                                </div>
                                <div className="card-action">
                                    <a href={article.url} className="waves-effect waves-light btn blue">Get Read</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}