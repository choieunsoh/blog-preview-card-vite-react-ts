import { Box } from '@mui/joy';
import { useMedia } from 'react-use';
import BlogAuthor from './BlogAuthor';
import BlogContent from './BlogIContent';
import BlogImage from './BlogImage';

export default function BlogPreviewCard() {
  const isMobile = useMedia('(max-width: 375px)');
  const width = isMobile ? '279px' : '21rem';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.5rem',
        flexShrink: 0,
        width: width,
        padding: '1.5rem',
        borderRadius: '1.25rem',
        border: '1px solid var(--Black, #111)',
        boxShadow: '0.5rem 0.5rem 0 0 #000',
        background: 'var(--Pure-White, #FFF)',
      }}
    >
      <BlogImage />
      <BlogContent />
      <BlogAuthor />
    </Box>
  );
}
