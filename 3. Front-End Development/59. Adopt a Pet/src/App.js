import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

// Add react-router-dom imports

/*2/ 4*/
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// create router with JSX Route elements

/*3/ 6/ 7*/
const appRouter = createBrowserRouter(createRoutesFromElements(
  /*5/ 8/ 10/ 12/ 21/ 25*/
  <Route path="/" element={ <Root /> }>
    <Route index element={ <HomePage /> }/>
    <Route path=':type' element={<HomePage/>}/>
    <Route path=':type/:id' element={<PetDetailsPage/>}/>
    <Route path='/search' element={<SearchPage/>} />
    <Route path='/pet-details-not-found' element={<PetDetailsNotFound/>} />
  </Route>
));

function App() {
  return (
    /*3*/
    <RouterProvider router={appRouter}/>
  );
}

export default App;
