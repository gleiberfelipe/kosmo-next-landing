
"use client"



import Image from "next/image";




import { BalltBox } from './style';


interface Props {
    maxwidth: any;
    minwidth: any;
    children: JSX.Element;
}

export const Balls = ({ maxwidth, minwidth, children }: Props) => {

    return (
        <BalltBox>
        <div style={{ maxWidth: `${maxwidth}px`,  minWidth: `${minwidth}px`, maxHeight: `${maxwidth}px`, minHeight:  `${minwidth}px`, borderRadius: "50%" }}>
            {children}
        </div>
        </BalltBox>
    );
};


