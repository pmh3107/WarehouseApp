import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

type Props = {};

export const UserManual: React.FC<Props> = (props) => {
  console.log(props);

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Hướng dẫn sử dụng ứng dụng
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ex
            id leo fermentum accumsan. Morbi in consequat enim. Donec posuere
            massa vitae sapien ultricies, sit amet sodales velit tempus.
            Praesent ultrices venenatis ligula at venenatis.
          </p>
          {/* Add more content as needed */}
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Cách thực hiện hành động A
          </h2>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ex
            id leo fermentum accumsan. Morbi in consequat enim. Donec posuere
            massa vitae sapien ultricies, sit amet sodales velit tempus.
            Praesent ultrices venenatis ligula at venenatis.
          </p>
          {/* Add more content as needed */}
        </section>

        {/* Add more sections as needed */}
      </main>

      <Footer />
    </>
  );
};
