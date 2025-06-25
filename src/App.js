import logo from './logo.svg';
import './App.css';
import HeaderFunction from './screens/header/Header';
import StudySpaceContent from './screens/components/InfinityStudySpace';
import TechContent from './screens/components/InfinityTechnologies';
import { useState } from 'react';
import Footer from './screens/footer/Footer';

 
function App() {
  const [activeTab, setActiveTab] = useState('study');
 
  return (
    <div className="app-container">
      <div style={{marginBottom:40}}>
      <HeaderFunction/>
      </div>
 
      <div>
  <nav className="tab-bar">
    <button
      className={`tab-button ${activeTab === 'study' ? 'active' : ''}`}
      onClick={() => setActiveTab('study')}
    >
      Infinity Study Space
    </button>
    <button
      className={`tab-button ${activeTab === 'tech' ? 'active' : ''}`}
      onClick={() => setActiveTab('tech')}
    >
      Infinity Technologies
    </button>
  </nav>
</div>
 
    {/* Content */}
    <div >
    <main className="content">
      {activeTab === 'study' ? <StudySpaceContent /> : <TechContent />}
    </main>
    </div>

    <div>
      <Footer/>
      </div>
  </div>
  );
}
 
export default App;