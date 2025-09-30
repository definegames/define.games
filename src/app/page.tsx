import { SearchIcon } from "@/components/icons";

const ROOT_URL = "https://define.games";

export default function SearchPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Search Bar */}
      <header className="border-b border-gray-200 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div
              className="text-xl sm:text-2xl font-normal text-gray-700 flex-shrink-0 text-center sm:text-left"
              style={{ marginTop: -5 }} // Do not remove this, it aligns the text vertically
            >
              <span className="font-medium">define.games</span>
            </div>
            <div className="flex-1 max-w-2xl">
              <div
                className="flex items-center border border-gray-300 rounded-full px-4 sm:px-5 py-2 sm:py-3
                  shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="flex-grow text-gray-700 text-sm">define games</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-px h-6 bg-gray-300"></div>
                  <SearchIcon size={20} className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-4 sm:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="sm:flex sm:gap-8">
            {/* Logo spacer to match header alignment - hidden on mobile */}
            <div className="hidden sm:block flex-shrink-0 text-2xl font-normal invisible">
              <span className="font-light">define</span>
              <span className="font-semibold">.games</span>
            </div>

            {/* Content aligned with search bar */}
            <div className="flex-1 sm:max-w-2xl">
              {/* Results Count */}
              <div className="text-sm text-gray-600 mb-4 sm:mb-6">About 2 results (0.42 seconds)</div>

              {/* Dictionary Definition Card */}
              <div className="mb-6 sm:mb-8 border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="mb-4">
                  <h2 className="text-2xl sm:text-3xl text-gray-900 font-normal mb-1">games</h2>
                  <div className="text-gray-500 text-sm mb-2">/ɡeɪmz/ • noun, plural</div>
                </div>

                <ol className="space-y-4">
                  <li className="ml-4 sm:ml-6">
                    <div className="flex">
                      <span className="text-gray-500 mr-2 sm:mr-3">1.</span>
                      <div>
                        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                          activities that one engages in for amusement or fun, often involving structured rules and
                          competition.
                        </p>
                        <p className="text-gray-600 italic text-sm mt-2">
                          &quot;they spent the evening playing games&quot;
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2 items-center">
                          <span className="text-sm text-gray-500">similar:</span>
                          {["entertainment", "amusement", "pastime", "recreation"].map((word) => (
                            <span
                              key={word}
                              className="px-2 sm:px-3 py-1 bg-gray-50 border border-gray-200 text-xs
                                sm:text-sm text-gray-700 rounded-full hover:bg-gray-100
                                transition-colors"
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="ml-4 sm:ml-6">
                    <div className="flex">
                      <span className="text-gray-500 mr-2 sm:mr-3">2.</span>
                      <div>
                        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                          the entire raison d&apos;être of <span className="font-medium">define.games</span>, an indie
                          game studio.
                        </p>
                        <p className="text-gray-600 italic text-sm mt-2">
                          &quot;define.games creates games—someone has to and... everyone else will&quot;
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Search Results */}
              <div className="space-y-6 sm:space-y-8">
                {/* Result 1 */}
                <article>
                  <div className="mb-1">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-1 flex-wrap">
                      <span className="text-gray-700">{ROOT_URL}</span>
                      <span className="text-gray-400">›</span>
                      <span className="text-gray-600">videogame</span>
                      <span className="text-gray-400">›</span>
                      <span className="text-gray-600">rokuroku</span>
                    </div>
                  </div>
                  <h3>
                    <span className="text-xl sm:text-2xl text-blue-700 hover:underline cursor-pointer">
                      Rokuroku Battlefield「六六戦場」
                    </span>
                  </h3>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    A turn-based MOBA game set amidst the confrontation between AI and Yokai, happening in an eclectic
                    world of different historical periods in Japan, the game features various play modes including one
                    derived from the classic MOBA genre.
                  </p>
                  <div className="mt-2 flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded">Videogame</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded">Turn-based</span>
                    <span className="px-2 py-1 bg-green-50 text-green-700 rounded">MOBA</span>
                  </div>
                </article>

                {/* Result 2 */}
                <article>
                  <div className="mb-1">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-1 flex-wrap">
                      <span className="text-gray-700">{ROOT_URL}</span>
                      <span className="text-gray-400">›</span>
                      <span className="text-gray-600">tabletop</span>
                      <span className="text-gray-400">›</span>
                      <span className="text-gray-600">b2b-ai-saas</span>
                    </div>
                  </div>
                  <h3>
                    <span className="text-xl sm:text-2xl text-blue-700 hover:underline cursor-pointer">
                      B2B AI SaaS
                    </span>
                  </h3>
                  <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    A dynamic and hilarious party game for 3 to 12 players. Join a startup and attempt to build a
                    successful product without going bankrupt. Each player has their own role and hidden objectives in
                    this satirical take on startup culture.
                  </p>
                  <div className="mt-2 flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap">
                    <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded">Tabletop</span>
                    <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded">Party Game</span>
                    <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded">3-12 players</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
