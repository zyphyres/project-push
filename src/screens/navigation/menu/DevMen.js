import * as icon from '@coreui/icons';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ControlPanel from '../../push/ControlPanel';
import Dashboard from '../../push/Dashboard';

const menuDevMain = [

    {title:'Dashboard',
     icon:icon.cilApps,
     path:'/dashboard',
     element:<Dashboard />
    },
    {title:'Control Panel',
     icon:icon.cilTouchApp,
     path:'/control-panel',
     element:<ControlPanel />
    }
];

const subDevMenu = [
    {
        title:'Headset Tracker',
        icon:icon.cilTouchApp,
        path:'/headset-tracker',
        element:''
    }
]

export {menuDevMain,subDevMenu};