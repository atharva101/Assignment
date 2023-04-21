const SearchBox = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <input
        style={{
          margin: "20px 20px",
          height: "30px",
          width: "240px",
          borderRadius: "5px",
          padding: "5px",
        }}
        type="text"
        placeholder="search"
        onChange={(e) => handleSearch(e)}
      />
    </>
  );
};

export default SearchBox;
