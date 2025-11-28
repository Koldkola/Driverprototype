import React from 'react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Edit, FileText, GitBranch, Check, X } from 'lucide-react';

interface InlineToolbarProps {
  onEdit: () => void;
  onExplain: () => void;
  onProvenance: () => void;
  onApply: () => void;
  onReject: () => void;
}

export function InlineToolbar({ onEdit, onExplain, onProvenance, onApply, onReject }: InlineToolbarProps) {
  return (
    <TooltipProvider>
      <div
        className="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-lg shadow-sm"
        role="toolbar"
        aria-label="Code suggestion actions"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onEdit}
              aria-label="Edit suggestion"
              className="h-8 px-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Edit className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1">Edit</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit this suggestion</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onExplain}
              aria-label="Explain suggestion"
              className="h-8 px-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1">Explain</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View detailed explanation</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onProvenance}
              aria-label="View provenance information"
              className="h-8 px-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <GitBranch className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1">Provenance</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View suggestion rationale and confidence</p>
          </TooltipContent>
        </Tooltip>

        <div className="w-px h-6 bg-gray-200 mx-1" role="separator" aria-hidden="true" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onApply}
              aria-label="Apply suggestion (Ctrl+Enter)"
              className="h-8 px-2 text-green-700 hover:text-green-800 hover:bg-green-50 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              <Check className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1">Apply</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Apply suggestion (Ctrl+Enter)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onReject}
              aria-label="Reject suggestion (Escape)"
              className="h-8 px-2 text-red-700 hover:text-red-800 hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              <span className="ml-1">Reject</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reject suggestion (Escape)</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
