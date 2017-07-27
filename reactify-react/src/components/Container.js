import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { SelectSources } from '../actions/ActionSourceArticles'
import { ListArticle } from '../actions/ActionListArticles'
import { ListNews, SelectNews  } from './index'


class Container extends React.Component {
          render () {
               return (
                    <div>
                       <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                         <Switch>
                           <Route exact path="/articles" component={()=>{
                             return(
                               <Tab eventKey={1} title="News">
                                 <br />
                                 <SelectNews />
                                 <hr />
                                 <ListNews />
                               </Tab>
                             )}
                           }/>
                         </Switch>
                       </Tabs>
                     </div>
               )
          }
          componentDidMount () {
               this.props.GetSource()
               this.props.GetListArticles()
          }
     }

     const mapDispatchToProps = (dispatch) =>{
          return {
               GetSource: () =>{
                    dispatch(SelectSources())
               },
               GetListArticles: () => {
                    dispatch(ListArticle())
               }
          }
     }

     export default connect(null, mapDispatchToProps)(Container)
