import HomePage from '../views/HomePage';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { todos: state.Reducer };
}

let fetchPosts = (type, data) => dispatch => {
  setTimeout(() => {
  	dispatch({
      'type': type,
      'payload': data
    })
  }, 1000)
}

function mapDispatchToProps (dispatch) {
	return {
		'getCompanylist': () => dispatch(fetchPosts('ID', '0585'))
	}
}

let ConnectHomePage = connect(
	mapStateToProps,
	mapDispatchToProps
)(HomePage)

export default ConnectHomePage;