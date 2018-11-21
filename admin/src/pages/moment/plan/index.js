import { connect } from 'dva';
import { PageLayout } from '@/components';

const PlanView = ({
  dispatch,
  location,
  plan,
  loading
}) => {
  console.log('loading', loading)
  return (
    <PageLayout
      location={location}>
      作点远虑
    </PageLayout>
  );
}


export default connect(({ plan, loading }) => ({ plan, loading }))(PlanView);
