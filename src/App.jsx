import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./redux/balanceSlice";
import LangSwitcher from "./components/LangSwitcher";

export const App = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const lang = useSelector((state) => state.locale.lang);
  console.log(balance);
  return (
    <div>
      <LangSwitcher />
      <p>Current lang: {lang}</p>
      <hr />
      <p>Balans: {balance} credits</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
      <button onClick={() => dispatch(withdraw(10))}>
        Withdraw 10 credits
      </button>
    </div>
  );
};
