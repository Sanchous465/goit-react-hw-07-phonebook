import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';
import { selectFilters } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const filterContact = e => {
    dispatch(contactsFilter(e.currentTarget.value));
  };

  return (
    <label>
      Filter
      <Input type="text" onChange={filterContact} value={filter} />
    </label>
  );
};