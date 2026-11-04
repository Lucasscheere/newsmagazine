import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  TextField,
} from "@mui/material";

const links = [
  { label: "Capa", href: "/" },
  { label: "Literatura", href: "/literatura" },
  { label: "Filosofia", href: "/filosofia" },
  { label: "Opinião", href: "/opiniao" },
  { label: "Minijogos", href: "/minijogos" },
  { label: "Sobre / Contato", href: "/sobre" },
];

export default function NavBar() {
  return (
    <Box
      component="nav"
      sx={{
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
        bgcolor: "transparent",
        display: { xs: "none", sm: "none", lg: "block" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 44,
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              variant="overline"
              underline="hover"
              color="text.secondary"
              sx={{ whiteSpace: "nowrap" }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <TextField
            placeholder="Pesquisar..."
            size="small"
            variant="outlined"
            sx={{
              width: 200,
              "& .MuiOutlinedInput-root": {
                borderRadius: 1,
                fontSize: "14px",
              },
            }}
          />

          <IconButton aria-label="Pesquisar" type="button">
            <SearchIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
