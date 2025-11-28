import React from 'react';

interface CodeEditorProps {
  code: string;
  language?: string;
}

export function CodeEditor({ code, language = 'php' }: CodeEditorProps) {
  const lines = code.split('\n');

  return (
    <div
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto"
      role="region"
      aria-label={`Code editor for ${language}`}
    >
      <pre className="text-sm">
        <code>
          {lines.map((line, idx) => (
            <div key={idx} className="flex">
              <span className="text-gray-500 select-none mr-4 text-right" style={{ minWidth: '2rem' }}>
                {idx + 1}
              </span>
              <span>{line || ' '}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
