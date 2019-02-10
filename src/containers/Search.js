<<<<<<< HEAD
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
=======
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
>>>>>>> 8386796dec32488dba8a43ce73684a4e0f882705
