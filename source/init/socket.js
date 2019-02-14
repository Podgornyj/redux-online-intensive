import io from 'socket.io-client';

import { ROOT_URL, groupId } from '../REST';

export const socket = io(ROOT_URL, {
    path: '/redux/ws',
});

export const joinSocketChanel = () => {
    const token = localStorage.getItem('token');

    socket.emit('join', { groupId, token });
}
