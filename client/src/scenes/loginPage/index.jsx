import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';

import Form from "./Form";


const LoginPage = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box backgroundColor="Black" minHeight="100vh" width="100vw">
      <div className="form-header">
      <Typography fontWeight="bold" fontSize="32px" color="primary"
      backgroundColor={theme.palette.background.alt}
      paddingBottom="10px"
      paddingTop="10px"
      >
         SparkUp <EmojiObjectsTwoToneIcon sx={{ fontSize: "clamp(1rem,2rem,2.25rem)" }} />
        </Typography>
      </div>

      <Box
        width={isNonMobileScreens ? "50%" : "50%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        alignItems="center"
        display = "flex"
        justifyContent="center"
        flexDirection="column"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}
        color="white"
        >
          Welcome to SparkUp, the platform to give a flight to your dream startup!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;