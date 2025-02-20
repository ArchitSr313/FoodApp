import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-4 p-4">
            <div>
                <span className="text-2xl">Your Cart 🛒</span>
                <button className="p-1 ml-4 bg-black text-white rounded-xl shadow-2xl text-md"
                onClick={handleClearCart}
                >Clear Cart</button>
            </div>
            <div className="w-6/12 m-auto shadow-2xl">
                {cartItems.length === 0 && <h1> Your Cart is Empty</h1>}
                <CategoryItems items={cartItems}/>
            </div>
        </div>
    );
};
export default Cart;