import { connect } from 'dva';

const NoticesView = ({
  dispatch,
  loading
}) => {
  console.log('loading', loading)
  return (
    <div>
      <h1>个人中心</h1>
    </div>
  );
}


export default connect(({ loading }) => ({ loading }))(NoticesView)
