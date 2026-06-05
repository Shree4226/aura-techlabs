const navLinks = [
{
    id:'home',
    title:'Home'
},
{
    id:'products',
    title:'Products'
},
{
    id:'contact',
    title:'Contact'
}
];

const productsData = [
    {
        id: 1,
        title:'AURA WATCH X',
        description:'Smart Watch with Health Monitoring Features',
        features:[
            '14-day battery life',
            'Heart Rate & SpO2 Monitoring',
            'Water Resistant (5 ATM)',
            'Customizable Watch Faces'
        ],
        image:'/images/SmartWatch.png'
    },{
        id: 2,
        title:'AURA BUDS PRO',
        description:'Wireless Earbuds with Active Noise Cancellation',
        features:[
            'Active Noise Cancellation',
            '30-hour total playback with charging case',
            'Touch Controls',
            'Voice Assistant Integration'
        ],
        image:'/images/BudsPro.png'
    },
    {
        id: 3,
        title:'AURA HOME HUB',
        description:'Smart Home Hub for Seamless Connectivity',
        features:[
            'Voice Control with Alexa & Google Assistant',
            'Supports Zigbee & Z-Wave devices',
            '1080p HD Camera with Night Vision',
            'Multi-room Audio Support'
        ],
        image:'/images/HomeHub.png'
    }
];

export {navLinks,productsData}