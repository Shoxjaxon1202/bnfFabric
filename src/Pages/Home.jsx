import React from "react";
import Intro from "../UI/Intro/Intro";
import Deliver from "../UI/Deliver/Deliver";
import Quality from "../UI/Quality/Quality";
import Winter from "../UI/Winter/Winter";
import Quality2 from "../UI/Quality2/Quality2";
import AutumnCollection from "../UI/Autumn/Autumn";
import Quality3 from "../UI/Quality3/Quality3";
import SummerCollection from "../UI/Summer/Summer";
import News from "../UI/News/News";

const Home = ({ data }) => {
  return (
    <div>
      <Intro />
      <Deliver />
      <Quality />
      <Winter data={data} />
      <Quality2 />
      <AutumnCollection data={data} />
      <Quality3 />
      <SummerCollection data={data} />
      <News />
    </div>
  );
};

export default Home;
