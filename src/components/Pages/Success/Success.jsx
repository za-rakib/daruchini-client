import React from 'react';
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: "#f0f0f0"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: " 25%",
        padding: "20px",
        backgroundColor: "#f3ffff"
      }}>
        <Link to='/'>
          <button style={{
            width: "100%",
            backgroundColor: "#008080",
            padding: "10px",
            border: "2px solid #fff",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px"
          }}>অর্ডার সম্পন্ন</button>
        </Link>
        <div style={{
          color: "#3a3a3a",
          marginTop: "10px"
        }}> আপনার অর্ডারগুলো প্রস্তুত করা হচ্ছে! <br />
          দারুচিনি ব্যবহার করার জন্য আপনাকে ধন্যবাদ!!</div>
      </div>
    </div>
  );
};
