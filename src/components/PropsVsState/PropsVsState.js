import React from 'react';
import './PropsVsState.css'

const PropsVsState = () => {
    return (
        <div className='propVSstate'>
            <h4>Props Vs State !!!</h4>
            <p>Both state and props in response are used to drive data into components,
                generally props are set by parent components and propagated to child components,
                and set throughout the component. For data that will change, we need to use state.
                Props are immutable, while state is mutable. If you want to change props,
                We can do it from the parent component and then propagate them to the child components.</p>
        </div>
    );
};

export default PropsVsState;