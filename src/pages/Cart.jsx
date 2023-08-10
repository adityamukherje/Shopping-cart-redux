import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {useState , useEffect} from "react";

const Cart = () => {
  const {cart} = useSelector( (state) => (state))
  const [totalAmount , setTotalAmount] = useState(0);

 useEffect( () =>{
  setTotalAmount( cart.reduce( (acc , curr)  => acc + curr.price , 0) );
 } , [cart] );
  
  return(
    <div className="flex justify-between items-center ">
      {
        cart.length > 0 ?
        (
          <div className="">
            {
              cart.map( (item , index) => {
                return <CartItem key = {item.id} item = {item} itemIndex = {index} />
              })
            }

            <div className=" flex flex-col justify-between ">
              <div>
                <div className=" text-green-600 font-bold text-lg ">
                  Your Cart
                </div>
                <div>Summary</div>
                <p>
                  <span> Total item = {cart.length} </span>
                </p>
              </div>

              <div>
                <p>
                  Total Amount : ${totalAmount}
                </p>
                <button>
                  Checkout Now
                </button>
              </div>
            </div>

          </div>

          
        ) :
        (
          <div>
            <h1>Cart Emtey</h1>
            <Link to={"/"} >
              <button>
                shop now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
