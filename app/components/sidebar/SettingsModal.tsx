"use client";

interface SettingsModalProps {
    isOpen?: boolean;
    onClose: () => void;
    currentUser: User;
}

const SettingsModal = () => {
    return (
        <div>
            Settings modal!
        </div>
    );
}

export default SettingsModal;
