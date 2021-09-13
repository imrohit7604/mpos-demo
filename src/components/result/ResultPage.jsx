import { Link, useParams } from "react-router-dom";
import "./myStyle.css";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "../card/ProductCard";
const GET_PRODUCT_INFO = gql`
  query GET_DATA($productId: String) {
    getProductById(productId: $productId) {
      id
      title
      description
      images
      price
      inventory
      reviews
    }
  }
`;
function ResultPage() {
  const { id: productId } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_INFO, {
    variables: { productId },
  });


  if (error) return <h1> 
    SomeThing Went Wrong !!</h1>;

  if (loading) return <h1>Loading</h1>;
  else {
    return (
      <div className="result-container">
        {data.getProductById ? (
          <ProductCard productInfo={data.getProductById} />
        ) : (
          <h1>No Product Found !!</h1>
        )}
        <Link to="/">
          <button>Scan More Barcode</button>
        </Link>
      </div>
    );
  }
}

export default ResultPage;
