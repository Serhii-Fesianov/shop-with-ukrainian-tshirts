import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import ProductList from '../../components/ProductList/ProductList.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Filter from '../../components/Filter/Filter.jsx';

export default function CatalogPage() {
  const { gender } = useParams();
console.log(gender)
  return (
    <div>
      <Header />
      <Filter />
      <ProductList gender={gender} />
      <Footer />
    </div>
  );
}
