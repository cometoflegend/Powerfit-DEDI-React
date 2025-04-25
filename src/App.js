import './App.css';
import Footer from './comp/footer';
import Navbar from './comp/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SplitNav from './comp/split-navbar.js';
import SplitFooter from './comp/split-footer.js';
import Intro from './comp/intro_info.js';
import Details from './comp/info_details.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <SplitNav />
      <Details/>
      <SplitFooter />
      <Footer />
    </div>
  );
}

export default App;
