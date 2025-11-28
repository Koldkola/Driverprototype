import React from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Badge } from './ui/badge';

interface RefactorWarningProps {
  impact: 'Low' | 'Medium' | 'High';
  affectedFiles: string[];
  message?: string;
}

export function RefactorWarning({ impact, affectedFiles, message }: RefactorWarningProps) {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'border-red-200 bg-red-50';
      case 'Medium':
        return 'border-yellow-200 bg-yellow-50';
      case 'Low':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getImpactBadgeColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <Alert 
      className={getImpactColor(impact)}
      role="alert"
      aria-live="polite"
    >
      <AlertTriangle className="h-4 w-4" aria-hidden="true" />
      <AlertTitle className="flex items-center gap-2">
        Estimated Test Impact
        <Badge className={getImpactBadgeColor(impact)}>{impact}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-2 space-y-2">
        <p>
          {message || `Changes files: ${affectedFiles.join(', ')}`}
        </p>
        <p className="text-gray-700">
          Please run tests after applying this suggestion.
        </p>
      </AlertDescription>
    </Alert>
  );
}
