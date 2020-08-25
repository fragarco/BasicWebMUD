import * as React from "react";
import "fomantic-ui-css/semantic.min.css";

import { GameState } from "../state/gamestate";

interface IAppFrameState {
    gamestate: GameState,
};

export class AppFrame extends React.Component<any, IAppFrameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            gamestate: new GameState(this.updateGameState),
        };
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

    private updateGameState = (newstate: GameState): void => {
        this.setState({
            gamestate: newstate
        });
    }
}
