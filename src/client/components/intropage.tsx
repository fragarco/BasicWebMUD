import * as React from "react";
import "fomantic-ui-css/semantic.min.css";


interface IIntroPageProps {
    onStartPlaying: () => void;
};

export class IntroPage extends React.Component<IIntroPageProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="ui one column centered grid">
                <div className="row">
                    <p>Como intrepida aventurera, no has podido negarte a una gran misión</p>
                </div>
                <div className="row">
                    <button className="ui button" onClick={this.handleStart}>
                        Comenzar
                    </button>
                </div>
            </div>
        );
    }

    private handleStart = (): void => {
        this.props.onStartPlaying();
    }
}
