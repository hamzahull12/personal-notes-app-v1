import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';
import DetailPageAction from '../action/DetailPageAction';

function NotesDetail({
  id, 
  title, 
  createdAt, 
  body, 
  archived, 
  onDelete, 
  onArchive, 
  onUnarchive}) {
    return (
      <>
        <h3 className='detail-page__title'>{title}</h3>
        <p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
        <div className='detail-page__body'>{body}</div>
        <DetailPageAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
      </>
    )
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NotesDetail;