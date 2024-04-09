import React, { useState } from "react";
import Header from "../components/header/Header";
import { Report } from "../components/warehouse/Report/Report";
import { Inventory } from "../components/warehouse/Inventory/inventory";
import InputInventory from "../components/warehouse/InputInventory/InputInventory";
import { ExportInventory } from "../components/warehouse/ExportInventory/ExportInventory";
import Footer from "../components/footer/footer";

type HomeProps = {};

enum Tabs {
  Report,
  Inventory,
  InputInventory,
  ExportInventory,
}

export const Home: React.FC<HomeProps> = (props) => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Report);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case Tabs.Report:
        return <Report />;
      case Tabs.Inventory:
        return <Inventory />;
      case Tabs.InputInventory:
        return <InputInventory />;
      case Tabs.ExportInventory:
        return <ExportInventory />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main className="px-20 mb-10 max-md:px-2">
        <div className="flex flex-col gap-4 items-center p-10 max-md:p-2 ">
          <h1 className="text-3xl font-bold">Quản lý kho hàng </h1>
          <div className="animation-fade-in-down max-md:p-5">
            <ul className="flex flex-col md:flex-row gap-10 font-sans max-md:gap-5">
              <li>
                <button
                  className={`block px-2 pb-2 border-b-2 text-2xl font-semibold transition duration-300 ease-in-out ${
                    activeTab === Tabs.Report ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleTabClick(Tabs.Report)}
                >
                  Báo Cáo
                </button>
              </li>
              <li>
                <button
                  className={`block px-2 pb-2 border-b-2 text-2xl font-semibold transition duration-300 ease-in-out ${
                    activeTab === Tabs.Inventory ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleTabClick(Tabs.Inventory)}
                >
                  Tồn Kho
                </button>
              </li>
              <li>
                <button
                  className={`block px-2 pb-2 border-b-2 text-2xl font-semibold transition duration-300 ease-in-out ${
                    activeTab === Tabs.InputInventory ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleTabClick(Tabs.InputInventory)}
                >
                  Nhập kho
                </button>
              </li>
              <li>
                <button
                  className={`block px-2 pb-2 border-b-2 text-2xl font-semibold transition duration-300 ease-in-out ${
                    activeTab === Tabs.ExportInventory ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleTabClick(Tabs.ExportInventory)}
                >
                  Xuất kho
                </button>
              </li>
            </ul>
          </div>
        </div>
        {renderTabContent()}
      </main>
      <Footer />
    </>
  );
};
