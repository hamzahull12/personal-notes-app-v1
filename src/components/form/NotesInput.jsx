import React from 'react';
import { FiCheck } from 'react-icons/fi';
import PropTypes from 'prop-types';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="add-new-page__input">
            <input className='add-new-page__input__title'
              type="text"
              placeholder='Beri judul...'
              required value={this.state.title}
              onChange={this.onTitleChangeEventHandler} />
            <div className='add-new-page__input__body'
              contentEditable='true'
              data-placeholder='Tuliskan catatan di sini...'
              onInput={this.onBodyChangeEventHandler}>
            </div>
          </div><div className='add-new-page__action'>
              <button className='action' type='submit' title='simpan'><FiCheck /></button>
          </div>
        </form>
      </>
    )
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default NotesInput;
