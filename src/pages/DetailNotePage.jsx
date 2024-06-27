import React from 'react';
import PropTypes from 'prop-types';
import { archiveNote, deleteNote, getNote, unarchiveNote, } from '../utils/local-data';
import NotFoundPage from './NotFoundPage';
import NotesDetail from '../components/content/NotesDetail';
import { useNavigate, useParams } from 'react-router-dom';


function DetailNotePageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailNotePage  navigate={navigate} id={id}/>
}

class DetailNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };

    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onUnArchiveNotesHandler = this.onUnArchiveNotesHandler.bind(this);
  }

  onDeleteNotesHandler(id) {
    deleteNote(id);
    this.props.navigate('/');
  }

  onArchiveNotesHandler(id) {
    archiveNote(id);
    this.props.navigate('/');
  }

  onUnArchiveNotesHandler(id) {
    unarchiveNote(id);
    this.props.navigate('/archives');
  }

  render() {
    if (this.state.notes === '') {
      return <p>Catatan tidak ditemukan</p>
    }

    if (this.state.notes === null) {
      return <NotFoundPage />
    }

    return (
      <section className='detail-page'>
        <NotesDetail
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchiveNotesHandler}
          onUnarchive={this.onUnArchiveNotesHandler}
          {...this.state.notes}
        />
      </section>
    )
  }
}

DetailNotePage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default DetailNotePageWrapper;