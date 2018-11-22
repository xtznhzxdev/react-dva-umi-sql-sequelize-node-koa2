import { connect } from 'dva';

const WenView = ({
  dispatch,
  wen,
  loading
}) => {
  return (
    <h1>mineWen</h1>
  );
}


export default connect(({ wen, loading }) => ({ wen, loading }))(WenView)
