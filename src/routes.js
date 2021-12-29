import Home from './components/page/Home';
import About from './components/page/About';
import Products from './components/page/Products';
import ProductDetail from './components/page/ProductDetail';
import SearchProduct from './components/page/SearchProduct';
import Contact from './components/page/Contact';
import NotFound from './components/page/NotFound';


const routes = [
  {title:"Home", path:"/", element: Home, isNav: true, isFooter: true},
  {title:"About", path:"about", element: About, isNav: true, isFooter: true},
  {title:"Products", path:"products", element: Products, isNav: true, isFooter: false},
  {title:"ProductDetail", path:"products/:productId", element: ProductDetail, isNav: false, isFooter: false},
  {title:"Search Product", path:"search-product", element: SearchProduct, isNav: true, isFooter: false},
  {title:"Search Product", path:"search-product/:productName", element: SearchProduct, isNav: false, isFooter: false},
  {title:"Contact", path:"contact", element: Contact, isNav: false, isFooter: true},
  {title:"NotFound", path:"*", element: NotFound, isNav: false, isFooter: false}
]

export default routes