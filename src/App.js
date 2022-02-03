import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppMenu } from './components';
import {ChangesPage, GeneratorPage} from "./pages";

function App() {
  return (
    <div>
     <AppMenu/>
        <div style={{ margin: '20px 20px'}}>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<GeneratorPage/>}/>
                    <Route exact path="/changes" element={<ChangesPage/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
