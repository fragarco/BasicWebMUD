import * as React from "react";
import "fomantic-ui-css/semantic.min.css";

export class AppFrame extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="ui centered grid">
                <div className="six wide column">
                    <h1>Hello World!</h1>
                </div>
            </div>
        );
    }
}
