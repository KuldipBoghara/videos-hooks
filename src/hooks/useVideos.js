import { useEffect, useState } from 'react';
import Youtube from '../API/Youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    });

    setvideos(response.data.items);
  };

  //Returning the output of reusable hook
  /*1st way  return object (mostly used by JS community)
  return {videos, onTermSubmit} ;*/
  //2nd way (retun array)
  return [videos, search];
};

export default useVideos;
