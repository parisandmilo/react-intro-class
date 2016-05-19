import React from 'react';
import store from './chat-store';
import ChatContainer from './chat-container.react';
import ChatMetrics from './chat-metrics.react';
import ChatGiphys from './chat-giphys.react';

export default React.createClass({
	
	getInitialState() {
		return this._getState();
	},

	_getState() {
		return {
			messages: store.messages,
			newMessage: store.newMessage,
			giphys: store.giphys
		};
	},

	componentDidMount() {
		store.addChangeListener(this.handleChange);
	},

	handleChange() {
		this.setState(this._getState());
	},

	render() {
		return (
			<div className="chat-controller">
				<ChatContainer messages={this.state.messages} newMessage={this.state.newMessage} />
				<ChatMetrics messages={this.state.messages} newMessage={this.state.newMessage} />
				<ChatGiphys giphys={this.state.giphys} />
			</div>
		);
	},

	componentWillUnmount() {
		store.removeChangeListener(this.handleChange);
	}
});