import BlogImageSvg from '../assets/illustration-article.svg';

export default function BlogImage() {
  return (
    <img
      src={BlogImageSvg}
      alt="Blog Image"
      style={{
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: '0.625rem',
        background: 'var(--Yellow, #F4D04E)',
        height: '12.5rem',
      }}
    />
  );
}
