import { connect } from 'dva';

const BookView = ({
  dispatch,
  api,
  loading
}) => {
  return (
    <h1>读书有感</h1>
  );
}


export default connect(({ book, loading }) => ({ book, loading }))(BookView)
