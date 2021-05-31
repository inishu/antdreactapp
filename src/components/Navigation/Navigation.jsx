import React from 'react';

import Introduction from '../pages/Introduction'
import Acdemicdetail from '../pages/Acdemicdetail'
import Experience from '../pages/Experience'
import Skill from '../pages/Skill'
import Achievements from '../pages/Achievements'
import Major1 from '../pages/Major1'
import Major2 from '../pages/Major2'
import File from '../pages/File'
import Contacts from '../pages/Contacts'


const Navigation = (props) => {
    switch(props.value) {
        case 1: return <Introduction />
        case 2: return <Acdemicdetail/>
        case 3: return <Experience/>
        case 4: return <Skill/>
        case 5: return <Achievements/>
        case 6: return <Major1/>
        case 7: return <Major2/>
        case 8: return <File/>
        case 9: return <Contacts/>
    }
}

export default Navigation