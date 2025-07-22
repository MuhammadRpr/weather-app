export default function WeatherUI() {
  const forecastIcons = {
    Cloudy: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1a5 5 0 0110 0h1a4 4 0 010 8H7a4 4 0 01-4-4z" />
    ),
    Rainy: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v4h16V4M4 8l4 4H6v4h2l-4 4" />
    ),
    Clear: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2m-1.636 6.364l-1.414-1.414M12 21v-2m-6.364-1.636l1.414-1.414M3 12h2m1.636-6.364l1.414 1.414" />
    ),
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full max-w-md border-b border-gray-600 flex items-center mb-6">
        <input
          type="text"
          placeholder="Insert your city name"
          className="w-full bg-black text-gray-400 placeholder-gray-500 py-2 px-4 outline-none"
        />
        <svg
          className="w-5 h-5 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </div>

      {/* Current Weather */}
      <div className="w-full max-w-md mb-6">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div>
              <div className="text-sm text-gray-400">Monday</div>
              <div className="text-lg font-semibold">04 September</div>
            </div>
            <div className="text-2xl font-bold">Jakarta</div>
          </div>
        </div>
        <div className="border-t border-gray-600 my-4"></div>
        <div className="flex items-center justify-start mt-2">
          <div>
            <div className="text-lg text-gray-300">Cloudy</div>
            <div className="text-6xl font-bold">29°</div>
          </div>
          <svg
            className="w-16 h-16 ml-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18H5a3 3 0 010-6h.1a5 5 0 0110-1 4.5 4.5 0 012.9 8H6z"
            />
          </svg>
        </div>
      </div>

      {/* Weather Details */}
      <div className="w-full max-w-md border-t border-gray-600 pt-4 grid grid-cols-2 gap-4 text-sm">
        {[
          {
            label: 'Wind',
            value: '6.69/ms',
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m0 0l-3 3m3-3l3 3" />
            ),
          },
          {
            label: 'Humidity',
            value: '70%',
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.5-2 4.5-2 6 0s1.5 5-1 7c-2 1.5-3 2-5 4-2-2-3-2.5-5-4-2.5-2-2.5-5-1-7s4.5-2 6 0z" />
            ),
          },
          {
            label: 'Clouds',
            value: '40%',
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h1a5 5 0 0110 0h1a4 4 0 010 8H7a4 4 0 01-4-4z" />
            ),
          },
          {
            label: 'Real Feel',
            value: '40%',
            icon: (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m6.364 1.636l-1.414 1.414M21 12h-2m-1.636 6.364l-1.414-1.414M12 21v-2m-6.364-1.636l1.414-1.414M3 12h2m1.636-6.364l1.414 1.414" />
            ),
          },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-2 w-full">
            <div className="flex flex-col items-center">
              <svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-400 leading-tight">{item.label}</div>
              <div className="font-semibold leading-tight">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Forecast */}
      <div className="w-full max-w-md mt-6">
        <div className="text-sm text-gray-400 mb-2">Weekly Forecast</div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-left text-xs">
          {[
            { day: 'Tuesday', temp: '26°', type: 'Cloudy' },
            { day: 'Wednesday', temp: '14°', type: 'Rainy' },
            { day: 'Thursday', temp: '25°', type: 'Cloudy' },
            { day: 'Friday', temp: '32°', type: 'Clear' },
            { day: 'Saturday', temp: '22°', type: 'Cloudy' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900 p-2 rounded-md flex flex-col items-start">
              <div className="text-gray-300 text-xs">{item.day}</div>
              <div className="flex items-center gap-1 text-base font-semibold">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {forecastIcons[item.type]}
                </svg>
                {item.temp}
              </div>
              <div className="text-gray-400 text-xs">{item.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
