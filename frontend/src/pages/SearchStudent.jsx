import React, { useState } from 'react';
import { Search, User, Plus, Wallet } from 'lucide-react';

const SearchStudent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [extraItem, setExtraItem] = useState({ name: '', price: '' });

  const mockStudents = [
    { id: 1, name: 'Rahul Kumar', rollNumber: '21114001', balance: 25750 },
    { id: 2, name: 'Priya Sharma', rollNumber: '21114002', balance: 28900 },
    { id: 3, name: 'Amit Singh', rollNumber: '21114003', balance: 22100 }
  ];

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.includes(searchTerm)
  );

  const handleAddExtra = (e) => {
    e.preventDefault();
    // Simulate API call to add extra
    console.log('Adding extra:', extraItem, 'for student:', selectedStudent);
    setExtraItem({ name: '', price: '' });
    alert('Extra item added successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
            <Search className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 ml-3">Search Student</h1>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search by name or roll number..."
          />
        </div>

        {searchTerm && (
          <div className="space-y-3">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                  selectedStudent?.id === student.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.rollNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">₹{student.balance.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Balance</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedStudent && (
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 ml-3">Add Extra Item</h2>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-xl">
            <p className="font-semibold text-gray-900">Selected Student: {selectedStudent.name}</p>
            <p className="text-sm text-gray-600">Roll Number: {selectedStudent.rollNumber}</p>
            <p className="text-sm text-green-600">Current Balance: ₹{selectedStudent.balance.toLocaleString()}</p>
          </div>

          <form onSubmit={handleAddExtra} className="space-y-4">
            <div>
              <label htmlFor="itemName" className="block text-sm font-medium text-gray-700 mb-2">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                value={extraItem.name}
                onChange={(e) => setExtraItem({ ...extraItem, name: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Butter, Ice Cream, Milk"
              />
            </div>

            <div>
              <label htmlFor="itemPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Price (₹)
              </label>
              <input
                type="number"
                id="itemPrice"
                value={extraItem.price}
                onChange={(e) => setExtraItem({ ...extraItem, price: e.target.value })}
                required
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter price"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold"
            >
              Add Extra Item
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchStudent;