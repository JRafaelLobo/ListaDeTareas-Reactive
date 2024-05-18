import react from 'react';
import './MarkBox.css'
import { useState } from 'react';


function MarkBox(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const markCheckbox = () => {
    setIsChecked(true);
  };

  const unmarkCheckbox = () => {
    setIsChecked(false);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    props.handleCheckboxChange(props.id, event.target.checked);
  };

  return (
    <div className='CajaMarcada'>
      <input type="checkbox"
        onChange={handleCheckboxChange}
        checked={isChecked} />
      <p>{props.texto}</p>
    </div>
  );
}

export default MarkBox