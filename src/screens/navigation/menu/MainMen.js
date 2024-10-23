import * as icon from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePage from '../../push/ProfilePage';
import Announcement from '../../push/Announcement';
import Dashboard from '../../push/Dashboard';

const menuMain = [

    {title:'Dashboard',
     icon:icon.cilApps,
     path:'/dashboard',
     element:''
    },
    {title:'My Profile',
     icon:icon.cilUser,
     path:'/profile',
     element:<ProfilePage/>
    },
    {title:'Announcement',
     icon:icon.cilFeaturedPlaylist,
     path:'/announcement',
     element:<Announcement />
    },
    {title:'Reel Skill',
     icon:icon.cilVideo,
     path:'/reelskill',
     element:''
    },
    {title:'Newsletter',
     icon:icon.cilNewspaper,
     path:'/inbox',
     element:''
    },
    {title:'Training Documents',
     icon:icon.cilSpeak,
     path:'/inbox',
     element:''
    },
    {title:'CSAW 2024',
     icon:icon.cilFeaturedPlaylist,
     path:'/inbox',
     element:''
    },
    {title:'Typing Test',
     icon:icon.cilJustifyLeft,
     path:'/inbox',
     element:''
    },
    {title:'Grammar Test',
     icon:icon.cilKeyboard,
     path:'/inbox',
     element:''
    },
    {title:'Inbox',
     icon:icon.cilContact,
     path:'/inbox',
     element:''
    },
 
];

const subMenu = [
    {
     title:'AVAYA One-X Guide',
     icon:'',
     path:'/avayaxone',
     Element:''
    },
    {
     title:'Paid Leaves',
     icon:'',
     path:'/paidleave',
     Element:''
    },
    {
     title:'Company Manuals',
     icon:'',
     path:'/companymanuals',
     Element:''
    },
    {
     title:'IT Security Policy',
     icon:'',
     path:'/itsecuritypolicy',
     Element:''
    },
    {
     title:'IT Training Modules',
     icon:'',
     path:'/ittrainingmodules',
     Element:''
    },
]

export {menuMain,subMenu};