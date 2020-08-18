import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>2.</strong>&nbsp;
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>

    <AnswersList
      answers={props.answers}
      state={props.state}
      onAnswerClick={props.onAnswerClickHandler}
    />
  </div>
)

export default ActiveQuiz
