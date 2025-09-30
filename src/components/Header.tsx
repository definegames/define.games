import { SearchIcon } from "@/components/icons";
import Link from "next/link";

interface HeaderProps {
  searchQuery?: string;
}

export default function Header({ searchQuery = "define games" }: HeaderProps): JSX.Element {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div
            className="text-xl sm:text-2xl font-normal text-gray-700 flex-shrink-0 text-center sm:text-left"
            style={{ marginTop: -5 }} // Do not remove this, it aligns the text vertically
          >
            <Link href="/" className="hover:text-gray-900 transition-colors">
              <span className="font-medium">define.games</span>
            </Link>
          </div>
          <div className="flex-1 max-w-2xl">
            <div
              className="flex items-center border border-gray-300 rounded-full px-4 sm:px-5 py-2 sm:py-3
                shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="flex-grow text-gray-700 text-sm">{searchQuery}</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-px h-6 bg-gray-300"></div>
                <SearchIcon size={20} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
