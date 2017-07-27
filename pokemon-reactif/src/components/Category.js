import React, { Component }from 'react'
import axios from 'axios'
import FontIcon from 'material-ui/FontIcon'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

const popularIcon = <FontIcon className="material-icons">line_weight</FontIcon>
const topIcon = <FontIcon className="material-icons">movie_filter</FontIcon>
const latestIcon = <FontIcon className="material-icons">extension</FontIcon>

class Category extends Component {
    constructor () {
        super()
        this.state = {
            articles: [],
            category: 'bbc-news',
            selectedIndex: 1
        }
    }

    componentDidMount () {
        this.getArticles()
    }

    getArticles () {
        let category = this.state.category
        axios.get(` https://newsapi.org/v1/articles?source=${category}&sortBy=top&apiKey=beb2f163c5bb43e38c5ae0e00d06ec8f`)
        .then((response) => {
            this.setState({
                articles: response.data.articles
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    selectCategory (value) {
        if(value === 0){
            this.setState({
                category: 'abc-news-au',
                selectedIndex: value
            })
        } else if(value === 1) {
            this.setState({
                category: 'al-jazeera-english',
                selectedIndex: value
            })
        } else {
            this.setState({
                category: 'bloomberg',
                selectedIndex: value
            })
        }
        this.getArticles()
    }

    render () {
        return (
            <div>
                <div className="container">
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
                <div className="container">
                    <Paper zDepth={2} className="navbar-fixed">
                        <BottomNavigation selectedIndex={this.state.selectedIndex}>
                            <BottomNavigationItem
                                label="ABC News"
                                icon={popularIcon}
                                onTouchTap={() => this.selectCategory(0)}
                            />
                            <BottomNavigationItem
                                label="Al-Jazeera"
                                icon={latestIcon}
                                onTouchTap={() => this.selectCategory(1)}
                            />
                            <BottomNavigationItem
                                label="Bloomberg"
                                icon={topIcon}
                                onTouchTap={() => this.selectCategory(2)}
                            />
                        </BottomNavigation>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default Category