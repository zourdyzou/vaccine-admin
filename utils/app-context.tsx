import React, {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

import { TypedUserParams } from '@/interfaces/data-type';
import { stateOptions } from '@/utils/data-location';

type AppContextState = {
    userState: TypedUserParams;
    closeModal: () => void;
    openModal: () => void;
    isOpen: boolean;
    handleChange: (
        event?: React.ChangeEvent<HTMLInputElement> | null,
        additionalKey?: string,
        additionalProp?: string,
    ) => void;
    setUserData: Dispatch<SetStateAction<TypedUserParams>>;
};

const AppContext = createContext<AppContextState>({
    userState: {
        phoneNumber: '',
        fullName: '',
        idNumber: '',
        address: stateOptions[0].label,
    },
    closeModal: () => null,
    openModal: () => null,
    handleChange: () => null,
    isOpen: false,
    setUserData: () => null,
});

const AppContextProvider = (props: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState({
        phoneNumber: '',
        fullName: '',
        idNumber: '',
        address: stateOptions[0].label,
    });

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const handleChange = (
        event?: React.ChangeEvent<HTMLInputElement> | null,
        additionalKey?: string,
        additionalProp?: string,
    ) => {
        setUserData((prevState) => ({
            ...prevState,
            [(event ? event.target.name : additionalKey) as string]: event
                ? event.target.value
                : additionalProp,
        }));
    };

    return (
        <AppContext.Provider
            value={{
                userState: userData,
                closeModal,
                openModal,
                handleChange,
                isOpen,
                setUserData,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { useAppContext, AppContextProvider };
