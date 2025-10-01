"use client";

import { SearchIcon } from "@/components/icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  searchQuery?: string;
}

export default function Header({ searchQuery = "define games" }: HeaderProps): JSX.Element {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetText = searchQuery;

  const animateCorrection = (currentText: string, targetText: string): void => {
    setIsAnimating(true);

    let currentIndex = 0;
    let workingText = currentText;

    // Find the common prefix
    let commonLength = 0;
    while (
      commonLength < currentText.length &&
      commonLength < targetText.length &&
      currentText[commonLength] === targetText[commonLength]
    ) {
      commonLength++;
    }

    // Delete characters that don't match (one by one)
    const deleteChars = (): void => {
      if (workingText.length > commonLength) {
        workingText = workingText.slice(0, -1);
        setInputValue(workingText);
        animationTimeoutRef.current = setTimeout(deleteChars, 50);
      } else {
        // Start typing the correct characters
        currentIndex = commonLength;
        typeChars();
      }
    };

    // Type the correct characters (one by one)
    const typeChars = (): void => {
      if (currentIndex < targetText.length) {
        workingText += targetText[currentIndex];
        setInputValue(workingText);
        currentIndex++;
        animationTimeoutRef.current = setTimeout(typeChars, 80);
      } else {
        setIsAnimating(false);
      }
    };

    // Start the deletion process
    if (workingText.length > commonLength) {
      deleteChars();
    } else {
      // No need to delete, just start typing
      currentIndex = commonLength;
      typeChars();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Clear existing timeouts and stop any ongoing animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    // If animation was running, stop it
    if (isAnimating) {
      setIsAnimating(false);
    }

    // If the user has typed something different from the target
    if (newValue !== targetText) {
      // Wait 1 second before starting the correction animation
      timeoutRef.current = setTimeout(() => {
        animateCorrection(newValue, targetText);
      }, 1000);
    }
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

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
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                spellCheck="false"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                className="flex-grow text-gray-700 text-sm bg-transparent outline-none"
              />
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
