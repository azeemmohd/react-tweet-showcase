import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

const Tweet = ({ tweet }) => {
	return (
		<div className="tweet">
			<Avatar hash={tweet.gravatar} />
			<div className="content">
				<NameWithHandle author={tweet.author} />
				<Time timestamp={tweet.timestamp} />
				<Message message={tweet.message} />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton count={tweet.retweets} />
					<LikeButton count={tweet.likes} />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	);
};

const Avatar = ({ hash }) => {
	return (
		<img
			src={`https://www.gravatar.com/avatar/${hash}`}
			className="avatar"
			alt="avatar"
		/>
	);
};

const Message = ({ message }) => {
	return <div className="message">{message}</div>;
};

const NameWithHandle = ({ author }) => {
	return (
		<span className="name-with-handle">
			<span className="name">{author.name}</span>
			<span className="handle">@{author.handle}</span>
		</span>
	);
};

function getRetweetCount(count) {
	if (count > 0) {
		return <span className="retweet-count">{count}</span>;
	}
	return null;
}

const Time = ({ timestamp }) => (
	<span className="time">{moment(timestamp).fromNow()}</span>
);
const ReplyButton = () => <i className="fa fa-reply reply-button" />;
const RetweetButton = ({ count }) => (
	<span className="retweet-button">
		<i className="fa fa-retweet" />
		{getRetweetCount(count)}
	</span>
);
const LikeButton = ({ count }) => (
	<span className="like-button">
		<i className="fa fa-heart" />
		{count > 0 && <span className="like-count">{count}</span>}
	</span>
);
const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button" />
);

var testTweet = {
	message: "Something about cats.",
	gravatar: "5dd9113e7ec72b14668b097850abd8e1",
	author: {
		handle: "azeemmohd",
		name: "Azeem Mohammad"
	},
	likes: 2,
	retweets: 12,
	timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById("root"));
