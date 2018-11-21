import { connect } from 'dva';

const NoticesView = ({
  dispatch,
  notices,
  loading
}) => {
  console.log('notices', notices)
  console.log('loading', loading)
  return (
    <div>
      <h1>未读消息</h1>
    </div>
  );
}


export default connect(({ notices, loading }) => ({ notices, loading }))(NoticesView)
