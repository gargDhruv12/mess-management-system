export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </div>
  );
}
