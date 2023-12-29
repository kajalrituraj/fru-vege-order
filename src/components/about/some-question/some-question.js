import React, { useState } from "react";

const SomeQuestion = () => {

  const [ishide, setIsHide] = useState("+");

  const [visibility, setVisibility] = useState({
    isShown: false,
    isShowntwo: false,
    isShownthree: false,
    isShownfour: false,
    isShownfifth: false,
  });

  const handleClick = (key) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [key]: !prevVisibility[key],
    }));
  };

  const toggleButtonContent = (key) => {
    setIsHide((prev) => (prev === key ? "+" : key));
  };

  const questions = [
    { question: "How to buy a product?", key: "isShown" },
    { question: "How can i make refund from your website?", key: "isShowntwo" },
    { question: "I am a new user. How should I start?", key: "isShownthree" },
    { question: "Returns and refunds", key: "isShownfour" },
    { question: "Are my details secured?", key: "isShownfifth" },
  ];

  return (
    <div className="mt-[90px] flex flex-col justify-center items-center">
      <p className="text-[50px] font-bold pb-[23px]">Some Questions</p>
      <div className="container mx-auto flex jusitify-center gap-8">
        <div className="w-[40vw] pt-5">
          {questions.map(({ question, key }) => (
            <div key={key} className="border border-gray-300 p-5 mt-5">
              <div className="flex justify-between px-5 items-center gap-9">
                <p className="text-lg font-semibold">{question}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleClick(key);
                    toggleButtonContent(key);
                  }}
                  className="text-[37px] font-md bg-homeHeaderBg w-[30px] h-[30px] flex justify-center items-center"
                >
                   {ishide === key ? "-" : "+"}
                </button>
              </div>
              {visibility[key] && (
                <div className="py-5 items-center px-5">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Scelerisque eleifend donec pretium vulputate sapien
                    nec sagittis. Proin libero nunc consequat interdum.
                    Condimentum lacinia quis vel eros donec ac.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="">
          <img src="/images/home/category/6thsection/vegfruit.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SomeQuestion;
