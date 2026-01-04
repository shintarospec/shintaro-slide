export interface SlideProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  bgGradient?: string;
  titleSize?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center';
}
