const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Sahil.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sahil Meghanahi',
  role: 'MERN enthusiast',
  description:
    'I build things for the web.I love to Solve problems and using latest web technologies like React and Various JS libraries I am fond of building cool and smooth user interfaces.Connect with me for anykind of help.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://in.linkedin.com/in/sahil-meghanathi-6946461a6',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Keshroot',
    description:
      'An Live E commerce website With configdriven UI using ReactJS and NodeJS For hairCare Products.',
    stack: ['SASS', 'Node', 'React'],
    livePreview: 'https://WWW.keshroot.com',
  },
  {
    name: 'Zero-zero',
    description:
    'An Live E commerce website With configdriven UI using ReactJS and NodeJS For Bodyhair Products.',
    stack: ['SASS', 'Node', 'React'],
    livePreview: 'https://www.zerozeroindia.com',
  },
  {
    name: 'VCPA',
    description:
      'A Real estate solution for showing interiors design and building plans which will boost the reach of Real estate business.',
    stack: ['SASS', 'Tailwind', 'React'],
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Redux-toolkit',
  'SASS',
  'Material UI',
  'Tortoise SVN',
  'Tailwind',
  'SQL',
  'NodeJS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sahilgirimeghanathi@gmail.com',
}

export { header, about, projects, skills, contact }
