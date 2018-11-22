import { connect } from 'dva';

const AnalysisView = ({
  dispatch,
  loading
}) => {
  console.log('loading', loading)
  return (
    <div>
      <h1>Analysis</h1>
    </div>
  );
}


export default connect(({ loading }) => ({ loading }))(AnalysisView)
