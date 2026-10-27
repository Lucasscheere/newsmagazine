import { Box, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "outlineColumn",
        bgcolor: "background.footer",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "xl",
          mx: "auto",
          width: "100%",
          color: "text.muted",
        }}
      >
        <Typography
          variant="overline"
          color="text.muted"
          sx={{
            m: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          © 2025 Gazeta Tech Comunicação Independente Ltda. Todos os direitos
          reservados.
        </Typography>

        <Stack direction="row" spacing={3} sx={{ mr: 2 }}>
          <Link
            href="#"
            variant="overline"
            underline="none"
            color="text.muted"
            sx={{
              transition: "color 150ms",
              "&:hover": { color: "text.primary" },
            }}
          >
            Política de privacidade
          </Link>

          <Link
            href="#"
            variant="overline"
            underline="none"
            color="text.muted"
            sx={{
              transition: "color 150ms",
              "&:hover": { color: "text.primary" },
            }}
          >
            Termos de uso
          </Link>

          <Link
            href="#"
            variant="overline"
            underline="none"
            color="text.muted"
            sx={{
              transition: "color 150ms",
              "&:hover": { color: "text.primary" },
            }}
          >
            Código de ética
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
