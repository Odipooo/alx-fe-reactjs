import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Nick" age={28} bio="React developer and bike trainer" />
      <Footer />
    </div>
  );
}

export default App;