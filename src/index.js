import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import ApprovalCard from './ApprovalCard';

// const App = () => {
// 	return (
// 		<div className="ui container comments">
// 			<ApprovalCard>
// 				<CommentDetails author="Alex" timeAgo="Today at 4:45pm" blogPost="Nice Post" />
// 			</ApprovalCard>
// 			<ApprovalCard>
// 				<CommentDetails author="Sam" timeAgo="Today at 5:45pm" blogPost="Bad Post" />
// 			</ApprovalCard>
// 			<ApprovalCard>
// 				<CommentDetails author="Jane" timeAgo="Today at 6:45pm" blogPost="Decent Post" />
// 			</ApprovalCard>
// 		</div>
// 	);
// };

ReactDOM.render(<App />, document.getElementById('root'));
