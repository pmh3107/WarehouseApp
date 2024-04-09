import React, { useState } from "react";
import ggIcon from "../assets/icon/ggIcon.png";
import bgIcon from "../assets/icon/bgIcon.png";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";

type LoginProps = {};

export const Login: React.FC<LoginProps> = (props) => {
  const navigate = useNavigate();
  // Form part
  const loginField = [
    {
      label: "Email",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Nhập email của bạn",
    },
    {
      label: "Mật khẩu",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Nhập mật khẩu của bạn",
    },
  ];
  // State to manage form input data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Function to handle input change and update form data state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // handle submit
  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    navigate("/");
  };
  return (
    <>
      <header></header>
      <main className="lg px-4">
        <div className="flex h-screen ">
          {/* Left page */}
          <div className="w-1/2 h-screen relative bg-gradient-to-r from-cyan-300 to-blue-300 max-lg:hidden max-md:hidden">
            <img className="w-full h-full object-contain" src={bgIcon} alt="" />

            <div className="absolute flex flex-col bottom-0 left-0 p-10 gap-2">
              <h1 className=" text-4xl font-bold text-white">Warehouse App</h1>
              <p className="text-xl font-semibold font-serif text-gray-500">
                To live is to fight ...
              </p>
            </div>
          </div>
          {/* Right page */}
          <div className="flex flex-col justify-center w-1/2 px-20 max-lg:w-full max-md:w-full max-md:px-4">
            <button className="flex items-center justify-center gap-2 w-full border-2 border-gray-500 bg-transparent text-gray-500 hover:text-gray-800 hover:border-gray-800 py-2 px-4 rounded-lg">
              <img className="w-7 h-7" src={ggIcon} alt="" />
              Đăng nhập với Google
            </button>
            <div className="my-12 flex items-center justify-center">
              <span className="block w-full h-0.5 bg-slate-500"></span>
              <p className="w-full whitespace-nowrap px-4 text-center text-slate-500 font-medium">
                Hoặc đăng nhập bằng email và mật khẩu
              </p>
              <span className="block w-full h-0.5 bg-slate-500"></span>
            </div>
            <p className="pb-7 text-4xl text-center text-gray-500 font-bold mx-5">
              Chào mừng bạn quay trở lại !
            </p>
            <AuthForm
              fields={loginField}
              onSubmit={handleLoginSubmit}
              onChange={handleInputChange}
            />
            <div className="py-6 flex items-center justify-center gap-2">
              <p className="text-slate-500">Bạn có quên mật khẩu không ?</p>{" "}
              <Link className="text-blue-500 underline" to="/signup">
                Trợ giúp
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
