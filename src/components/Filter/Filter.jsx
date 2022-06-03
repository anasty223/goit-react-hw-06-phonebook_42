import PropTypes from 'prop-types';
import{Input}from './Filter.styles'

const Filter = ({value,onChange}) => {
    return <>
         <label>
          Find contact by name
          <Input
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
    </>
}
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};