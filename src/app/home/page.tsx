"use client";

const HomePage = () => {
  return (
    // layout grid 2 cột
    <div className="max-w-screen-xl mx-auto relative lg:min-h-[calc(100vh-20px)] select-none">
      <div className="lg:grid lg:grid-cols-2 gap-4 lg:min-h-[calc(100vh-20px)]">
        <div className="w-full text-[40px] h-full p-4 lg:mt-20">
          <div className="w-[120px] border border-gray-400 text-[30px] text-center my-10">
            Hello !
          </div>
          <div>
            <span className="w-full font-semibold">
              I'm <span className="text-blue-700">Nguyen Minh Trong,</span>{" "}
              <br />
              Frontend Developer
            </span>
          </div>
          <div className="text-[20px] my-5 text-gray-500">
            I have experience working with Next.js, React, and Tailwind CSS, and
            I’m currently expanding my skills in Flutter to dive into mobile
            development. I’m passionate about building modern, high-performance,
            and user-friendly web interfaces.
          </div>
          <div className="font-bold w-full">
            <a href="/contact">
              <button className="bg-blue-700 w-[140px] py-2 text-white rounded-3xl mr-2 text-[20px]">
                Hire me
              </button>
            </a>
            <a
              href="/NguyenMinhTrong_FrontendDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[100px]"
            >
              <button className="w-[140px] py-2 text-black rounded-3xl mr-2 text-[20px] border border-gray-900 ml-4">
                My CV
              </button>
            </a>
          </div>
        </div>
        <div className="w-full">
          <div className="lg:relative lg:w-full lg:h-full h-[500px] min-h-[500px]">
            <img
              src="/imageofmine1.png"
              alt="imageofmine"
              style={{ objectFit: "cover", objectPosition: "100% 20%" }}
              className="w-full h-full lg:absolute lg:bottom-0 right-0 z-20"
            />
            <div className="h-[350px] w-[350px] 3xl:h-[450px] 3xl:w-[450px] bg-blue-700 rounded-full -skew-y-12 absolute bottom-20 3xl:bottom-36 left-[22%] 3xl:left-[15%] z-0 lg:block hidden"></div>
            <button className="bg-blue-700 w-[210px] py-2 text-white rounded-3xl mr-2 text-[16px] skew-y-12 cursor-default absolute bottom-20 left-1/2 transform -translate-x-1/10 -translate-y-1/2 z-20 lg:block hidden">
              Frontend Developer
            </button>
            <button className="bg-blue-700 w-[200px] py-2 text-white rounded-3xl mr-2 text-[16px] -skew-y-12 cursor-default absolute top-1/3 left-20 transform -translate-x-1/10 -translate-y-1/2 z-5 lg:block hidden">
              Junior
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
