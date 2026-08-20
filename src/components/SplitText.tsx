import React, { useMemo } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  id?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  splitType?: 'chars' | 'words';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  charClassName = '',
  id,
  tag = 'span',
  splitType = 'chars',
}) => {
  const words = useMemo(() => text.split(' '), [text]);

  const Component = tag;

  if (splitType === 'words') {
    return (
      <Component id={id} className={`inline-block ${className}`}>
        {words.map((word, wIdx) => (
          <span
            key={wIdx}
            className={`split-word inline-block mr-[0.3em] last:mr-0 will-change-transform ${charClassName}`}
          >
            {word}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component id={id} className={`inline-block ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split('').map((char, cIdx) => (
            <span
              key={cIdx}
              className={`split-char inline-block will-change-transform ${charClassName}`}
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
};

