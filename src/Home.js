import React from 'react';

const Home = ({firebase}) => {
  return (
    <div className="">
      <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
      <h1>Welcome {firebase.auth().currentUser.displayName}!</h1>
      <img
        alt="avatar"
        src={firebase.auth().currentUser.photoURL}/>
    </div>
  );
}

export default Home;
