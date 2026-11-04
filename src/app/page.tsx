import { Box } from "@mui/material";
import AppBarGeral from "@/components/AppBarGeral";
import Footer from "@/components/Footer";
import Masterhead from "@/components/Masterhead";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
      }}
    >
      <AppBarGeral />
      <Box component="main" sx={{ flex: 1 }}>
        <Masterhead />
        <NavBar></NavBar>
      </Box>
      <Footer />
    </Box>
  );
}
