import React from "react";
import lipstick from "../assets/lipstick.png";
import nails from "../assets/nails.png";
import pic1 from "../assets/pic1.png";
import skin from "../assets/skin.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

const posts = [
  {
    id: 1,
    title: "Lipstick",
    image: lipstick,
    content: "Lipstick Section",
  },
  { id: 2, title: "Nail Paints", image: nails, content: "Nail Polish Section" },
  { id: 3, title: "MakeUp", image: pic1, content: "MakeUp Section" },
  { id: 4, title: "Serums and Oils", image: skin, content: "Serum and Oil Section" },
  { id: 5, title: "Foundation", image: pic2, content: "Get the Matching Foundations of your choice" },
  { id: 6, title: "Skin Care", image: pic3, content: "Skin Care Product" },
];

const HeroPost = () => {
  return (
    <>
    <div className="postContainer" style={{backgroundColor: "#FAE3D9"}}>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <img src={post.image} alt={post.title} className="postImage" />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default HeroPost;
