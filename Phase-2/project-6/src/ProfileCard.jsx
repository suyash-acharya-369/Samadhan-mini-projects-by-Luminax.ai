import React from "react";

const ProfileCard = ({ name, role, image, bio }) => {
  return (
    <div style={{
      maxWidth: "300px",
      margin: "20px auto",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #ddd"
        }}
      />
      <h2 style={{ marginTop: "15px", fontSize: "20px", fontWeight: "600" }}>{name}</h2>
      <p style={{ color: "gray", fontSize: "14px" }}>{role}</p>
      <p style={{ marginTop: "10px", fontSize: "13px", color: "#555" }}>{bio}</p>
    </div>
  );
};

export default ProfileCard;
