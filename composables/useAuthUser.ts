export default function (){
    return useState('user', () => [
        {
            id: 1,
            name: 'Rana Haseeb',
            profile_picture: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
            room: {
                id: '46856',
                name: 'Haseeb Room',
                total_gift_interactions: 1123,
                active_users: 3211,
                allowed_seats: 15,
                theme: {
                    background_image: '/assets/backgrounds/6.jpg',
                    frame: {
                        src: 'assets/frames/4.png',
                        bdr_box: '20px',
                        size: '75px',
                    },
                    profile_picture: '/assets/room/seat.png',
                    color: '#5EE635FF',
                    textColor: '#ffffff',
                },
                members: [
                    {
                        id: 1,
                        name: 'User Name',
                        profile_picture: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
                        room: {
                            room_id: '123456',
                        },
                        frame: {
                            src: 'assets/frames/6.png',
                            bdr_box: 15,
                            size: '90px',
                        },
                        interaction: {
                            likes: 4,
                            gifts_received: 8
                        }
                    },
                    {
                        id: 2,
                        name: 'User Name',
                        profile_picture: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
                        room: {
                            room_id: '123456',
                        },
                        frame: {
                            src: 'assets/frames/4.png',
                            bdr_box: 15,
                            size: '90px',
                        }
                    }
                ],
            },
            frame: {
                src: 'assets/frames/3.png',
                bdr_box: 5,
                size: '60px',
            }
        }
    ])
}