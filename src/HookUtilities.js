import {useState,useEffect} from 'react';

export const useFetchBook = (query) =>{
  const [title,setTitle] = useState('');

  useEffect(()=>{
    const getBook = async() =>{

      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+query);
      const json = await res.json();
      setTitle(json.items[0].volumeInfo.title);
    }

    getBook();
  },[query])

  return [title,setTitle];
}
