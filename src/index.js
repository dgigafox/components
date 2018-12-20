import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          img={faker.image.avatar()}
          timeAgo="Today at 6:00PM"
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          img={faker.image.avatar()}
          timeAgo="Today at 5:59PM"
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>  );
};

ReactDOM.render(<App />, document.querySelector('#root'));