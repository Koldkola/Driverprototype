import React from 'react';

interface GhostPreviewProps {
  suggestion: string;
  source: string;
  onAccept?: () => void;
}

export function GhostPreview({ suggestion, source, onAccept }: GhostPreviewProps) {
  return (
    <div
      className="relative border-l-2 border-blue-500 bg-blue-50/50 pl-4 py-2 my-2"
      role="region"
      aria-label="Code suggestion preview"
    >
      <div className="flex items-start gap-2">
        <span className="text-blue-600" aria-hidden="true">↳</span>
        <div className="flex-1">
          <span className="text-gray-700">{suggestion}</span>
          <span className="text-gray-500 ml-2">({source})</span>
        </div>
      </div>
      <button
        onClick={onAccept}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-10 focus:px-3 focus:py-1 focus:bg-blue-600 focus:text-white focus:rounded"
        aria-label="Accept suggestion with keyboard shortcut Ctrl+Enter"
      >
        Accept (Ctrl+Enter)
      </button>
    </div>
  );
}
