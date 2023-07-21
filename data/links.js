import {FiClipboard, FiGithub, FiHome, FiInstagram, FiLinkedin, FiList, FiMail, FiTwitter} from "react-icons/fi";
import {FaDiscord} from "react-icons/fa";

const links = [
    {
        name: 'Personal Website',
        url: 'https://hunterwilson.dev',
        icon: <FiHome/>,
        type: 'website'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/TheTeaCup',
        icon: <FiGithub/>,
        type: 'social'
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/howdyhooter',
        icon: <FiTwitter/>,
        type: 'social'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/howdyhooter/',
        icon: <FiInstagram/>,
        type: 'social'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hunter-wilson-1898551ba/',
        icon: <FiLinkedin/>,
        type: 'social'
    },
    {
        name: 'Discord',
        url: 'https://discord.gg/v9sfD3JNEH    ',
        icon: <FaDiscord/>,
        type: 'social'
    },
    {
        name: 'Paste Bin',
        url: 'https://bin.hunterwilson.dev',
        icon: <FiClipboard/>,
        type: 'website'
    },
    {
        name: 'Todo List',
        url: 'https://todo.hunterwilson.dev',
        icon: <FiList/>,
        type: 'website'
    },
    {
        name: 'Mail',
        url: 'mailto:hello@hunterwilson.dev',
        icon: <FiMail/>,
        type: 'other'
    }

]

export default links;