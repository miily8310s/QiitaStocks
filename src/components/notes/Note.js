import React from 'react'
import Moment from 'moment';

const Note = (props) => {
    const { note } = props
    const tags = note.tags
    const url = note.url
    const styles = {
        ul:{
            maxWidth:500, 
            whiteSpace: 'nowrap', 
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
        tagul:{
            margin: '0 5px 0 0',
            padding: '0px 5px',
            background:'rgba(0,0,0,.03)',
            border: '1px solid #e9e9eb',
            borderRadius: '3px',
            color: '#909399'
          }
    }
    return (
        <div className="col-md-6">
            <div className="card mb-4">
                <div className="card-body">
                    <a href={url}>{note.title}</a>
                    <p className="card-subtitle">{Moment.utc(note.created_at).format('YYYY-MM-DD HH:mm')}</p>
                    <p className="card-subtitle">
                        {note.user.id}
                    </p>
                    <p style={styles.ul} className="mr-4">{note.body}</p>
                    {tags.map(item => (
                        <span style={styles.tagul}>{item.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Note
