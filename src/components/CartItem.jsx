import {FcDeleteColumn} from "react-icons/fc"
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }
  return(
    <div>

      <div className="min-h-[80vh]">
        <img src={item.image} alt="abc" />
      </div>
      <div>
        <h1> {item.title} </h1>
        <h1> {item.description} </h1>
      </div>
      <div>
        <p> {item.price} </p>
        <div onClick={removeFromCart} >
        <FcDeleteColumn/>
        </div>
      </div>
      

    </div>
  )
};

export default CartItem;
