import officeIcon from '../../assets/Office.svg';
import foodIcon from '../../assets/Food.svg';
import carIcon from '../../assets/Car.svg';
import houseIcon from '../../assets/House.svg';
import toiletriesIcon from '../../assets/Toiletries.svg';

const ExpenseIcon = (props) => {
  if (props.type === 'Food & Drink') {
    return <img src={foodIcon} alt="Knife and fork"></img>;
  }
  if (props.type === 'Office') {
    return <img src={officeIcon} alt="Briefcase"></img>;
  }
  if (props.type === 'Car') {
    return <img src={carIcon} alt="Car"></img>;
  }
  if (props.type === 'House') {
    return <img src={houseIcon} alt="House"></img>;
  }
  if (props.type === 'Toiletries') {
    return <img src={toiletriesIcon} alt="Shampoo bottle"></img>;
  }
};

export default ExpenseIcon;
