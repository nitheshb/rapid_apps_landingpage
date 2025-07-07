export default function ShapesComponent() {
    return (
      <div className="relative w-full h-screen bg-white flex flex-col items-center justify-center space-y-12">
        {/* Top Shapes */}
        <div className="flex justify-between w-full px-8">
          <div className="w-16 h-16 bg-pink-400 rounded-full transform rotate-12"></div>
          <div className="w-24 h-10 bg-yellow-400 rounded-full transform rotate-45"></div>
        </div>
  
        {/* Middle Shapes */}
        <div className="flex justify-center space-x-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-600"></div>
            </div>
            <p className="text-black mt-4 font-bold">Shape 1</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl font-bold">⚡</div>
            </div>
            <p className="text-black mt-4 font-bold">Shape 2</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-md flex items-center justify-center">
              <div className="text-green-300">🌍</div>
            </div>
            <p className="text-black mt-4 font-bold">Shape 3</p>
          </div>
        </div>
  
        {/* Bottom Shapes */}
        <div className="flex justify-center space-x-12">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <div className="text-yellow-400 text-xl font-bold">✔</div>
          </div>
          <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
            <div className="text-red-400 text-xl">🍥</div>
          </div>
          <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center">
            <div className="text-purple-700 text-xl">🔄</div>
          </div>
        </div>
      </div>
    );
  }
  