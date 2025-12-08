import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PortfolioProjectPage from './pages/PortfolioProjectPage';
import RecipeAppPage from './pages/RecipeAppPage';
import GroceryDeliveryPage from './pages/GroceryDeliveryPage';
import ELMSLearnersPage from './pages/ELMSLearnersPage';
import ELMSAdminsPage from './pages/ELMSAdminsPage';
import VirtualVisitPage from './pages/VirtualVisitPage';
import AboutMePage from './pages/AboutMePage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/about-me' element={<AboutMePage />} />
        <Route path='/project-portfolio' element={<PortfolioProjectPage />} />
        <Route path='/project-recipe-manage-app' element={<RecipeAppPage />} />
        <Route
          path='/project-grocery-delivery-app'
          element={<GroceryDeliveryPage />}
        />
        <Route path='/project-elms-learners' element={<ELMSLearnersPage />} />
        <Route path='/project-elms-admins' element={<ELMSAdminsPage />} />
        <Route path='/project-virtual-visit' element={<VirtualVisitPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
