import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    show: boolean;
    backgroundColor?: string;
}
export default function Modal(props: Props): JSX.Element | null;
export {};
