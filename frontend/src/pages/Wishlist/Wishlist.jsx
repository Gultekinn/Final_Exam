import axios from "axios";
import React, { useContext} from "react";
import { MainContext } from "../../Context/Context";
import "../Wishlist/Wishlist.scss";
import toast, { Toaster } from "react-hot-toast";
const Wishlist = () => {
  const { wishlistItem, setWishlistItem } = useContext(MainContext);

  return (
    <div>
      {wishlistItem.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card__img">
              <img
                src="https://preview.colorlib.com/theme/robotics/img/p1.png"
                alt=""
              />
            </div>
            <h2>{item.title}</h2>
            <p>{item.price}Azn</p>
            <p>{item.desc}</p>
            <button
              onClick={() => {
                const deleteItem = wishlistItem.filter(
                  (item) => item.id != item._id
                );
                if (deleteItem) {
                  const IndexOfTarget = wishlistItem.indexOf(deleteItem);
                  const updateWishlist = [...wishlistItem];
                  updateWishlist.splice(IndexOfTarget);
                  setWishlistItem(updateWishlist);
                  toast.success(" Deleted like");
                }
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Wishlist;
