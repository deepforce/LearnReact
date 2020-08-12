import React from 'react';
import Demo2 from "./Demo2"
import Demo3 from "./Demo3"
import Demo4 from "./Demo4"

import Banner from "./Demo5/banner"
import Chengpin from "./Demo5/chengpin"

import NewBanner from "./Demo5/New/NewBanner"
import NewChengpin from "./Demo5/New/NewChengpin"

import Demo6 from "./Demo6/Parent"

function Home() {
  return (
    <div>
        <Demo2 />
        <Demo3 />
        <Demo4 />

        <Banner />
        <Chengpin />

        <NewBanner />
        <NewChengpin />

        <Demo6/>
    </div>
  );
}

export default Home;
