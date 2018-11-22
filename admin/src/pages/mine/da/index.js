import { connect } from 'dva';

const DaView = ({
  dispatch,
  da,
  loading
}) => {
  return (
    <h1>mineWa</h1>
  );
}


export default connect(({ da, loading }) => ({ da, loading }))(DaView)
