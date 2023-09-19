import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder'>;
interface InputProps extends HTMLInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(( props: InputProps) => {
    const { value, onChange, placeholder, type = 'text', ...otherProps } = props;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    return (
        <input
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            className={cls.Input}
            {...otherProps}
        />    
    );
});
