import React from 'react';
import NotesList from '../components/content/NotesList';
import { getActiveNotes } from '../utils/local-data';
import SearchNotes from '../components/content/SearchNotes';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePageAction from '../components/action/HomePageAction';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search');

  function changeSearchParams(search) {
    setSearchParams({ search });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  )
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onKeywordChange = this.onKeywordChange.bind(this);
  }

  onKeywordChange(keyword) {
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
    const resultNotes = searchNotes.filter((note) => note.archived === false);

    return (
      <>
        <section className='homepage'>
          <h2>Catatan Aktif</h2>
          <SearchNotes keyword={this.state.keyword} keywordChange={this.onKeywordChange} />
          <NotesList notes={resultNotes} />
          <HomePageAction />
        </section>
      </>
    )
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
}

export default HomePageWrapper;