import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';

//Material UI
import { Box } from '@mui/material';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}
