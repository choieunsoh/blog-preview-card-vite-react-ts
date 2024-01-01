import { useTheme } from '@mui/joy';
import BlogImageSvg from '../assets/illustration-article.svg';

export default function BlogImage() {
  const theme = useTheme();

  return (
    <img
      src={BlogImageSvg}
      alt="Blog Image"
      style={{
        objectFit: 'cover',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: '0.625rem',
        background: `${theme.palette.primary[500]}`,
        height: '12.5rem',
      }}
    />
  );
}
