import React from 'react'
import {connect} from 'react-redux'
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { ListArticle } from '../actions/ActionListArticles'
import logo from '../logo.svg'


class SelectNews extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               source: '',
               sortBy: ''
          }
          this.setLocalStateSource = this.setLocalStateSource.bind(this)
          this.setLocalStateSortBy = this.setLocalStateSortBy.bind(this)
     }
     setLocalStateSource(source) {
          this.setState({
               source : source
          })
          console.log('state  '+this.state);
     }

     setLocalStateSortBy(sortBy) {
          this.setState({
               sortBy: sortBy
          })
          console.log(this.state);
     }

     render () {
          const listSelect = this.props.SelectSources.result
          console.log('List Select   ....'+listSelect)

          console.log('-------------ListRender-----');
           if(listSelect){
             return(
               <div>
                 <FormGroup controlId="formSources" style={{width:'40%'}}>
                   <ControlLabel>Select News Sources {`(Default: abc-news-au)`}</ControlLabel>
                   <FormControl
                     componentClass="select"
                     placeholder="select"
                     onChange={(event)=>{
                       this.setLocalStateSource(event.target.value)
                       this.props.GetListArticles(event.target.value, this.state.sortBy)
                     }}>
                   <option>Select Sources</option>
                   {
                     listSelect.sources.map((list, index)=>{
                       return(
                         <option value={list.id} key={index}>{list.name}</option>
                       )
                     })
                   }
                   </FormControl>
                 </FormGroup>
                 <FormGroup controlId="formSortBy" style={{width:'40%'}}>
                   <ControlLabel>Sort By {`(Default : Top)`}</ControlLabel>
                   <FormControl
                     componentClass="select"
                     placeholder="select"
                     onChange={(event)=>{
                       this.setLocalStateSortBy(event.target.value)
                       this.props.GetListArticles(this.state.source, event.target.value)
                     }}>
                     <option value="top">Top</option>
                     <option value="latest">Latest</option>
                     <option value="popular">Popular</option>
                   </FormControl>
                 </FormGroup>
               </div>
             )
           }else{
             return(
               <div style={{textAlign:"center"}}>
                    <h1>Loading......</h1>
                    <img src={logo} className="App-logo" alt="logo" />
               </div>
             )
           }
     }
}


const mapStateToProps = (state) =>{
     return {
          SelectSources : state.listSources
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          GetListArticles: (source , sortBy ) => {
               dispatch(ListArticle(source, sortBy))
          }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectNews)
