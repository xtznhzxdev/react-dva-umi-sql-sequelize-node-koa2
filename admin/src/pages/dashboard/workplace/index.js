import { connect } from 'dva';

const WorkplaceView = ({
  dispatch,
  loading
}) => {
  console.log('loading', loading)
  return (
    <div>
      <h1>Workplace</h1>
    </div>
  );
}


export default connect(({ loading }) => ({ loading }))(WorkplaceView)
