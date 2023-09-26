interface ImagsProps {
  [propName: string]: {
    img1: string;
    img2: string;
  };
}

interface PicturesProps {
  pic: string;
}

const imgs: ImagsProps = {
  hero: {
    img1: "./homepage/mobile/image-homepage-hero.jpg",
    img2: "./homepage/mobile/image-homepage-hero@2x.jpg",
  },
  profile: {
    img1: "./homepage/mobile/image-homepage-profile.jpg",
    img2: "./homepage/mobile/image-homepage-profile@2x.jpg",
  },
};

function Pictures({ pic }: PicturesProps) {
  if (!(pic in imgs)) {
    return null;
  }

  // console.log(pic, imgs[pic]);

  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={imgs[pic].img1} />
      <source media="(min-width: 768px)" srcSet={imgs[pic].img2} />
      <img src={imgs[pic].img1} alt="hero image" />
    </picture>
  );
}

export default Pictures;
