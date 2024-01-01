import { Box } from '@mui/joy';
import BlogContent from './BlogIContent';
import BlogImage from './BlogImage';

export default function BlogPreviewCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.5rem',
        flexShrink: 0,
        width: '21rem',
        padding: '1.5rem',
        borderRadius: '1.25rem',
        border: '1px solid var(--Black, #111)',
        boxShadow: '0.5rem 0.5rem 0 0 #000',
        background: 'var(--Pure-White, #FFF)',
      }}
    >
      <BlogImage />
      <BlogContent />
    </Box>
  );
}
