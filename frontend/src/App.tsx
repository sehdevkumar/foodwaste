import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-white shadow-md rounded-lg p-6 mb-6 w-11/12 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Food Waste Management</h1>
        <p className="text-gray-600 mt-2">Track and manage your food inventory to reduce waste</p>
      </header>

      <main className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-2xl">
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
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">Apples</td>
                <td className="py-3 px-4">2kg</td>
                <td className="py-3 px-4">2025-04-19</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Good
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4">Milk</td>
                <td className="py-3 px-4">1L</td>
                <td className="py-3 px-4">2025-04-14</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                    Expiring Soon
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Food Waste Management App - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
