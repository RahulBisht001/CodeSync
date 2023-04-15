import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Home from './Pages/Home'
import EditorPage from './Pages/EditorPage'


import './App.css';


function App() {
  return (
    <>

      <div>
        <Toaster
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              }
            }
          }}
        >
        </Toaster>
      </div>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
            exact
          />

          <Route
            path="/editor/:roomId"
            element={
              <EditorPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
