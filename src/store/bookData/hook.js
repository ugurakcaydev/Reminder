import { useSelector } from "react-redux";

export const useBookData = () => useSelector((state) => state.bookData);
