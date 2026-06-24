import React from 'react';

/**
 * Author credit surfaced at the bottom of long docs pages.
 * Honest, single source of truth for the maintainer's identity.
 */
export default function AuthorCard(): React.ReactElement {
  return (
    <div className="sngdc-author-card" role="note">
      Built and maintained by{' '}
      <strong>
        <a href="https://aoneahsan.com" target="_blank" rel="noopener noreferrer">
          Ahsan Mahmood
        </a>
      </strong>{' '}
      — software engineer. Reach out via{' '}
      <a href="mailto:aoneahsan@gmail.com">aoneahsan@gmail.com</a>,{' '}
      <a href="https://linkedin.com/in/aoneahsan" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      , or{' '}
      <a href="https://github.com/aoneahsan" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      . Live app:{' '}
      <a href="https://sndgc.aoneahsan.com" target="_blank" rel="noopener noreferrer">
        sndgc.aoneahsan.com
      </a>
      .
    </div>
  );
}
