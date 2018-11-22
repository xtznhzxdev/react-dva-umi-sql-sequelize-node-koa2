import { connect } from 'dva';

const WendaView = ({
  dispatch,
  api,
  loading
}) => {
  return (
    <h1>你有问我有答</h1>
  );
}


export default connect(({ wenda, loading }) => ({ wenda, loading }))(WendaView)
