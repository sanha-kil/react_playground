import React, { useEffect, useState } from 'react';

function SkeletonEx(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); // 2초 후 로딩완료

  return <div>SkeletonEx</div>;
}

export default SkeletonEx;
