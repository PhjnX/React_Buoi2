import { useState } from "react";
import dataGlasses from "./dataGlasses";

function App() {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">
      <header className="bg-gray-800 text-white w-full py-4 text-center">
        <h1 className="text-2xl font-bold">Try Glasses App Online</h1>
      </header>
      <main className="flex flex-col items-center mt-8">
        {/* Mô hình */}
        <div className="relative">
          <img
            src="./glassesImage/model.jpg"
            alt="Model"
            className="w-72 rounded"
          />
          {selectedGlass && (
            <div className="absolute top-[80px] left-[65px]">
              <img
                src={selectedGlass.url}
                alt={selectedGlass.name}
                className="w-40 opacity-70 mix-blend-multiply"
              />
            </div>
          )}
        </div>

        {/* Thông tin kính */}
        {selectedGlass && (
          <div className="mt-4 bg-white shadow p-4 rounded text-center max-w-md">
            <h3 className="text-lg font-semibold">{selectedGlass.name}</h3>
            <p className="text-sm text-gray-600">{selectedGlass.desc}</p>
          </div>
        )}

        {/* Danh sách kính */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {dataGlasses.map((glass) => (
            <img
              key={glass.id}
              src={glass.url}
              alt={glass.name}
              className="w-24 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleSelectGlass(glass)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
