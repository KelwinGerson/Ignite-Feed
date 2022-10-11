import styles from './Avatar.module.css'

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

// Com a desestruturação javascript podemos aplicar valores default
export function Avatar({hasBorder = true, src, alt} : AvatarProps) {
    return (
        <img 
            // if ternário
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            src={src}
            alt={alt}
        /> 
    );
};