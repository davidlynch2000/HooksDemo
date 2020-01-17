import React, {useState,useEffect} from 'react';
import './BookInputItem.css';
import {useFetchBook} from './HookUtilities';


const BookInputItem = ({value,idx}) =>{

  const [isbn,setIsbn] = useState('')
  const [query,setQuery] = useState('');
  const [title,setTitle] = useFetchBook(query);
  const changeHandler = (e) =>{
    setIsbn(e.target.value,idx);
  }

  const titleChangeHandler = (e) =>{
    setTitle(e.target.value);
  }

  const submitHandler = () =>{
    setQuery(isbn);
  }

  return(
    <div className='bookInput'>
      <label>isbn</label>
      <input type='input' value={value} onChange={changeHandler}/>
      <textarea value={title} rows={4} onChange={titleChangeHandler}/>
      <input type='submit' onClick={submitHandler}/>
    </div>
  )
}

export default BookInputItem;
