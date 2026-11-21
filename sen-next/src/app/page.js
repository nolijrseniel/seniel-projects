export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <div className="bg-white p-10 rounded-xl shadow-md text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to My Website!
        </h1>

        <p className="text-gray-600 mb-6">
          Hello! My name is Noli. Welcome to my simple Next.js website.
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>

      <p className="text-gray-500 text-sm mt-6">© 2026 My Website</p>
    </div>
  );
}
