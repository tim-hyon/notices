import { connect } from 'react-redux'
import Notification from '../components/Notification';
import { clearNotification } from '../store/notification';

const mapStateToProps = state => ({
    content: state.notification.content,
    type: state.notification.type,
})

export default connect(mapStateToProps, { clearNotification })(Notification)