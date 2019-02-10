<<<<<<< HEAD
import { connect } from 'react-redux';
import { addFavourite } from '../actions/favourites';
import ResultList from '../components/ResultList';

const mapStatetoProps = state => ({
  favourites: state.favourites,
  results: state.search.results
});

const mapDispatchToProps = dispatch => ({
  addFavourite: item => dispatch(addFavourite(item))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ResultList);
=======
import { connect } from 'react-redux';
import { addFavourite } from '../actions/favourites';
import ResultList from '../components/ResultList';

const mapStatetoProps = state => ({
  favourites: state.favourites,
  results: state.search.results
});

const mapDispatchToProps = dispatch => ({
  addFavourite: item => dispatch(addFavourite(item))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ResultList);
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
