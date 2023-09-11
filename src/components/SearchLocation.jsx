import "../styles/searchLocation.css";
import PropTypes from "prop-types";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export const SearchLocation = ({ sendSearch }) => {
  const handleClick = () => {
    sendSearch(false);
  };

  return (
    <>
      <section className="searchlocation">
        <div className="div-x-searchlocation">
          <AiOutlineClose
            className="icon-x-searchlocation"
            onClick={handleClick}
          />
        </div>
        <div className="div-search-location">
          <div className="div-input-search-location">
            <AiOutlineSearch className="icon-search-location"/>
            <input
              className="input-search-location"
              type="text"
              placeholder="search location"
            />
          </div>

          <button className="button-search-location">Search</button>
        </div>
        <h1>SearchLocation</h1>
      </section>
    </>
  );
};

SearchLocation.propTypes = {
  sendSearch: PropTypes.func.isRequired,
};
