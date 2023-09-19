import cls from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
    text: string;
    type: 'primary' | 'secondary';
}

export const Button = (props: ButtonProps) => {
    const { text, type } = props;

    return (
        <button className={type == 'primary' 
            ? classNames(cls.Button, cls.Button__primary)
            : classNames(cls.Button, cls.Button__secondary)
        }>
            {text}
        </button>
    );
};
