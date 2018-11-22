import { connect } from 'dva';

const ApiView = ({
  dispatch,
  api,
  loading
}) => {
  return (
    <h1>api</h1>
  );
}


export default connect(({ api, loading }) => ({ api, loading }))(ApiView)
