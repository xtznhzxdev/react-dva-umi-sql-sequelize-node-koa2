import { connect } from 'dva';

const NewstartView = ({
  dispatch,
  getstart,
  loading
}) => {
  console.log('getstart', getstart)
  console.log('loading', loading)
  return (
    <div>
      <h1>新手入门</h1>
    </div>
  );
}


export default connect(({ newstart, loading }) => ({ newstart, loading }))(NewstartView)
