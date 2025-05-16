import React, { useEffect } from 'react';

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '68276685b9e1829b1913d588');
    script.async = true;
    
    // Append script to body
    document.body.appendChild(script);
    
    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return null;
};

export default ChatWidget;