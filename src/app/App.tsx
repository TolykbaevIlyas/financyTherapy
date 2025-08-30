import Footer from '../widgets/Footer';
import Header from '../widgets/Header';

import './App.css';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />

        <main className="flex-1 px-[20px] lg:px-0"></main>

        <Footer />
      </div>
    </>
  );
}

export default App;
