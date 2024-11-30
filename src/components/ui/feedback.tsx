'use client';

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type FeedbackOption = {
  id: number;
  emoji: string;
  label: string;
};

const feedbackOptions: FeedbackOption[] = [
  { id: 1, emoji: '🤩', label: 'Very helpful' },
  { id: 2, emoji: '🙂', label: 'Helpful' },
  { id: 3, emoji: '🙁', label: 'Not helpful' },
  { id: 4, emoji: '😭', label: 'Very unhelpful' },
];

const Feedback: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  const handleSelect = (id: number) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };

  const handleSubmit = () => {
    setSelected(null);
    setFeedback('');
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-neutral-500 dark:text-neutral-400">
        {/* Feedback Selection */}
        <div className="flex items-center gap-4">
          <span className="text-sm flex items-center">Was this helpful?</span>
          {feedbackOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: '20px',
                opacity: selected === option.id ? 1 : 0.6,
                transition: 'opacity 0.2s',
              }}
              aria-label={option.label}
            >
              {option.emoji}
            </button>
          ))}
        </div>

        {selected && (
          <div
            className={`transition-all duration-300 overflow-hidden ${selected ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          >
            {/* Extended Feedback Form */}
            {selected && (
              <div className="flex flex-col gap-2 py-2">
                <Textarea
                  placeholder="Type your feedback here."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />

                <div className="border-t w-full border-neutral-200 dark:border-neutral-800 my-2"></div>

                <Button
                  className="font-semibold hover:bg-orange-500 hover:text-white transition"
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
