import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Darren" />
      <CommentDetail author="Shaye" />
      <CommentDetail author="Meadow" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));