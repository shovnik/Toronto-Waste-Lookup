<<<<<<< HEAD
import { connect } from 'react-redux';
import { removeFavourite } from '../actions/favourites';
import FavouriteList from '../components/FavouriteList';

const mapStatetoProps = state => ({
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  removeFavourite: id => dispatch(removeFavourite(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(FavouriteList);
=======
import { connect } from 'react-redux';
import { removeFavourite } from '../actions/favourites';
import FavouriteList from '../components/FavouriteList';

const mapStatetoProps = state => ({
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  removeFavourite: id => dispatch(removeFavourite(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(FavouriteList);
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
