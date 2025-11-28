import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

interface ExplanationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExplanationPanel({ isOpen, onClose }: ExplanationPanelProps) {
  const [plainTextMode, setPlainTextMode] = useState(false);

  if (!isOpen) return null;

  const quickExplanation = {
    summary: "This suggestion uses a PDO prepared statement to prevent SQL injection.",
    steps: [
      "1) bind parameters",
      "2) check return",
      "3) set HttpOnly and SameSite for session cookies"
    ]
  };

  const detailedExplanation = {
    problem: "The original code concatenates user input directly into SQL queries, creating a SQL injection vulnerability.",
    solution: "PDO prepared statements separate SQL logic from data, preventing malicious SQL from being executed.",
    benefits: [
      "Automatic input sanitization",
      "Protection against SQL injection attacks",
      "Improved code maintainability",
      "Better error handling"
    ]
  };

  if (plainTextMode) {
    return (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        role="dialog"
        aria-labelledby="explanation-title"
        aria-modal="true"
      >
        <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle id="explanation-title">Code Suggestion Explanation</CardTitle>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
                aria-label="Close explanation panel"
              >
                ✕
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Switch
                id="plain-text-mode"
                checked={plainTextMode}
                onCheckedChange={setPlainTextMode}
                aria-label="Toggle plain text mode for screen readers"
              />
              <Label htmlFor="plain-text-mode">Plain text mode (screen reader friendly)</Label>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <section>
              <h2 className="mb-2">Summary</h2>
              <p>{quickExplanation.summary}</p>
            </section>

            <section>
              <h2 className="mb-2">Steps</h2>
              <ul className="list-none space-y-1">
                {quickExplanation.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-2">Problem</h2>
              <p>{detailedExplanation.problem}</p>
            </section>

            <section>
              <h2 className="mb-2">Solution</h2>
              <p>{detailedExplanation.solution}</p>
            </section>

            <section>
              <h2 className="mb-2">Benefits</h2>
              <ul className="list-none space-y-1">
                {detailedExplanation.benefits.map((benefit, idx) => (
                  <li key={idx}>• {benefit}</li>
                ))}
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-labelledby="explanation-title"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle id="explanation-title">Code Suggestion Explanation</CardTitle>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
              aria-label="Close explanation panel"
            >
              ✕
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Switch
              id="plain-text-mode"
              checked={plainTextMode}
              onCheckedChange={setPlainTextMode}
              aria-label="Toggle plain text mode for screen readers"
            />
            <Label htmlFor="plain-text-mode">Plain text mode (screen reader friendly)</Label>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="quick" className="w-full">
            <TabsList className="grid w-full grid-cols-2" aria-label="Explanation detail level">
              <TabsTrigger value="quick">Quick</TabsTrigger>
              <TabsTrigger value="detailed">Detailed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quick" className="space-y-4 mt-4">
              <div>
                <h3 className="mb-2">Quick Summary</h3>
                <p className="text-gray-700">{quickExplanation.summary}</p>
              </div>
              <div>
                <h3 className="mb-2">Steps</h3>
                <ol className="space-y-2 text-gray-700">
                  {quickExplanation.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block min-w-[2rem]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </TabsContent>

            <TabsContent value="detailed" className="space-y-4 mt-4">
              <div>
                <h3 className="mb-2">Problem</h3>
                <p className="text-gray-700">{detailedExplanation.problem}</p>
              </div>
              <div>
                <h3 className="mb-2">Solution</h3>
                <p className="text-gray-700">{detailedExplanation.solution}</p>
              </div>
              <div>
                <h3 className="mb-2">Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  {detailedExplanation.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600" aria-hidden="true">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
