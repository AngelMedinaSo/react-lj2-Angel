import '../styles/Hero.css';

const IconStar = () => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 24 24'
    fill='currentColor'
    aria-hidden='true'
  >
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);

const IconArrow = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <line x1='5' y1='12' x2='19' y2='12' />
    <polyline points='12 5 19 12 12 19' />
  </svg>
);

const Hero = ({ courseData }) => {
  if (!courseData || courseData.length === 0) return null;

  const featured = [...courseData].sort((a, b) => b.rating - a.rating)[0];

  return (
    <section className='hero'>
      <div className='hero-content'>
        <span className='hero-label'>Uitgelicht deze week</span>
        <h2 className='hero-title'>{featured.title}</h2>
        <p className='hero-pitch'>
          Gegeven door <strong>{featured.instructor}</strong>. Een van onze
          best beoordeelde cursussen — duik er vandaag nog in.
        </p>
        <div className='hero-meta'>
          <span className='hero-rating'>
            <IconStar /> {featured.rating}
          </span>
          <span className='hero-dot' aria-hidden='true'>
            ·
          </span>
          <span>{featured.duration}</span>
          <span className='hero-dot' aria-hidden='true'>
            ·
          </span>
          <span>{featured.members.toLocaleString('nl-NL')} cursisten</span>
        </div>
        <a
          className='hero-cta'
          href={featured.videoUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          Start cursus <IconArrow />
        </a>
      </div>
      <div className='hero-image'>
        <img src={featured.imageUrl} alt={featured.title} />
      </div>
    </section>
  );
};

export default Hero;
