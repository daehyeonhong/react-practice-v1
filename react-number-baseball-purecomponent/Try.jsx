import React, {memo} from 'react';

//class
/*class Try extends PureComponent {
    render() {
        const {tryInfo} = this.props;
        return (<li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}*/

//hooks

const Try = memo(({tryInfo}) => {
    console.log(`메렁`);
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default Try;