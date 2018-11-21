import { connect } from 'dva';

const AboutView = ({
  dispatch,
  about,
  loading
}) => {
  console.log('about', about)
  console.log('loading', loading)
  return (
    <div>
      <h1>about</h1>
    </div>
  );
}


export default connect(({ about, loading }) => ({ about, loading }))(AboutView)
