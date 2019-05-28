import React from 'react';
import { withSessionContext } from '../../../components/HOC/WithSessionContext';

class Page extends React.Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
        }
    }
    componentWillReceiveProps() {
        console.log('componentDidUpdate',this.props);
        const { authenticated } = this.props.sessionContext;
        if (authenticated) {
           // this.setState({authenticated}, () => this.props.history.push('/about'))
           this.props.history.push('/about');
        }
    }
    getState(){

console.log('session value',this.props)
    }
    componentDidUpdate() {

    }
    render() {
        return (
            <div>
                <p>This is the home page, wuz up!</p>
                <p><button onClick={()=>this.getState()}>Start Session</button></p>
            </div>
        )
    }
}
export const HomePage = withSessionContext(Page)

