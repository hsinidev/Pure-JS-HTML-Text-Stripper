import React from 'react';

export const ContactContent: React.FC = () => (
  <div className="space-y-4 text-gray-300">
    <p>For inquiries, feedback, or support, please reach out to us:</p>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline">hsini.web@gmail.com</a></li>
      <li><strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">doodax.com</a></li>
    </ul>
  </div>
);
