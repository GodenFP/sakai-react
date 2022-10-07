import React  from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const AppTopbar = (props) => {

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-logo">
                <span>社團活動申請系統</span>
            </div>

            

            <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                <i className="pi pi-ellipsis-v" />
            </button>

                <div className="layout-topbar-menu lg:flex origin-top">
                    <span>test</span>
                </div>
        </div>
    );
}
