import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", padding: "20px" }}>
      <ProfileCard
        name="Suyash"
        role="Frontend Developer"
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw3ewECltNaa1dbQIVjLKl3V&ust=1756835676241000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDA-4SRuI8DFQAAAAAdAAAAABAE"
        bio="Passionate about building clean UI with React."
      />
    </div>
  );
}

export default App;
