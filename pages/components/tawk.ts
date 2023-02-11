import React, { useEffect } from 'react';

const TawkToChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/5880d66dbcf30e71ac11daaa/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.getElementsByTagName("script")[0].parentNode.insertBefore(script, document.getElementsByTagName("script")[0]);
  }, []);

  return null;
};

export default TawkToChat;