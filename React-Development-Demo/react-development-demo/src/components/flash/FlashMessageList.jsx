import React from "react"
import FlashMessage from "./FlashMessage"
import { connect } from "react-redux"
import { deleteFlashMessage } from "../../actions/flashMessages"

class FlashMessageList extends React.Component {
    // message是一个数组！！！
    render() {

        const messages = this.props.messages.map(message =>
            <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage }/>
        );

        return (
            <div className="container">
                { messages }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps,{ deleteFlashMessage })(FlashMessageList);