import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
const FailedModal = ({ isOpen, onClose, pesan }) => {
    useEffect(() => {
        if (isOpen) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: pesan,
                showConfirmButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    onClose();
                }
            });
        }
    }, [isOpen, onClose]);

    return null;
};

export default FailedModal