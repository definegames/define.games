import Header from "@/components/Header";

const ROOT_URL = "https://define.games";

export default function B2BAISaaSPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery="B2B AI SaaS" />

      {/* Main Content */}
      <main className="py-4 sm:py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Page Title */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm mb-2 flex-wrap text-gray-600">
              <span className="text-gray-700">{ROOT_URL}</span>
              <span className="text-gray-400">›</span>
              <span>tabletop</span>
              <span className="text-gray-400">›</span>
              <span>b2b-ai-saas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl text-gray-900 font-normal mb-2">B2B AI SaaS</h1>
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm flex-wrap mb-4">
              <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded">Tabletop</span>
              <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded">Party Game</span>
              <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded">3-12 players</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A dynamic and hilarious party game for 3 to 12 players. Join a startup and attempt to build a successful
              product without going bankrupt. Each player has their own role and hidden objectives in this satirical
              take on startup culture.
            </p>
          </div>

          {/* Project Description */}
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl sm:text-3xl text-gray-900 font-normal mb-6">About the Game</h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                B2B AI SaaS is a satirical party game that captures the absurdity and chaos of modern startup culture.
                Players navigate the treacherous waters of building a tech company, complete with buzzword-heavy
                meetings, pivot decisions, and the constant threat of running out of runway.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">How to Play</h3>
              <p>
                Each player takes on a specific role within the startup - from the visionary CEO to the overworked
                developer, the smooth-talking sales lead to the budget-conscious CFO. Every role comes with unique
                abilities, secret objectives, and conflicting interests that create natural tension and hilarious
                situations.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Game Mechanics</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Resource Management:</strong> Balance funding, time, and team morale while building your
                  product
                </li>
                <li>
                  <strong>Market Pivots:</strong> Adapt your strategy as market conditions and customer needs change
                </li>
                <li>
                  <strong>Hidden Objectives:</strong> Complete personal goals that may conflict with company success
                </li>
                <li>
                  <strong>Buzzword Bingo:</strong> Gain advantages by successfully incorporating startup jargon
                </li>
                <li>
                  <strong>Crisis Events:</strong> Navigate unexpected challenges like competitor launches or funding
                  freezes
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Player Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The CEO</h4>
                  <p className="text-sm">
                    Makes final decisions and sets company direction. Wins by achieving unicorn status, but must keep
                    all stakeholders happy.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The Developer</h4>
                  <p className="text-sm">
                    Builds the actual product while fighting against unrealistic deadlines and constantly changing
                    requirements.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The Sales Lead</h4>
                  <p className="text-sm">
                    Promises features that don&apos;t exist yet and tries to close deals to keep the company afloat.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The CFO</h4>
                  <p className="text-sm">
                    Manages the burn rate and tries to prevent the company from spending money on unnecessary
                    &quot;innovations.&quot;
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The Investor</h4>
                  <p className="text-sm">
                    Provides funding but expects exponential growth and may have conflicting interests with the team.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">The Marketing Manager</h4>
                  <p className="text-sm">
                    Creates hype around the product while trying to translate technical features into customer benefits.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Victory Conditions</h3>
              <p>The game can end in multiple ways, and different players may have different victory conditions:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Company Success:</strong> The startup reaches profitability or gets acquired
                </li>
                <li>
                  <strong>Personal Success:</strong> Individual players complete their secret objectives
                </li>
                <li>
                  <strong>Spectacular Failure:</strong> Sometimes everyone &quot;wins&quot; by creating the most
                  entertaining crash and burn
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Game Components</h3>
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>120+ Event cards featuring real startup scenarios (slightly exaggerated)</li>
                  <li>12 Role cards with unique abilities and secret objectives</li>
                  <li>Resource tokens (Funding, Time, Morale, Technical Debt)</li>
                  <li>Product development board with milestone tracks</li>
                  <li>Market condition dice and customer feedback cards</li>
                  <li>Buzzword reference guide (for authentic startup communication)</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Development Status</h3>
              <p>
                Currently in playtesting phase with various startup communities and board game groups. The game
                mechanics have been refined through extensive testing, and we&apos;re now focusing on balancing the
                humor with engaging gameplay. The goal is to create a game that&apos;s both funny for those familiar
                with startup culture and accessible to those who aren&apos;t.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-blue-900 mb-2">Coming Soon</h4>
                <p className="text-blue-800">
                  Expected release date: Q2 2026. The game will be available as both a physical tabletop version and a
                  digital adaptation for online play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
