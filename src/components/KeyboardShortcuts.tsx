import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  if (!isOpen) return null;

  const shortcuts = [
    {
      category: "Suggestion Actions",
      items: [
        { keys: ["Ctrl", "Enter"], action: "Accept suggestion", description: "Apply the current code suggestion" },
        { keys: ["Cmd", "Enter"], action: "Accept suggestion (Mac)", description: "Apply the current code suggestion on macOS" },
        { keys: ["Escape"], action: "Reject suggestion", description: "Dismiss the current suggestion" },
        { keys: ["Tab"], action: "Edit inline", description: "Edit the suggestion before applying" },
      ]
    },
    {
      category: "Navigation",
      items: [
        { keys: ["Ctrl", "]"], action: "Next suggestion", description: "Move to the next available suggestion" },
        { keys: ["Ctrl", "["], action: "Previous suggestion", description: "Move to the previous suggestion" },
        { keys: ["Alt", "E"], action: "Show explanation", description: "Open detailed explanation panel" },
        { keys: ["Alt", "P"], action: "Show provenance", description: "Open provenance information" },
      ]
    },
    {
      category: "Accessibility",
      items: [
        { keys: ["Alt", "Shift", "T"], action: "Toggle plain text", description: "Switch to screen reader friendly mode" },
        { keys: ["?"], action: "Show keyboard shortcuts", description: "Display this help dialog" },
      ]
    }
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-labelledby="shortcuts-title"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card className="w-full max-w-3xl max-h-[80vh] overflow-auto bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle id="shortcuts-title">Keyboard Shortcuts</CardTitle>
              <CardDescription>Quick reference for all available keyboard commands</CardDescription>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
              aria-label="Close keyboard shortcuts dialog"
            >
              ✕
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {shortcuts.map((category, categoryIdx) => (
            <section key={categoryIdx}>
              <h3 className="mb-3">{category.category}</h3>
              <div className="space-y-2">
                {category.items.map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-4 p-2 rounded hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <div className="text-gray-900">{shortcut.action}</div>
                      <div className="text-gray-600">{shortcut.description}</div>
                    </div>
                    <div className="flex items-center gap-1" aria-label={`Keyboard shortcut: ${shortcut.keys.join(' plus ')}`}>
                      {shortcut.keys.map((key, keyIdx) => (
                        <React.Fragment key={keyIdx}>
                          <Badge
                            variant="outline"
                            className="bg-white border-gray-300 text-gray-900 px-2 py-1"
                          >
                            {key}
                          </Badge>
                          {keyIdx < shortcut.keys.length - 1 && (
                            <span className="text-gray-400" aria-hidden="true">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
