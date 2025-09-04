import React, { useState, useEffect } from 'react';
import Skeleton from './skeleton';

type LoaderWrapperProps = {
  children: React.ReactNode;
  triggerLoading?: boolean;
};

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
  children,
  triggerLoading = false,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (triggerLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [triggerLoading]);

  return <>{loading ? <Skeleton /> : children}</>;
};

export default LoaderWrapper;
