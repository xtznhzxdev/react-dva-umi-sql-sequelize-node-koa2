import SimpleLayout from './simple';
import BasicLayout from './basic';

function Layout(props) {
  const { location: { pathname }, children } = props;
  if(['/login', '/register'].indexOf(pathname) > -1) {
    return <SimpleLayout>{children}</SimpleLayout>
  }

  return <BasicLayout location={location}>{children}</BasicLayout>
}

export default Layout;
