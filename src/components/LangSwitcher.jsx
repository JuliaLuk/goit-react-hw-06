import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../redux/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);
  return (
    <div>
      <select
        value={lang}
        onChange={(eve) => dispatch(changeLang(eve.target.value))}
      >
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
