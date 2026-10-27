import { Box, colors, Typography } from "@mui/material"

export default function Masterhead(){
    return (
    <Box sx={{m:'40px',}}>
    <Typography variant="h1" sx={{textAlign:'center'}}>NEWS MAGAZINE</Typography>
    <Typography variant="caption" sx={{textAlign: 'center', color: 'text.muted', display: 'block', mt: 1, fontStyle: 'italic'}}>JORNAL INDEPENDENTE DE FILOSOFIA E LITERATURA</Typography>
    </Box>)
}