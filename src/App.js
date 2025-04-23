import './App.css';
import Footer from './comp/footer';
import Navbar from './comp/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SplitNav from './comp/split-navbar.js';
import Intro from './comp/intro_info.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SplitNav />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
