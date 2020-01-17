import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';

export const useFetchBook = (query) =>{
  const [title,setTitle] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    const getBook = async() =>{

      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+query);
      const json = await res.json();
      setTitle(json.items[0].volumeInfo.title);
      dispatch({type:'add',payload:{title:json.items[0].volumeInfo.title}})
    }
    getBook();
  },[query])

  return [title,setTitle];
}
