import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";

const ROOT_URL = "https://define.games";

export default function RokurokuPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery="Rokuroku" />

      {/* Main Content */}
      <main className="py-4 sm:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-2 flex-wrap text-gray-600">
              <span className="text-gray-700">{ROOT_URL}</span>
              <span className="text-gray-400">›</span>
              <span>videogame</span>
              <span className="text-gray-400">›</span>
              <span>rokuroku</span>
            </div>
            <h1 className="text-3xl sm:text-4xl text-gray-900 font-normal mb-2">Rokuroku 「六六戦場」</h1>
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap mb-4">
              <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded">Videogame</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded">Turn-based</span>
              <span className="px-2 py-1 bg-green-50 text-green-700 rounded">MOBA</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A turn-based MOBA game set amidst the confrontation between AI and Yokai, happening in an eclectic world
              of different historical periods in Japan, the game features various play modes including one derived from
              the classic MOBA genre.
            </p>
          </div>

          {/* Images Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl text-gray-900 font-normal mb-6">Visual Gallery</h2>

            {/* References Section */}
            <section className="mb-8">
              <h3 className="text-xl sm:text-2xl text-gray-800 font-medium mb-4">References</h3>
              <ImageGallery
                images={[
                  "/images/rokuroku/01-references/ref-001.jpg",
                  "/images/rokuroku/01-references/ref-002.jpg",
                  "/images/rokuroku/01-references/ref-003.jpg",
                  "/images/rokuroku/01-references/ref-004.jpg",
                  "/images/rokuroku/01-references/ref-005.jpg",
                  "/images/rokuroku/01-references/ref-006.jpg",
                ]}
                gridCols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                aspectRatio="square"
                imageSize={{ width: 300, height: 300 }}
                gap="gap-4"
              />
            </section>

            {/* Concept Art Section */}
            <section className="mb-8">
              <h3 className="text-xl sm:text-2xl text-gray-800 font-medium mb-4">Concept Art</h3>
              <ImageGallery
                images={[
                  "/images/rokuroku/02-concept-art/concept-art-001.jpg",
                  "/images/rokuroku/02-concept-art/concept-art-002.jpg",
                  "/images/rokuroku/02-concept-art/concept-art-003.jpg",
                  "/images/rokuroku/02-concept-art/concept-art-004.jpg",
                ]}
                gridCols="grid-cols-1 sm:grid-cols-2"
                aspectRatio="square"
                imageSize={{ width: 600, height: 600 }}
                gap="gap-6"
              />
            </section>

            {/* Screenshots Section */}
            <section className="mb-8">
              <h3 className="text-xl sm:text-2xl text-gray-800 font-medium mb-4">Screenshots</h3>
              <ImageGallery
                images={[
                  "/images/rokuroku/03-screenshots/screenshot-001.png",
                  "/images/rokuroku/03-screenshots/screenshot-002.png",
                ]}
                gridCols="grid-cols-1 sm:grid-cols-2"
                aspectRatio="square"
                imageSize={{ width: 600, height: 600 }}
                gap="gap-6"
              />
            </section>
          </div>

          {/* Project Description */}
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl sm:text-3xl text-gray-900 font-normal mb-6">About the Project</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                Rokuroku is an ambitious turn-based MOBA that bridges the gap between traditional strategy games and
                modern competitive gaming. Set in a unique universe where artificial intelligence clashes with ancient
                Japanese supernatural forces, the game offers players a rich tactical experience across multiple
                historical periods.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Core Gameplay</h3>
              <p>
                Players command teams of either AI units or Yokai entities in strategic turn-based combat. Each faction
                brings unique abilities, strengths, and tactical approaches to the battlefield. The turn-based nature
                allows for deep strategic planning while maintaining the competitive spirit of traditional MOBA games.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Setting & Atmosphere</h3>
              <p>
                The game takes place across various historical periods of Japan, from ancient feudal times to
                speculative futures. Each battlefield reflects different eras, creating a visual and thematic journey
                through time. The contrast between high-tech AI forces and mystical Yokai creates a unique aesthetic
                that blends cyberpunk elements with traditional Japanese folklore.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Game Modes</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Classic MOBA:</strong> Traditional 5v5 matches with lanes, towers, and a central objective
                </li>
                <li>
                  <strong>Skirmish:</strong> Smaller 3v3 battles focused on pure tactical combat
                </li>
                <li>
                  <strong>Campaign:</strong> Single-player story mode exploring the conflict between AI and Yokai
                </li>
                <li>
                  <strong>Arena:</strong> 1v1 duels for competitive ranking
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Development Status</h3>
              <p>
                Currently in pre-production, focusing on core gameplay mechanics, art direction, and world building. The
                development team is committed to creating a game that respects both the strategic depth of classic
                strategy games and the competitive balance required for modern esports.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
