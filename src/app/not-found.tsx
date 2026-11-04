import { colors, IconButton, Typography } from "@mui/material";
import AppBarGeral from "@/components/AppBarGeral";
import Masterhead from "@/components/Masterhead";
import NavBar from "@/components/NavBar";

export default function NotFoundPage() {
  return (
    <>
      <AppBarGeral />
      <Masterhead />
      <NavBar />
      <Typography variant="h1" align="center" sx={{ fontSize: "6rem", mt: 12 }}>
        NEWS MAGAZINE
      </Typography>
      <Typography variant="h2" align="center" sx={{ mt: 3 }}>
        Texto Ausente no Catálogo da Biblioteca
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          textAlign: "center",
          color: "text.muted",
          mt: 2,
          fontStyle: "italic",
        }}
      >
        Como no infinito labirinto da Biblioteca de Babel de Borges, a página
        que você procura não foi localizada ou foi recolhida pelo conselho
        editorial para nova revisão filológica.
      </Typography>

      <IconButton type="button" sx={{ bgcolor: colors.primary }}>
        Ir para a capa principal
      </IconButton>
    </>
  );
}
