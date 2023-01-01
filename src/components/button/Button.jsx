import { RiCloseLine } from "react-icons/ri";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BiArrowBack} from "react-icons/bi";
const Button = ({ clearInputAll, heandleBtn, evalExample , clearLastElement , burger }) => {
  return (
    <div className="btns">
      <button className="btn orange-btn" onClick={clearInputAll}>c</button>
      <button className="btn orange-btn"  onClick={clearLastElement} ><BiArrowBack/></button>
      <button className="btn orange-btn" value = {'%'} onClick={heandleBtn} >%</button>
      <button className="btn orange-btn" value = {'/'} onClick={heandleBtn} >/</button>
      <button className="btn" value = {7} onClick={heandleBtn} >7</button>
      <button className="btn" value = {8} onClick={heandleBtn} >8</button>
      <button className="btn" value = {9} onClick={heandleBtn} >9</button>
      <button className="btn orange-btn" value = {'*'} onClick={heandleBtn}  > х</button>
      <button className="btn" value = {4} onClick={heandleBtn} >4</button>
      <button className="btn" value = {5} onClick={heandleBtn} >5</button>
      <button className="btn" value = {6} onClick={heandleBtn} >6</button>
      <button className="btn orange-btn" value = {'-'} onClick={heandleBtn} >-</button>
      <button className="btn" value = {1} onClick={heandleBtn} >1</button>
      <button className="btn" value = {2} onClick={heandleBtn} >2</button>
      <button className="btn" value = {3} onClick={heandleBtn} >3</button>
      <button className="btn orange-btn" value = {'+'} onClick={heandleBtn} >+</button>

      <div className="last-btn">
        <button className="btn orange-btn"  onClick={burger} ><BsGrid3X3GapFill/></button>
        <button className="btn" value = {0} onClick={heandleBtn} >0</button>
        <button className="btn" value = {'.'} onClick={heandleBtn} >.</button>
        <button className="btn eval"  onClick={evalExample}>=</button>
      </div>
    </div>
  );
};
export default Button;
