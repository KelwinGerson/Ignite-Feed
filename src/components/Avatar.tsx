import {HtmlHTMLAttributes, ImgHTMLAttributes} from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

// Com a desestruturação javascript podemos aplicar valores default
export function Avatar({hasBorder = true, ...props} : AvatarProps) {
    return (
        <img 
            // if ternário
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            {...props}
        /> 
    );
};