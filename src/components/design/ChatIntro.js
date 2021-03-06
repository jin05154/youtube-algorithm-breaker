import React from "react";

import FadeIn from "react-fade-in";
import { ReactComponent as SendOne } from "../../images/send_1.svg";
import { ReactComponent as SendTwo } from "../../images/send_2.svg";
import { ReactComponent as SendThree } from "../../images/send_3.svg";
import { ReactComponent as ReplyOne } from "../../images/reply_1.svg";

const ChatIntro = () => {
  return (
    <div className="chat">
      <FadeIn>
        <div id="bubble-1">
          <SendOne />
        </div>
      </FadeIn>
      <FadeIn delay={550}>
        <div id="bubble-2">
          <SendTwo />
        </div>
      </FadeIn>
      <FadeIn delay={1050}>
        <div id="bubble-3">
          <ReplyOne />
        </div>
      </FadeIn>
      <FadeIn delay={1550}>
        <div id="bubble-4">
          <SendThree />
        </div>
      </FadeIn>
    </div>
  );
};

export default ChatIntro;
