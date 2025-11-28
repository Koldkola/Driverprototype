import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ProvenanceCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProvenanceCard({ isOpen, onClose }: ProvenanceCardProps) {
  if (!isOpen) return null;

  const provenanceData = {
    rationale: "Rewritten using PDO parameterized queries; matched motif: 'prepare + execute'.",
    confidence: 0.89,
    sources: [
      "OWASP SQL Injection Prevention Cheat Sheet",
      "PHP PDO Documentation",
      "Security Best Practices Database"
    ],
    method: "Pattern matching with security analysis",
    dateGenerated: "October 28, 2025"
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'bg-green-100 text-green-800 border-green-300';
    if (confidence >= 0.6) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    return 'bg-red-100 text-red-800 border-red-300';
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-labelledby="provenance-title"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card className="w-full max-w-2xl bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <CardTitle id="provenance-title">Suggestion Provenance</CardTitle>
              <CardDescription>Understanding how this suggestion was generated</CardDescription>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
              aria-label="Close provenance information"
            >
              ✕
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <section>
            <h3 className="mb-2">Rationale</h3>
            <p className="text-gray-700">{provenanceData.rationale}</p>
          </section>

          <section>
            <h3 className="mb-2">Confidence Score</h3>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-green-600 h-full transition-all"
                  style={{ width: `${provenanceData.confidence * 100}%` }}
                  role="progressbar"
                  aria-valuenow={provenanceData.confidence * 100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Confidence score"
                />
              </div>
              <Badge className={getConfidenceColor(provenanceData.confidence)}>
                {(provenanceData.confidence * 100).toFixed(0)}%
              </Badge>
            </div>
            <p className="text-gray-600 mt-2">
              High confidence ({provenanceData.confidence.toFixed(2)}) - This suggestion is based on well-established security patterns.
            </p>
          </section>

          <section>
            <h3 className="mb-2">Method</h3>
            <p className="text-gray-700">{provenanceData.method}</p>
          </section>

          <section>
            <h3 className="mb-2">Sources</h3>
            <ul className="space-y-2">
              {provenanceData.sources.map((source, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600" aria-hidden="true">•</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pt-4 border-t border-gray-200">
            <p className="text-gray-500">Generated on {provenanceData.dateGenerated}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
