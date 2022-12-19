import { connect } from 'react-redux';

// child component
import MyTimer from '../components/MyTimer';

// actions
import { addTime } from '../actions'; 
import TimeList from '../components/TimeList';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addTime: time => {
        dispatch(addTime(time));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTimer);