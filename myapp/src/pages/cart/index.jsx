import { useContext, useState } from "react";
import PageWrapper from "../../components/pageWrapper";
import { CartContext } from "../../contexts/CartContext";
import CartList from "../../components/cartList";
import CartSummary from "../../components/cartList/cartSummary";
import EmptyCart from "../../components/cartList/emptyCart";
import CartPerks from "../../components/cartList/cartPerks";
import PaymentSuccess from "../../components/cartList/paymentSuccess";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cartSize, clearCart } = useContext(CartContext);
  const [order, setOrder] = useState(null);

  const handleCheckout = (total) => {
    const orderId = Math.random().toString(36).slice(2, 10).toUpperCase();
    setOrder({ id: orderId, total });
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isEmpty = cartSize === 0;
  const isPaid = order !== null;

  return (
    <PageWrapper title="Cart" className={styles.page}>
      <div className={styles.wrap}>
        <h1 className={styles.pageTitle}>
          {isPaid ? (
            <>
              Order <span>Confirmed</span>
            </>
          ) : (
            <>
              My <span>Cart</span>
            </>
          )}
        </h1>
        <p className={styles.pageSub}>
          {isPaid
            ? "Your checkout is complete."
            : isEmpty
              ? "You haven't added anything yet."
              : `${cartSize} ${cartSize === 1 ? "item" : "items"} ready for checkout`}
        </p>

        {isPaid ? (
          <>
            <PaymentSuccess orderId={order.id} total={order.total} />
            <CartPerks />
          </>
        ) : isEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <div className={styles.layout}>
              <CartList />
              <CartSummary onCheckout={handleCheckout} />
            </div>
            <CartPerks />
          </>
        )}
      </div>
    </PageWrapper>
  );
};
export default CartPage;
