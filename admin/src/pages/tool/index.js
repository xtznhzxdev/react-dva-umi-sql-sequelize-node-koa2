import { connect } from 'dva';

const ToolView = ({
  dispatch,
  api,
  loading
}) => {
  return (
    <h1>上帝之手</h1>
  );
}


export default connect(({ tool, loading }) => ({ tool, loading }))(ToolView)
