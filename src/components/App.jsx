import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child);
                    })
                }
            </div>
        );
    }
};
