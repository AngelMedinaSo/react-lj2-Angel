import '../styles/CourseCard.css';

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

const IconClock = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
);

const IconUsers = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />
    <circle cx='9' cy='7' r='4' />
    <path d='M23 21v-2a4 4 0 0 0-3-3.87' />
    <path d='M16 3.13a4 4 0 0 1 0 7.75' />
  </svg>
);

const IconEye = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);

const CourseCard = ({ course }) => {
  if (!course)
    return (
      <article className='course-card empty'>
        Geen cursus informatie beschikbaar
      </article>
    );

  const openCourseVideo = (url) => {
    return () => {
      console.log('Video URL:', url);
    };
  };

  return (
    <article className='course-card'>
      <figure className='course-image'>
        <img src={course.imageUrl} alt={course.title} />
        <span className='level-badge'>{course.level}</span>
        <span className='rating-badge'>
          <IconStar /> {course.rating}
        </span>
      </figure>
      <div className='course-content'>
        <h3>{course.title}</h3>
        <div className='course-instructor'>
          <span className='instructor-avatar' aria-hidden='true'>
            {course.instructor
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </span>
          <span className='instructor-name'>{course.instructor}</span>
        </div>
        <footer className='course-stats'>
          <span className='duration'>
            <IconClock /> {course.duration}
          </span>
          <span className='members'>
            <IconUsers /> {course.members}
          </span>
          <span className='views'>
            <IconEye /> {course.views}
          </span>
        </footer>
        <div className='course-actions'>
          <button
            className='course-button'
            onClick={openCourseVideo(course.videoUrl)}
          >
            Bekijk Video
          </button>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
