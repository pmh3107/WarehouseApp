import React, { useState } from "react";

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

type Props = {};

export const Inventory: React.FC<Props> = (props) => {
  // Dữ liệu của hàng tồn kho và state cho các chức năng thêm, xóa, sửa
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [newItem, setNewItem] = useState<InventoryItem>({
    id: 0,
    name: "",
    quantity: 0,
    price: 0,
  });
  const [editingItemId, setEditingItemId] = useState<number | null>(null);

  // Hàm xử lý thêm một mặt hàng mới vào hàng tồn kho
  const handleAddItem = () => {
    const newId =
      inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1;
    setInventory([...inventory, { ...newItem, id: newId }]);
    setNewItem({ id: 0, name: "", quantity: 0, price: 0 });
  };

  // Hàm xử lý xóa một mặt hàng khỏi hàng tồn kho
  const handleDeleteItem = (itemId: number) => {
    setInventory(inventory.filter((item) => item.id !== itemId));
  };

  // Hàm xử lý chỉnh sửa thông tin một mặt hàng trong hàng tồn kho
  const handleEditItem = (itemId: number) => {
    const editingItem = inventory.find((item) => item.id === itemId);
    if (editingItem) {
      setNewItem({ ...editingItem });
      setEditingItemId(itemId);
    }
  };

  // Hàm xử lý cập nhật thông tin mặt hàng khi chỉnh sửa
  const handleUpdateItem = () => {
    setInventory(
      inventory.map((item) =>
        item.id === editingItemId ? { ...newItem } : item
      )
    );
    setNewItem({ id: 0, name: "", quantity: 0, price: 0 });
    setEditingItemId(null);
  };

  // Hàm xử lý hủy chỉnh sửa mặt hàng
  const handleCancelEdit = () => {
    setNewItem({ id: 0, name: "", quantity: 0, price: 0 });
    setEditingItemId(null);
  };

  console.log(props);

  return (
    <>
      <h1 className="text-2xl font-bold mb-5 ml-4">Inventory</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Tên
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Số lượng
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Giá
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inventory.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{item.price}</td>
              <td className="px-6 py-4 whitespace-no-wrap flex gap-2">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => handleEditItem(item.id)}
                >
                  Sửa
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap">
              <input
                type="text"
                className="w-full border rounded-md px-3 py-2"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
              />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <input
                type="number"
                className="w-full border rounded-md px-3 py-2"
                value={newItem.quantity}
                onChange={(e) =>
                  setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
                }
              />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <input
                type="number"
                className="w-full border rounded-md px-3 py-2"
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: parseFloat(e.target.value) })
                }
              />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap">
              {editingItemId !== null ? (
                <>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                    onClick={handleUpdateItem}
                  >
                    Cập nhập
                  </button>
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                    onClick={handleCancelEdit}
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  onClick={handleAddItem}
                >
                  Thêm
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
