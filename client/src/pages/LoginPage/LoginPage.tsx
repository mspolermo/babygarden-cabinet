import React from 'react';
import { Modal } from '../../shared/ui/Modal/Modal';
import cls from './LoginPage.module.scss';


export const LoginPage = () => {
    return (
        <div className={cls.LoginPage}>
            <Modal />
        </div>
    );
};
