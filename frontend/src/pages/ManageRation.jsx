import React, { useState } from 'react';
import { Package, Plus, Edit, Trash2 } from 'lucide-react';

const ManageRation = () => {
  const [rationItems, setRationItems] = useState([
    { id: 1, name: 'Rice', stock: 500, unit: 'kg', costPerUnit: 45, lastUpdated: '2024-01-15' },
    { id: 2, name: 'Dal', stock: 200, unit: 'kg', costPerUnit: 120, lastUpdated: '2024-01-15' },
    { id: 3, name: 'Oil', stock: 50, unit: 'liters', costPerUnit: 150, lastUpdated: '2024-01-14' }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    stock: '',
    unit: 'kg',
    costPerUnit: ''
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddItem = (e) => {
    e.preventDefault();
    const item = {
      id: Date.now(),
      ...newItem,
      stock: parseFloat(newItem.stock),
      costPerUnit: parseFloat(newItem.costPerUnit),
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setRationItems([...rationItems, item]);
    setNewItem({ name: '', stock: '', unit: 'kg', costPerUnit: '' });
    setShowAddForm(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Package className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 ml-3">Manage Ration</h1>
          </div>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Item</span>
          </button>
        </div>

        {showAddForm && (
          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Ration Item</h3>
            <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Item name"
                required
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                value={newItem.stock}
                onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })}
                placeholder="Stock quantity"
                required
                min="0"
                step="0.1"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={newItem.unit}
                onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="kg">kg</option>
                <option value="liters">liters</option>
                <option value="pieces">pieces</option>
              </select>
              <input
                type="number"
                value={newItem.costPerUnit}
                onChange={(e) => setNewItem({ ...newItem, costPerUnit: e.target.value })}
                placeholder="Cost per unit"
                required
                min="0"
                step="0.01"
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="md:col-span-4 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold"
              >
                Add Item
              </button>
            </form>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Item Name</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Stock</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Unit</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Cost/Unit</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Total Value</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Last Updated</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rationItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">{item.name}</td>
                  <td className="py-4 px-4 text-gray-700">{item.stock}</td>
                  <td className="py-4 px-4 text-gray-700">{item.unit}</td>
                  <td className="py-4 px-4 text-gray-700">₹{item.costPerUnit}</td>
                  <td className="py-4 px-4 font-semibold text-green-600">
                    ₹{(item.stock * item.costPerUnit).toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-gray-700">{item.lastUpdated}</td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRation;