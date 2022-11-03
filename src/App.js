import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';

function App() {
    const [tabs] = useState([{content: "Tab 1 Content - Hello"},{content: "Tab 2 Content - World"}, {content: "Tab 3 Content - Hello World"}]);

    const [current, setCurrent] = useState(tabs[0])

    return (
        <div className="App">
            <header className="App-header">
                <Tabs tabs={tabs} current={current} setCurrent={setCurrent}/>
            </header>
        </div>
    );
}

export default App;
