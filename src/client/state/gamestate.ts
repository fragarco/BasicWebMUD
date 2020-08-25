
export enum GameStates {
    START,
    PLAYING,
};

export class GameState {
    public appstate: GameStates;
    private notifyNewState: (newstate: GameState) => void;

    constructor(newStateCB: (state: GameState) => void) {
        this.appstate = GameStates.START;
        this.notifyNewState = newStateCB;
    };

    public clone = (): GameState => {
        const clonestate = new GameState(this.notifyNewState);
        clonestate.appstate = this.appstate;
        return clonestate;
    }

    public triggerChangeState = (state: GameStates): void => {
        const newstate = this.clone();
        newstate.appstate = state;
        this.notifyNewState(newstate);
    }
};
