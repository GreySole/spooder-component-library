import Icon from '../../media/Icon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface EditCustomSpooderAddButtonProps {
    onClick: () => void;
}

export default function EditCustomSpooderAddButton(props: EditCustomSpooderAddButtonProps) {
    const { onClick } = props;

    return (
        <button onClick={onClick}>
            <Icon icon={faPlus} />
        </button>
    );
}