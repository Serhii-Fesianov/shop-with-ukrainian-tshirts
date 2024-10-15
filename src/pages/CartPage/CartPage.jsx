import {useSelector} from 'react-redux'
import Header from '../../components/Header/Header';
import CartEmpty from '../../components/CartEmpty/CartEmpty'
import CartList from '../../components/CartList/CartList'
import RecList from '../../components/RecList/RecList'
import Footer from '../../components/Footer/Footer';

export default function CartPage() {

  const { items } = useSelector(state => state.cartProducts)
  
  return (
    <div>
      <Header />
      {items.length ? <CartList /> : <CartEmpty/>}
      
      <RecList/>
      <Footer />
    </div>
  );
}
