import { Box, Typography } from '@mui/joy';
import { useMedia } from 'react-use';

export default function BlogContent() {
  const isMobile = useMedia('(max-width: 375px)');
  const fontSize = isMobile
    ? { subtitle: '12px', title: '20px', content: '14px' }
    : { subtitle: '14px', title: '24px', content: '16px' };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: '0.75rem',
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          backgroundColor: `${theme.palette.primary[500]}`,
        })}
      >
        <Typography
          sx={{
            fontSize: fontSize.subtitle,
            fontWeight: 800,
            lineHeight: '150%',
          }}
        >
          Learning
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: fontSize.subtitle,
          lineHeight: '150%',
        }}
      >
        Published 21 Dec 2023
      </Typography>

      <Typography
        sx={(theme) => ({
          alignSelf: 'stretch',
          fontSize: fontSize.title,
          fontWeight: 800,
          lineHeight: '150%',
          '&:hover, &:focus, &:active': {
            cursor: 'pointer',
            color: `${theme.palette.primary[500]}`,
          },
        })}
      >
        HTML & CSS foundations
      </Typography>

      <Typography
        sx={{
          alignSelf: 'stretch',
          fontSize: fontSize.content,
          color: 'var(--Black, #7F7F7F)',
          lineHeight: '150%',
        }}
      >
        These languages are the backbone of every website, defining structure, content, and presentation.
      </Typography>
    </Box>
  );
}
