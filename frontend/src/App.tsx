import { useState, useEffect } from 'react';
import { fetchFoodItems, getServerStatus } from './services/api';
import './App.css';

interface FoodItem {
  id: number;
  name: string;
  quantity: string;
  expiryDate: string;
  status: string;
}

function App() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [serverStatus, setServerStatus] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [items, status] = await Promise.all([
          fetchFoodItems(),
          getServerStatus()
        ]);
        setFoodItems(items);
        setServerStatus(status.message);
        setError(null);
      } catch (err) {
        setError('Error loading data. Please make sure the backend server is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="bg-white shadow-md rounded-lg p-6 mb-6 w-11/12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Food Waste Management</h1>
        <p className="text-gray-600 mt-2">Track and manage your food inventory to reduce waste</p>
        {serverStatus && (
          <p className="text-sm text-green-600 mt-2">✓ {serverStatus}</p>
        )}
      </header>

      <main className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-2xl">
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">Your Food Inventory</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left border-b">Name</th>
                    <th className="py-3 px-4 text-left border-b">Quantity</th>
                    <th className="py-3 px-4 text-left border-b">Expiry Date</th>
                    <th className="py-3 px-4 text-left border-b">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {foodItems.length > 0 ? (
                    foodItems.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4">{item.name}</td>
                        <td className="py-3 px-4">{item.quantity}</td>
                        <td className="py-3 px-4">{item.expiryDate}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold 
                            ${item.status === 'Good' 
                              ? 'bg-green-100 text-green-800'
                              : item.status === 'Expiring Soon'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-3 px-4 text-center text-gray-500">
                        No food items found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Food Waste Management App - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
