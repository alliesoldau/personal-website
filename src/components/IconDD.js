import { IconContext } from "react-icons";

export default function IconDD({ children }) {

    return (
        <>
            <IconContext.Provider value={{ color: "black", size: '2.5em', verticalAlign: 'middle' }}>
                {children}
            </IconContext.Provider>
        </>
    );
}