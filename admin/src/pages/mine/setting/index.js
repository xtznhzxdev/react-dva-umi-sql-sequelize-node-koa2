import { connect } from 'dva';

const SettingView = ({
  dispatch,
  setting,
  loading
}) => {
  return (
    <div>
      <h1>设置</h1>
    </div>
  );
}


export default connect(({ setting, loading }) => ({ setting, loading }))(SettingView)
