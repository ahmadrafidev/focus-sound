'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-zinc-800 dark:bg-zinc-100 text-white dark:text-black px-3 py-2 rounded-lg border border-zinc-600 dark:border-zinc-300 flex-shrink-0 hover:outline-none hover:ring-2 hover:ring-zinc-800 dark:hover:ring-zinc-200 transition-colors"
    >
      {theme === 'dark' ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
    </button>
  );
};

DarkModeToggle.displayName="DarkModeToggle"
export default DarkModeToggle;