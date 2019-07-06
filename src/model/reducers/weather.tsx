const weatherInitialState = {
    time: Date.now()
};

export default function Weather(state = weatherInitialState, action: {type: string}) {
    switch(action.type) {
        default:
            return state;
    }
}