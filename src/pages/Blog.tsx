import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

type Props = {};

export const Blog: React.FC<Props> = (props) => {
  console.log(props);

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <article className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Tiêu đề bài viết</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies felis id mi feugiat, vitae bibendum justo tincidunt.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Đọc thêm
          </a>
        </article>
        <article className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Tiêu đề bài viết</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies felis id mi feugiat, vitae bibendum justo tincidunt.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Đọc thêm
          </a>
        </article>
      </main>

      <Footer />
    </>
  );
};
