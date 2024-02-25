import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {AppProps} from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout<P = {}, IP = P> = AppProps<P> & {
    Component: NextPageWithLayout<P, IP>
};
export type AnimalType = {
    id: string;
    name: string;
    photo: string;
    age: number;
    sexe: string;
    description: string;
    type: string;
    state: string;
}

export type PostType ={
    id: string;
    animal: AnimalType;
};