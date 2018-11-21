import { connect } from 'dva';

const GetstartView = ({
  dispatch,
  getstart,
  loading
}) => {
  console.log('getstart', getstart)
  console.log('loading', loading)
  return (
    <div>
      <h1>getstart</h1>
    </div>
  );
}


export default connect(({ getstart, loading }) => ({ getstart, loading }))(GetstartView)
