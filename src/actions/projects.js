import * as TYPES from './types';

const projects = [
  {
    id: 1,
    title: {
      title:'Interactive TVs',
      subtitle: 'Interactive Visual Installation  '
    },
    description: ' This interactive visual installation uses old analog TVs combined with motion sensing to create a connection between the audience and obsolete technology. Using a depth camera we were able to track people dancing in front of the DJ booth and create different visuals in real-time that were displayed on various TVs. The audience was able to control different visual scenes by using a Launchpad MIDI controller. Some techniques used for creating the visuals involve point cloud, optical flow or shaders.',
    credits: {
      client: 'Zebra Events Barcelona',
      technologies: ['Openframeworks', 'OpenCV', 'Kinect'],
      data: '14/07/2018',
      location: 'Hotel OD Barcelona',
    },
    images: [{
      url: '../data/telesMain.jpg',
      isMain: true,
    }, {
      url: '../data/kinect2.png',
    }, {
      url: '../data/kinect1.png',
    },
    {
      url: '../data/kinect3.png',
    }]
  },
  {
    id: 2,
    title: {
      title:'Light Show',
      subtitle: 'Light installation'
    },
    description: 'We did a light installation for some of La Finca events. Audio-reactive lights combined with VJing during the event.',
    credits: {
      client: 'La Finca',
      technologies: ['Protopixel', 'Resolume', 'LED Fixtures'],
      data: '31/05/2018 and 31/06/2018',
      location: 'Utopia126, Barcelona',
    },
    images: [{
      url: '../data/la_finca.JPG',
      isMain: true,
    },{
      url: '../data/fincaMain.jpg',
      isMain: true,
    }]
  },
  {
    id: 3,
    title: {
      title:'Interactive Lights @ Zebra',
      subtitle: 'Interactive Light Installation'
    },
    description: 'An interactive light installation where the audience becomes the VJ. Attendees are able to choose up to 64 different audio-reactive light patterns by using a launchpad MIDI controller. Then, this device is connected to the light installation, placed behind the DJ booth. During the event many people played with it, some trying to match climax moments with flashing lights, others changing patterns every bar, ... ',
    credits: {
      client: 'Zebra Events Barcelona',
      technologies: ['Resolume', 'Protopixel', 'LED'],
      data: '09/06/2018',
      location: 'Hotel OD Barcelona',
    },
    images: [{
      url: '../data/zebra1.jpg',
      isMain: true,
    }, {
      url: '../data/zebra2.jpg',
      isMain: false,
    }]
  },
  // {
  //   id: 4,
  //   title: {
  //     title:'Analogic TVs Wall',
  //     subtitle: 'Permanent Installation'
  //   },
  //   description:'A permanent installation formed by a big structure of old analog TVs, placed at the entrance of La Huella CrossFit. The content displayed on the TVs is a mix between vintage footage and content created specifically for the client.',
  //   credits: {
  //     client: 'La Huella CrossFit',
  //     technologies: ['Raspberry Pi', 'Resolume', 'Analog TVs'],
  //     data: '09/12/2018',
  //     location: 'La Huella CrossFit Provença, Barcelona',
  //     partners: 'Jordi Garreta'
  //   },
  //   images: []
  // },
  {
    id: 5,
    title: {
      title:'Live visuals @ Checkpoint',
      subtitle: 'Live visuals'
    },
    description:'Glitchy and noisy visuals for Checkpoint event.',
    credits: {
      client: 'Checkpoint',
      technologies: ['Resolume'],
      data: '26/10/2018',
      location: 'Opera Samfaina, Barcelona'
    },
    images: [{
      url: '../data/checkMain.png',
      isMain: true,
    },{
      url: '../data/glitch1.mov',
      isMain: true,
      isVideo: true,
    },{
      url: '../data/glitch3.mov',
      isMain: true,
      isVideo: true,
    }]
  },
  {
    id: 6,
    title: {
      title:'Light Installation @ Cerïmonia',
      subtitle: 'Animated light sculpture'
    },
    description:'Triangular-shaped light installation done at Cerïmonia events.',
    credits: {
      client: 'Cerïmonia',
      technologies: ['Arduino', 'LED Fixtures'],
      data: 'October and December, 2018',
      location: 'Doble36, Barcelona'
    },
    images: [{
      url: '../data/cerimonia.jpg',
      isMain: false,
    },{
      url: '../data/cerimoniaMain.jpg',
      isMain: true,
    }]
  },
  {
    id: 7,
    title: {
      title:'Efímer @ Cruixent',
      subtitle: 'Live AV'
    },
    description:'Our consciousness allows us to create a concrete reality in our minds, an ephemeral but real space, where we can conceptualize all this and enjoy the beauty of all these trivial phenomena. This piece shows this, it intends to be an introspective glance, a space of reflection that leads to a trance, where the rhythms are composed and decomposed while harmonious melodies construct a casually arranged landscape.',
    credits: {
      client: 'Cruixent',
      technologies: ['TouchDesigner', 'Laser Light', 'Ableton'],
      data: 'February, 2019',
      location: 'Espronceda Center for Art & Culture, Barcelona',
    },
    images: [{
      url: '../data/cruixent1.jpg',
      isMain: false,
    },{
      url: '../data/cruixent2.jpg',
      isMain: true,
    },{
      url: '../data/cruixent3.jpg',
      isMain: false,
    }]
  },
];


export function fetchProjects() {
  return (dispatch) => {
    dispatch({
      type: TYPES.FETCH_PROJECTS,
      payload: projects

    });
  }
}

export function cleanProjects() {
  return (dispatch) => {
    dispatch({
      type: TYPES.CLEAN_PROJECTS,
    });
  }
}

export function fetchProject(id) {
  return (dispatch) => {
    const project = projects.find(p => p.id === parseInt(id, 10));
    dispatch({
      type: TYPES.FETCH_PROJECT,
      payload: project,
    });
  }
}


export function isLoading() {
  return (dispatch) => {
    dispatch({
      type: TYPES.IS_LOADING,
    });
  };
}
export function isLoaded() {
  return (dispatch) => {
    dispatch({
      type: TYPES.IS_LOADED,
    });
  };
}
