import * as React from "react";

interface DefaultLayoutProps {
    children: any;
};

export default ({ children }: DefaultLayoutProps) => <div>{children()}</div>;
