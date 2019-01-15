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
