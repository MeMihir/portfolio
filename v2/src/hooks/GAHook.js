import { useEffect, useRef } from 'react';
import { GAEvent } from '../utils';



export const useGATracking = (sectionName) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentSectionRef = sectionRef.current;
    
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        GAEvent('section_view', {
                            event_category: 'section',
                            section: sectionName,
                        });
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );
    
        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }
    
        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, [sectionName]);

    return sectionRef;
};