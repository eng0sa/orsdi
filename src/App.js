import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './Header/Header';
import AppFooter from './Footer/Footer';
import AppShop from './pages/PageHeader/shopping/shop';
import Home from './Content/Home';
import Birthday from './pages/PageFooter/birthday/birthday';
import AboutOrisdi from './pages/PageFooter/aboutOrisdi/Aboutorisdi';
import Shipping from './pages/PageFooter/shipping/Shipping';
import AppNavbar from './Header/Navbar';
import GlobalWebsites from './pages/PageFooter/globalWebsites/globalWebsites';
import Payment from './pages/PageFooter/payment-page/payment';
import jsonData from '../src/Header/Data.json'
function App()
{
return (
<>
<BrowserRouter>
<AppHeader />
{jsonData.map((navItem) => (
<AppNavbar key={navItem.id} title={navItem.title} subnavItems={navItem.subnavItems} />
))}
<Routes>
<Route path='/' element={<Home />} />
<Route path='/shop' element={<AppShop />} />
<Route path='/birthday' element={<Birthday />} />
<Route path='/aboutorisdi' element={<AboutOrisdi />} />
<Route path='/shipping' element={<Shipping />} />
<Route path='/birthday' element={<Birthday />} />
<Route path='/GlobalWebsites' element={<GlobalWebsites />} />
<Route path='/payment' element={<Payment />} />
</Routes>
<AppFooter />
</BrowserRouter>
</>
);
}

export default App;
