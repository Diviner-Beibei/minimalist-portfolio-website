interface PicturesProps {
  img1: string;
  img2: string;
}

function Pictures({ img1, img2 }: PicturesProps) {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={img1} />
      <source media="(min-width: 768px)" srcSet={img2} />
      <img src={img1} alt="hero image" />
    </picture>
  );
}

export default Pictures;
