import React from 'react';

import Hello from './Hello.jsx';
import World from './World.jsx';

export default class Test extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <World />
            </div>
        );
    }
};
