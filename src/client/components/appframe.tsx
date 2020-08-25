import * as React from "react";
import "fomantic-ui-css/semantic.min.css";

import { GameState, GameStates } from "../state/gamestate";
import { IntroPage } from "./intropage";

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
            <div className="ui segment">
                {this.renderState()}
            </div>
        );
    }

    private updateGameState = (newstate: GameState): void => {
        this.setState({
            gamestate: newstate
        });
    }

    private renderState = (): JSX.Element => {
        switch (this.state.gamestate.appstate) {
            case GameStates.START:
                return (
                    <IntroPage
                        onStartPlaying={() => {this.state.gamestate.triggerChangeState(GameStates.PLAYING)}}
                    />
                );
            case GameStates.PLAYING:
                return (
                    <h1>PLAYING</h1>
                );
        }
        return (
            <h1>Oppps! something went really wrong</h1>
        );
    }
}
