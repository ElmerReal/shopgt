import { MDBContainer } from 'mdbreact';
import React from 'react';
interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({ value, handleChange }: Props) => {
  return (
    <MDBContainer style={{ padding: '20px 0px 0px 0px' }}>
      <select
        className="browser-default custom-select"
        value={value}
        onChange={handleChange}
        style={{ width: '30%' }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </MDBContainer>
  );
};

export default Select;
