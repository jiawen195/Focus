import { connect } from 'react-redux';

// child component
import TimeList from '../components/TimeList';

// actions
import { deleteTime } from '../actions'; 

const mapStateToProps = state => ({
    recorded_times: state.tracked_times,
});

const mapDispatchToProps = dispatch => ({
    deleteTime: time_idx => {
        dispatch(deleteTime(time_idx));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeList);