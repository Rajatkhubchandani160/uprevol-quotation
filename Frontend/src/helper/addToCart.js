import { toast } from "react-toastify";
import SummaryApi from "../common";

const addToCart = async (e, id) => {
  e?.preventDefault();
  console.log("e details",e)
  console.log("id details",id)
//   e?.stopPropagation();
  if (!id) {
    toast.error("Product ID is missing");
    return;
  }

  try {
    const response = await fetch(SummaryApi.addToCart.url, {
      method: SummaryApi.addToCart.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        productId: id
      })
    });

    const jsonResponse = await response.json();
    console.log("cart  json  response",jsonResponse)
    
    if (jsonResponse.success) {
      toast.success(jsonResponse.message);
    } else if (jsonResponse.error) {
      toast.error(jsonResponse.message);
    }
  } catch (error) {
    toast.error("An error occurred while adding to cart");
  }
};

export default addToCart;
