import { connect } from 'react-redux';
import { updateKeyword, fetchResults } from '../actions/search';
import Search from '../components/Search';

const mapStatetoProps = state => ({
  keyword: state.search.keyword
});

const mapDispatchToProps = dispatch => ({
  updateKeyword: keyword => dispatch(updateKeyword(keyword)),
  fetchResults: () => dispatch(fetchResults())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Search);
