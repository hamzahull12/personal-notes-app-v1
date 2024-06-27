
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';

function NotesList({ notes }) {
  if (!notes.length) {
    return (
      <section className='notes-list-empty'>
        <p className='notes-list__empty'>Tidak Ada Catatan</p>
      </section>
    );
  }

  return (
    <section className='notes-list'>
      {
        notes.map((note) => (
          <NotesItem key={note.id} id={note.id} {...note}/>
        ))
      }
    </section>
  )
}

NotesList.propTypes = {
  notes: PropTypes.array,
}

export default NotesList;
