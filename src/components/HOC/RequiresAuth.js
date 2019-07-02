import React from 'react';
import firebaseApp from '../../Firebase';
import { WithSessionContext } from './WithSessionContext';

export default function RequiresAuth(Component) {
    class AuthenticatedComponent extends React.Component {
        state = {
            user: null,
        }

        async componentDidMount() {
            const { sessionContext: {
                setSession
            } } = this.props;
            firebaseApp.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in.
                    this.setState({
                        user
                    })
                    firebaseApp.auth().currentUser.getIdTokenResult()
                        .then((idToken) => {
                            if (idToken && idToken.claims && idToken.claims.isSuperAdmin) {
                                console.log("super admin time!");
                                setSession({idToken, isSuperAdmin: true})
                            } else {
                                console.log("No soup for you!", idToken)
                                setSession({idToken, isSuperAdmin: false})
                            }
                        })
                        .catch(e => console.log('error!', e))
                } else {
                    // No user is signed in.
                    this.props.history.push('/login')
                }
            });
        }

        render() {
            return (
                <div>
                    {this.state.user
                        ? <Component {...this.props} />
                        : null
                    }
                </div>
            )

        }
    }

    return WithSessionContext(AuthenticatedComponent)
}