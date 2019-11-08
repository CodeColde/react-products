import React, { useState } from 'react';
import useFetch from '@codecolde/use-fetch';
import ListProducts from './components/ListProducts';
import ViewProduct from './components/ViewProduct';
import Loading from './components/atoms/Loading';
import Nav from './components/organisms/Nav';

const App = () => {
  const [loading, data] = useFetch('http://private-5815fe-recommendationsknip.apiary-mock.com/products', undefined, 'products', 'local');
  const [showProduct, setProduct] = useState();
  const selectedProduct = showProduct && data.indexOf(showProduct);
  return (
    <div className="App">
      {loading
        ? <Loading />
        : (
          <>
            <Nav returnToList={setProduct} />
            {!showProduct && <ListProducts data={data} loadPage={setProduct} />}
          </>
        )
      }
      {selectedProduct &&
        <>
          <ViewProduct productId={showProduct} back={setProduct} />
        </>
      }
    </div>
  );
};

export default App;