import { connect } from 'dva';

const ApiView = ({
  dispatch,
  api,
  loading
}) => {
  console.log('api', api)
  console.log('loading', loading)
  return (
    <div>
      <h1>api</h1>
    </div>
  );
}


export default connect(({ api, loading }) => ({ api, loading }))(ApiView)
