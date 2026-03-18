import React from "react";

function Header() {
  return (
    <header style={StyleSheet.header}>

      <h1 style={StyleSheet.console.logo}>ShopSmart</h1>

      <nav style={Style.nav}>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
        </nav>
    </header>
  );}

const styles = {header: {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  background: "#282c34",
  color : "#fff"},
nav: {
  display: "flex",
  gap: "10px"
}};

export default Header;