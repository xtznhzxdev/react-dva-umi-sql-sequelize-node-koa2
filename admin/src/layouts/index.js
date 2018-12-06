import SimpleLayout from './simple';
import BasicLayout from './basic';

// const simplePath = ['/account/login', '/account/register', '/account/forgotpwd'];

export default (props) => {
  const { location, children } = props;
  // if(simplePath.indexOf(pathname) > -1) {
  //   return (
  //     <SimpleLayout>{children}</SimpleLayout>
  //   )
  // }
  return (
    <BasicLayout location={location}>{children}</BasicLayout>
  )
}
