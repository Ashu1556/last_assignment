import React from "react";

const Home = () => {
  return (
    <div>
      <h2 style={{ color: "green", margin: "50px 100px" }}>Home</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "70%",
          margin: "50px auto",
          fontSize: "20px",
          lineHeight: "1.8",
          wordSpacing: "5px",
        }}
      >
        <p>
          A website (also written as a web site) is a collection of web pages
          and related content that is identified by a common domain name and
          published on at least one web server. Websites are typically dedicated
          to a particular topic or purpose, such as news, education, commerce,
          entertainment or social networking. Hyperlinking between web pages
          guides the navigation of the site, which often starts with a home
          page. As of December 2022, the top 5 most visited websites are Google
          Search, YouTube, Facebook, Twitter, and Instagram. All publicly
          accessible websites collectively constitute the World Wide Web. There
          are also private websites that can only be accessed on a private
          network, such as a company's internal website for its employees. Users
          can access websites on a range of devices, including desktops,
          laptops, tablets, and smartphones. The app used on these devices is
          called a web browser.
        </p>
      </div>
    </div>
  );
};

export default Home;
