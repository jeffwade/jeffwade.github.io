import { useEffect } from 'react';

const useEvent = (object, event, callback) => {
  useEffect(() => {
    object.addEventListener(event, callback);
    return () => object.removeEventListener(event, callback);
  }, []);
};

export default useEvent;

