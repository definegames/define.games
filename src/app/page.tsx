import { SearchIcon } from "@/components/icons";

const ROOT_URL = "https://define.games";

export default function SearchPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Search Bar Section */}
      <div className="max-w-2xl mx-auto mb-8">
        <div id="searchbar" className="flex items-center rounded-full px-4 py-2">
          <div className="flex-grow text-gray-900">define games</div>
          <div className="flex items-center space-x-2">
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="w-5 h-5 text-blue-500">
              <SearchIcon size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-2xl mx-auto px-4">
        {/* Dictionary Definition */}
        <div className="mb-8">
          <div className="text-xl text-gray-800 mb-1">games</div>
          <div className="text-gray-500 mb-4">/ɡeɪmz/ • noun</div>

          <div className="mb-4">
            <div className="pl-6">
              <p className="text-gray-800 mb-2">an activity that one engages in for amusement or fun.</p>
              <p className="text-gray-600 italic mb-2">&quot;the kids were playing a game&quot;</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="pr-1 py-1 text-sm border border-white">Similar:</span>
                {["entertainment", "amusement", "diversion", "recreation"].map((word) => (
                  <span key={word} className="px-3 py-1 border border-gray-300 text-sm text-gray-900 rounded-full">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          <div className="text-sm text-gray-600">Exactly 2 results ({Math.random().toFixed(2)} seconds)</div>

          <div>
            <a href="#" className="block">
              <div className="text-sm text-gray-600 mb-1">{ROOT_URL} › videogame › Wait & Bleed (working title)</div>
              <div className="text-blue-800 text-xl hover:underline mb-1">Wait & Bleed (working title) - Videogame</div>
            </a>
            <div className="text-sm text-gray-800">
              A turn-based MOBA game about the confrontation between AI and Yokai. It is set in an eclectic world
              comprising elements of Japan in various historical periods. There are multiple modes of play, including
              the one derived from the classic MOBA genre.
            </div>
          </div>

          <div>
            <a href="#" className="block">
              <div className="text-sm text-gray-600 mb-1">{ROOT_URL} › tabletop › B2B AI SaaS</div>
              <div className="text-blue-800 text-xl hover:underline mb-1">B2B AI SaaS - Tabletop game</div>
            </a>
            <div className="text-sm text-gray-800">
              A dynamic and funny game for a company of 3 to 12 people. Your goal is to join a startup and build a
              successful product without going bankrupt. Each player has their own role and hidden objectives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
