import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotesIcon from '@mui/icons-material/Notes';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

function Feed() {
  const [input, setInput] = useState('');
  const [posts,setPosts] = useState([]);
  
  useEffect(()=> {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot=>
        setPosts(
            snapshot.docs.map(doc=>(
            {
                id: doc.id,
                data: doc.data(),
            }
        )))
    );
  },[]);

  // to save from refreshing
  const sendPost = e =>{
    e.preventDefault();
    
    db.collection('posts').add({
        name: "Somil",
        description: "testss",
        message: input,
        photourl: '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    
    })
    setInput("");
  };


  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title='photo' color="#70B5f9"/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
            <InputOption Icon={CalendarTodayIcon} title='Event' color="#C0CBCD"/>
            <InputOption Icon={NotesIcon} title='Write Article' color="#7fc15e"/>

            </div>
        </div>

        {/* Posts */}
        {posts.map(({id,data: {name, description, message,photourl}})=>(
            <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photourl={photourl}
            />
        ))}
        
    </div>
  )
}

export default Feed