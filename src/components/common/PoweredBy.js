import React from 'react';
import {ReactComponent as GhostLogo} from '../../images/techfi_logow4x_8_qCN_icon.svg';

export default class PoweredBy extends React.Component {
    render() {
        return (
            <a href='https://techfi.tech' target='_blank' rel='noopener noreferrer' onClick={() => {
                window.open('https://techfi.tech', '_blank');
            }}>
                <GhostLogo />
                Powered by Techfi
            </a>
        );
    }
}