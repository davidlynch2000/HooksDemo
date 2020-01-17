import React, {useState,useEffect} from 'react';
import './BookInputItem.css';

const BookInputItem = ({value,idx}) =>{

  const [title,setTitle] = useState('');
  const [isbn,setIsbn] = useState('')
  const [query,setQuery] = useState('');
  const changeHandler = (e) =>{
    setIsbn(e.target.value,idx);
  }

  const titleChangeHandler = (e) =>{
    setTitle(e.target.value);
  }

  const submitHandler = () =>{
    setQuery(isbn);
  }

  useEffect(()=>{
    const getBook = async() =>{

      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+query);
      const json = await res.json();
      setTitle(json.items[0].volumeInfo.title);
    }

    getBook();
  },[query])
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
