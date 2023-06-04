import './App.css';
import Header from './Header';
import Home from './Home/Home';
import { Box } from '@mui/system';
import DataProvider from './context/DataProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailView from './Home/details/DetailView';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <Header/>
          <Box style = {{marginTop : 65}}>
          <Routes>
           <Route path = '/' element = {<Home/>} />
           <Route path = '/product/:id' element ={<DetailView/>} />
          </Routes>
          </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
