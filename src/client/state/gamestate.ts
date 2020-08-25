
export enum GameStates {
    STARTING,
    PLAYING,
};

export class GameState {
    public appstate: GameStates;
    private notifyNewState: (newstate: GameState) => void;

    constructor(newStateCB: (GameState) => void) {
        this.appstate = GameStates.STARTING;
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
