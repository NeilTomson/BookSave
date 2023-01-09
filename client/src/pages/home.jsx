import React, { useEffect } from "react";

function Home() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="mt-5 text-3xl text-orange-600 ">Save the book</h1>
      <div className="w-10/12 flex flex-row">
        <div className="flex flex-col w-3/4">
          <p className=" mt-5">
            Reading books is important for a variety of reasons. It can improve
            your knowledge and understanding of the world around you, enhance
            your vocabulary and language skills, and provide you with a sense of
            enjoyment and relaxation. One of the main reasons that reading books
            is important is that it can expand your knowledge and understanding
            of the world. When you read a book, you are exposed to new ideas,
            concepts, and ways of thinking. This can help you to develop a
            deeper understanding of different subjects and increase your
            critical thinking skills.
          </p>
          <p className="mt-5">
            Another reason that reading books is important is that it can
            improve your language skills. Reading exposes you to a wide range of
            vocabulary and language structures, which can help you to
            communicate more effectively and confidently. This is especially
            important for children, as reading at an early age has been shown to
            have a positive impact on language development. In addition to the
            cognitive benefits of reading, books can also provide a sense of
            enjoyment and relaxation.
          </p>
          <p className="mt-5">
            Many people find that reading is a great way to unwind after a long
            day, and can help them to relax and de-stress. Reading can also be a
            great form of escapism, allowing you to lose yourself in another
            world and forget about your daily worries and responsibilities.
            Overall, reading books is an important activity that can have a
            significant impact on your life. Whether you are reading for
            enjoyment, to learn something new, or to improve your language
            skills, there are many benefits to be gained from reading. So make
            sure to set aside some time each day to pick up a book and start
            reading!
          </p>
        </div>
        <div className="">
          <img src="/bookrev.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
