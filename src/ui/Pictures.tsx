// interface ImagsProps {
//   [propName: string]: {
//     img1: string;
//     img2: string;
//   };
// }

interface PicturesProps {
  imgs: Array<string>;
  // img2: string;
}

// const imgs: ImagsProps = {
//   hero: {
//     img1: "./homepage/mobile/image-homepage-hero.jpg",
//     img2: "./homepage/mobile/image-homepage-hero@2x.jpg",
//   },
//   profile: {
//     img1: "./homepage/mobile/image-homepage-profile.jpg",
//     img2: "./homepage/mobile/image-homepage-profile@2x.jpg",
//   },
//   manage: {
//     img1: "./portfolio/mobile/image-portfolio-manage.jpg",
//     img2: "./portfolio/mobile/image-portfolio-manage@2x.jpg",
//   },
//   bookmark: {
//     img1: "./portfolio/mobile/image-portfolio-bookmark.jpg",
//     img2: "./portfolio/mobile/image-portfolio-bookmark@2x.jpg",
//   },
//   insure: {
//     img1: "./portfolio/mobile/image-portfolio-insure.jpg",
//     img2: "./portfolio/mobile/image-portfolio-insure@2x.jpg",
//   },
//   fylo: {
//     img1: "./portfolio/mobile/image-portfolio-fylo.jpg",
//     img2: "./portfolio/mobile/image-portfolio-fylo@2x.jpg",
//   },
// };

function Pictures({ imgs }: PicturesProps) {
  // if (!(pic in imgs)) {
  //   return null;
  // }

  // console.log(pic, imgs[pic]);
  if (imgs.length < 2) return;

  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={imgs[0]} />
      <source media="(min-width: 768px)" srcSet={imgs[1]} />
      <img src={imgs[0]} alt="hero image" />
    </picture>
  );
}

export default Pictures;
