import { useEffect, useState } from 'react';

type useOnScreenProps = {
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit
};

const useOnScreen = ({ ref, options }: useOnScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useOnScreen;