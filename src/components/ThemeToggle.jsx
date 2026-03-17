import React from 'react';

export const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
    </button>
  );
};