import _ from 'lodash';

// Redux constants
import { ADD_TIME, DELETE_TIME } from '../constants';

export const tracked_times = (state = [], action) => {
    // switch(action.type) {
    //     case ADD_TIME:
    //         let { time } = action.payload;
    //         return _.concat(state, time);

    //     default:
    //         return state;
    // }
    // if (action.type === ADD_TIME) {
    //     let { time } = action.payload;
    //     state.push(JSON.stringify(time));
    //     return state;
    // }
    return state;
}