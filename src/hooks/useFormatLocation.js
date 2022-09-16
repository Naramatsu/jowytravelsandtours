import { useLocation } from 'react-router-dom';

const format = pathname => pathname.replace('/', '');
const useFormatLocation = () => {
  const { pathname } = useLocation();
  return {
    pathname: format(pathname),
  };
};

export default useFormatLocation;
