import { useEffect, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { COLOR_SCHEME } from "../utils";

const ScrollSpy = ({ items, offset = 0, children }) => {
  const [activeSection, setActiveSection] = useState(items[0]);

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
    <Box id="main-content" >
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
				opacity={activeSection === items[0] ? 0:1}
				transitionDuration={'0.5s'}
        background="transparent"
      >
        {items.map((section) => (
          <Box
            key={section}
            px={4}
            py={2}
            borderBottom={activeSection === section ? "2px solid" : 'none'}
            borderBottomColor={activeSection === section ? `${COLOR_SCHEME}.400` : 'none'}
            color={activeSection === section ? `${COLOR_SCHEME}.400` : 'gray.400'}
            _hover={{ color: `${COLOR_SCHEME}.400` }}
            cursor="pointer"
            onClick={() => scrollToSection(section)}
          >
            {section}
          </Box>
        ))}
      </VStack>
      <Box p={4} color={'white'} width="85%" ml={"15%"} id="main-content" >
        {children}
      </Box>
    </Box>
  );
};

export default ScrollSpy;
