import { useState, useEffect } from 'react';


export const ResponsiveTool = () => 
{

    const [headerH, setHeaderH] = useState(window.innerWidth <= 950 ? '60px' : '70px'); 
    const [logoW, setLogoW] = useState(window.innerWidth <= 950 ? '90px' : '100px'); 
    const [titleW, setTitleW] = useState(window.innerWidth <= 950 ? '120px' : '150px'); 
    const [cWidth, setCWidth] = useState(window.innerWidth <= 950 ? '80%' : '60em');
    const [cHeight, setCHeight] = useState(window.innerWidth <= 950 ? '90%' : '30.5em');
    
        useEffect(() => 
        {
            const handleResize = () => 
            {
                setHeaderH(window.innerWidth <= 950 ? '60px' : '70px');
                setLogoW(window.innerWidth <= 950 ? '90px' : '100px');
                setTitleW(window.innerWidth <= 950 ? '120px' : '150px');
                setCWidth(window.innerWidth <= 950 ? '80%' : '60em');
                setCHeight(window.innerWidth <= 950 ? '90%' : '30.5em');
                
            };
                window.addEventListener('resize', handleResize);
        return () => 
            {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        const transitionStyles = {
            transition: 'all 0.8s ease',
        };

        return { headerH, logoW, titleW, cWidth, cHeight, transitionStyles };
}

