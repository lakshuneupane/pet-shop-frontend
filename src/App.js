import {Header, About, Services, Collection, Feature, Blog, Footer} from './containers'


import './App.css';
import { Navbar, Topnavbar } from './components';


function App() {
  return (
    <div className="app">
      <Topnavbar />
      < Navbar />
      <Header />
      <About />
      <Services />
      < Collection />
      < Feature />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
