import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from "react-router-dom"
import Quiz from "../src/containers/Quiz/Quiz"
import QuizList from "../src/containers/QuizList/QuizList"
import Auth from "../src/containers/Auth/Auth"
import QuizCreator from "../src/containers/QuizCreator/QuizCreator"



class App extends Component{
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
