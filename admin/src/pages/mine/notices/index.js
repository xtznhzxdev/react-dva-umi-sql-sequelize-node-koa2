import { connect } from 'dva';

const NoticesView = ({
  dispatch,
  notices,
  loading
}) => {
  return (
    <h1>mineNotices</h1>
  );
}


export default connect(({ notices, loading }) => ({ notices, loading }))(NoticesView)
