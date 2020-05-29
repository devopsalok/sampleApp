import React from "react";
import "./index.css";
import { Input, AutoComplete } from "antd";

const SearchInput = ({ options, loading = false }) => {
  return (
    <AutoComplete
      className="search-input"
      dropdownMatchSelectWidth={252}
      style={{ width: 400 }}
      filterOption={true}
      options={options}
      onFocus={e => e.preventDefault()}
    >
      <Input.Search size="large" placeholder="search input here" enterButton />
    </AutoComplete>
  );
};

export default SearchInput;
