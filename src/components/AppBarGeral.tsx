import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";

type AppBarGeralProps = {
  edition?: string;
  issue?: string;
  city?: string;
};

function Bullet({ hideOnMobile = false }: { hideOnMobile?: boolean }) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: "outlineColumn",
        display: hideOnMobile ? { xs: "none", sm: "inline" } : "inline",
      }}
    >
      •
    </Typography>
  );
}

export default function AppBarGeral({
  edition = "Edição Nacional",
  issue = "Ano VII, Nº 2.418",
  city = "São Paulo, SP",
}: AppBarGeralProps) {
  return (
    <AppBar position="static">
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: "0.25rem" }}>
        <Container
          maxWidth="xl"
          disableGutters
          sx={{ px: { xs: "1rem", md: "2.5rem" } }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              color: "text.muted",
            }}
          >
            <Stack
              direction="row"
              sx={{ alignItems: "center", gap: "0.25rem" }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {edition}
              </Typography>
              <Bullet />
              <Typography variant="overline">{issue}</Typography>
            </Stack>

            <Stack direction="row" sx={{ alignItems: "center", gap: "1.5rem" }}>
              <Typography
                variant="overline"
                sx={{ display: { xs: "none", sm: "inline" } }}
              >
                {city}
              </Typography>
              <Bullet hideOnMobile />
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                }}
              >
                <PersonIcon sx={{ fontSize: 18 }} />
              </Avatar>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </AppBar>
  );
}
