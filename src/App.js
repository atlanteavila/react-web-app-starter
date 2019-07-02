import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SessionContextProvider } from './components/HOC/session-context';
import { routes } from './routes';
import './assets/css/style.css';

const RouteContainer = posed.div({
	enter: {
		opacity: 1,
		delay: 300,
		beforeChildren: true,
		applyAtStart: {
			pointerEvents: 'none',
		},
		applyAtEnd: {
			pointerEvents: 'auto',
		},
	},
	exit: {
		opacity: 0,
		applyAtStart: {
			pointerEvents: 'none',
		},
	},
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
			user: {},
			setSession: this.setSession
		}
	}
	setSession = (user) => {
		this.setState({
			user,
			authenticated: true,
		});
	}
	render() {
		const { user, authenticated } = this.state;
		return (
			<SessionContextProvider value={{ user, authenticated, setSession: this.setSession }}>
					<Router>
						<Route
							render={({ location }) => (
								<PoseGroup>
									<RouteContainer key={location.pathname || 'key'}>
										<Switch location={location}>{routes()}</Switch>
									</RouteContainer>
								</PoseGroup>
							)}
						/>
					</Router>
			</SessionContextProvider>
		)
	}
}

export default App