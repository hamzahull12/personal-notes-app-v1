import React from 'react';
import PropTypes from 'prop-types';
import { getArchivedNotes } from '../utils/local-data';
import SearchNotes from '../components/content/SearchNotes';
import NotesList from '../components/content/NotesList';
import { useSearchParams } from 'react-router-dom';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({
      keyword,
    });
  }
  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
  );
}
class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const searchNotes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    const archivedNote = searchNotes.filter((note) => note.archived === true);

    return(
      <section className='archive-page'>
        <h2>Catatan Arsip</h2>
        <SearchNotes keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
        <NotesList notes={archivedNote} />
      </section>
    )
  }
}

export default ArchivePageWrapper;