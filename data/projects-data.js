import speedkobra from '../public/images/speedkobra.png'
import palmbook from '../public/images/palmbook.png'
import painted from '../public/images/painted.png'
import petition from '../public/images/petition.png'
import forza4 from '../public/images/forza4.png'
import spotify from '../public/images/spotify.png'

const projectsData = [
    {
        id: 'speedkobra',
        name: 'SpeedKobra Website',
        prevImg: speedkobra,
        description:
            'Website commision for the band "SpeedKobra".\nIt features image sliders and a small marketplace to buy merchandise.',
        stack: ['Next.js', 'React.js', 'css3', 'sendgrid'],
        link: 'http://www.speed-kobra.com/',
        gitHub: 'https://github.com/giacomorapposelli/speed-kobra',
        videoUrl: '/videos/public_videos_speedkobra.mp4'
    },
    {
        id: 'palmbook',
        name: 'Palmbook',
        prevImg: palmbook,
        description:
            'A Facebook clone social network built with React.js and Node.js.\nUsers can create an account, upload pictures, send friend requests, chat and more!',
        stack: ['React.js', 'Node.js', 'Express.js', 'psql', 'AWS', 'css3'],
        link: '',
        gitHub: 'https://github.com/giacomorapposelli/social-network',
        videoUrl: '/videos/public_videos_social.mp4'
    },
    {
        id: 'painted-ubahn',
        name: 'Painted U-Bahn',
        prevImg: painted,
        description: `Image board focused on graffiti, tags, art on Berlin's metro trains.\nUsers can post their own pictures as well as comment and like.`,
        stack: ['Vue.js', 'Node.js', 'Express.js', 'psql', 'AWS', 'css3'],
        gitHub: 'https://github.com/giacomorapposelli/image-board',
        videoUrl: '/videos/public_videos_painted.mp4'
    },
    {
        id: 'petition',
        name: 'Petition',
        prevImg: petition,
        description:
            ' A funny petition to remove the TV/Radio tax in Berlin.\nUsers can create an account, login/logout and post a virtual signature with their mouse/fingers. It is also possible to check all the people that signed.',
        stack: ['Node.js', 'Express.js', 'Handlebars', 'psql', 'css3'],
        link: 'https://el-rappo.herokuapp.com',
        gitHub: 'https://github.com/giacomorapposelli/petition',
        videoUrl: '/videos/public_videos_petition.mp4'
    },
    {
        id: 'forza4',
        name: 'Forza 4',
        prevImg: forza4,
        description:
            ' No need of presentations.\n A classic Connect 4 game built with pure HTML, CSS and JQuery!',
        stack: ['html5', 'css3', 'JQuery'],
        link: 'https://forzaquattro.herokuapp.com',
        gitHub: 'https://github.com/giacomorapposelli/connect-four-game',
        videoUrl: '/videos/public_videos_forza4.mp4'
    },
    {
        id: 'spotify-serarch',
        name: 'Spotify Search',
        prevImg: spotify,
        description:
            'An interface that allows users to search their favorite artists and albums by making AJAX calls to Spotify`s API via a proxy.',
        stack: ['html5', 'css3', 'JQuery'],
        link: 'http://spotify-apisearch.herokuapp.com/',
        gitHub: 'https://github.com/giacomorapposelli/spotify-api',
        videoUrl: '/videos/public_videos_spotify.mp4'
    }
]

export default projectsData
