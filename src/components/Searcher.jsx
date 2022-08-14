import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/searchSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e));
  };
  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: 50 }}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Searcher;
