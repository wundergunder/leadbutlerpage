import React from 'react';
import { MessageSquare } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg">
      <MessageSquare className="w-6 h-6" />
    </div>
  );
};

export default Logo;