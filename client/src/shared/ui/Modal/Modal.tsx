import LOGO from '@/shared/assets/images/sl_logo_1.png'
import cls from './Modal.module.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Modal = () => {
    return (
        <div className={cls.Modal}>
            <img className={cls.Modal__logo} src={LOGO} alt="" />
            <h2 className={cls.Modal__heading}>Вход в личный кабинет</h2>
            <div className={cls.Modal__body}>
                <Input placeholder='Имя пользователя'/>
                <Input placeholder='Пароль'/>
                <Button text='Войти' type='secondary'/>                
            </div>
        </div>
    );
};
