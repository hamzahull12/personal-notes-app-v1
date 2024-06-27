import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import NotesInput from '../components/form/NotesInput';

function AddNotePage() {
  const navigate = useNavigate();

  function onAddNotesHandler(notes) {
    addNote(notes);
    navigate('/');
  }

  return (
    <section className='add-new-page'>
      <NotesInput addNote={onAddNotesHandler} />
    </section>
  );
}

export default AddNotePage;