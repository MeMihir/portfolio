import { useEffect, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";

const ScrollSpy = ({ items, offset = 0, children }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
		const scrollY = window.scrollY;
	
		const sectionOffsets = items.reduce((offsets, section) => {
			const element = document.getElementById(section);
			if (element) {
				const offsetTop = element.offsetTop - offset;
				const offsetBottom = offsetTop + element.clientHeight;
	
				offsets[section] = { offsetTop, offsetBottom };
			}
			return offsets;
		}, {});
	
		const newActiveSection = Object.keys(sectionOffsets).find(
			(section) =>
				scrollY >= sectionOffsets[section].offsetTop &&
				scrollY < sectionOffsets[section].offsetBottom
		);
	
		if (newActiveSection !== activeSection) {
			setActiveSection(newActiveSection);
		}
	};	

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box bg="#040D12">
      <VStack
        align="start"
        spacing={4}
        position="fixed"
        left={0}
        color="white"
        p={5}
				pt={"10%"}
        width="20%"
				h={'100vh'}
				opacity={activeSection === 'hero' ? 0:1}
				transitionDuration={'0.5s'}
      >
        {items.map((section) => (
          <Box
            key={section}
            px={4}
            py={2}
            borderBottom={activeSection === section ? '2px solid #ffffff' : 'none'}
            color={activeSection === section ? '#ffffff' : 'gray.400'}
            cursor="pointer"
            onClick={() => scrollToSection(section)}
          >
            {section}
          </Box>
        ))}
      </VStack>
      <Box p={4} color={'white'} width="80%" ml={"20%"}>
        {children}
      </Box>
    </Box>
  );
};

export default ScrollSpy;