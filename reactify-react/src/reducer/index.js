import {combineReducers} from 'redux'

import ListArticleReducer from './ListArticleReducer'
import SourceArticlesReducer from './SourceArticlesReducer'

export default combineReducers ({
     listArticles : ListArticleReducer,
     listSources : SourceArticlesReducer
})
