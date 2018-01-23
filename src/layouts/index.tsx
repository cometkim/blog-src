import * as React from "react";

import './index.scss';

interface DefaultLayoutProps {
    children: any;
};

export default ({ children }: DefaultLayoutProps) => <div>{children()}</div>;
