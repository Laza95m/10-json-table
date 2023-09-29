import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  // получаем все данные
  const getData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(url);

        return setData(response.data);
      };

      fetchData();
    }, [url]);

    return data;
  };

  // получаем данные по id

  const getDataById = (id) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?id=${id}`
        );

        return setData(response.data[0]);
      };

      fetchData();
    }, [id]);

    return data;
  };

  // открываем и закрывае popup

  const [open, setOpen] = useState({ open: false, id: 0 });

  const openPopup = ({ open, id }) => {
    window.scrollTo({ top: 0, left: 0 });
    document.body.style.overflow = 'hidden';
    setOpen({ open, id });
  };

  const closePopup = () => {
    document.body.style.overflow = 'auto';
    setOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{
        open: open,
        setOpen: setOpen,
        openPopup: openPopup,
        closePopup: closePopup,
        getData: getData,
        getDataById: getDataById,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
