import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { theme } from 'styles/theme';

const FormSelect = (props) => {
  const { colors } = theme;

  const indicatorStyles = (provided, state) => {
    provided.color = state.hasValue && 'white';
    provided[':hover'].color = state.hasValue && 'white';
    return provided;
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: colors.gainsboro,
      cursor: 'pointer',
      background: state.hasValue && colors.primary,
      '&:hover': {
        borderColor: colors.gainsboro,
      },
      boxShadow: 'none',
      borderRadius: '4px',
      height: '48px',
    }),
    singleValue: (provided, state) => {
      return {
        ...provided,
        color: state.hasValue && colors.white,
      };
    },
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...indicatorStyles(provided, state),
      display: state.hasValue && 'none',
    }),
    clearIndicator: (provided, state) => ({
      ...indicatorStyles(provided, state),
    }),
    option: (provided, state) => {
      return {
        ...provided,
        cursor: 'pointer',
        color: state.isSelected && colors.active,
        backgroundColor: 'transparent',
        ':active': {
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: !state.isSelected && colors.whiteSmoke,
        },
      };
    },
  };

  return (
    <Select
      styles={customStyles}
      menuPlacement="auto"
      classNamePrefix="react-select"
      isClearable
      isSearchable={false}
      {...props}
    />
  );
};

let Options = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
});

FormSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(Options).isRequired,
};

export default FormSelect;
