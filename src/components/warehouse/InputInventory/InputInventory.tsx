import React, { useState } from "react";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const InputInventory: React.FC = () => {
  const [newItem, setNewItem] = useState<InventoryItem>({
    id: 0,
    name: "",
    quantity: 0,
    price: 0,
  });

  // Hàm xử lý thêm một mặt hàng mới vào hàng tồn kho
  const handleAddItem = () => {
    // Xử lý logic thêm mặt hàng mới vào kho ở đây
    console.log("Thêm mặt hàng vào kho:", newItem);
    // Sau khi thêm, reset form nhập liệu
    setNewItem({ id: 0, name: "", quantity: 0, price: 0 });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Nhập Kho</h1>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Tên mặt hàng</label>
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="border rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Số lượng</label>
          <input
            type="number"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
            }
            className="border rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Giá</label>
          <input
            type="number"
            value={newItem.price}
            onChange={(e) =>
              setNewItem({ ...newItem, price: parseFloat(e.target.value) })
            }
            className="border rounded-md px-3 py-2"
          />
        </div>
        <button
          type="button"
          onClick={handleAddItem}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Thêm Mặt Hàng
        </button>
      </form>
    </>
  );
};

export default InputInventory;
