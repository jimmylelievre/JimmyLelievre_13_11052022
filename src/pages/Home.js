import React from "react";
import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";
import Header from "../components/Header";

/**
 * Show the home page
 */

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="features">
        <FeatureItem
          img={iconChat}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          img={iconMoney}
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          img={iconSecurity}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </div>
    </div>
  );
};

export default Home;
