import React, { useState } from 'react';
import { MessageSquare, Star, CheckCircle } from 'lucide-react';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    category: 'food_quality',
    rating: 5,
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccess(true);
      setFeedback({ category: 'food_quality', rating: 5, message: '' });
    }, 1000);
  };

  const categories = [
    { value: 'food_quality', label: 'Food Quality' },
    { value: 'service', label: 'Service' },
    { value: 'cleanliness', label: 'Cleanliness' },
    { value: 'menu_variety', label: 'Menu Variety' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 ml-3">Submit Feedback</h1>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-green-700">Thank you for your feedback!</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              value={feedback.category}
              onChange={(e) => setFeedback({ ...feedback, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFeedback({ ...feedback, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= feedback.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Feedback
            </label>
            <textarea
              id="message"
              value={feedback.message}
              onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Share your thoughts about the mess..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;