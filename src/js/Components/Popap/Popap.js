import React from 'react'
import { connect } from 'react-redux'
import { setIsOpenPopap, setTitlePopap } from '../../redux/action/action'



const Popap = ({
    isOpen = false, 
    title = '',
    content = '',
    onSave = () => false,
    onClose = () => false,
    setIsOpenPopap,
    setTitlePopap
}) => {
    return (
        <React.Fragment>
        {isOpen && 
            <React.Fragment>
            <div className="modal show fade d-block"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        {title}
                      </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setIsOpenPopap(false)}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setIsOpenPopap(false)} >Закрыть</button>
                      <button type="button" className="btn btn-primary" onClick={() => setTitlePopap('On Save SUCCESS!')}>Сохранить</button>
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
            </React.Fragment>
        }
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    // console.log('state', state)
    return state.popap
} 

const mapDispatchToProps = {
    setIsOpenPopap,
    setTitlePopap
}

export default connect(mapStateToProps, mapDispatchToProps)(Popap) 