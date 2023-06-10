import { Helmet } from 'react-helmet';
import Welcome from 'components/Welcome/Welcome';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Welcome text="Welcome to your personal contacts" />;
    </div>
  );
};

export default Home;
