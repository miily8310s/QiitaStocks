import React from 'react'

const Note = (props) => {
    const { note } = props
    const tags = note.tags
    const styles = {
        ul:{
            maxWidth:700, 
            whiteSpace: 'nowrap', 
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          },
        tagul:{
            background:'rgba(0,0,0,.03)',
            borderColor: '#e9e9eb',
            color: '#909399'
          }
    }
    return (
        <div className="col-md-6">
            <div className="card mb-4">
                <div className="card-body">
                    <h5>{note.title}</h5>
                    <p className="card-subtitle">{note.created_at}</p>
                    <p className="card-subtitle">
                        {note.user.id}
                    </p>
                    <p style={styles.ul} className="card-text mr-4">{note.body}</p>
                    {tags.map(item => (
                        <span style={styles.tagul}>{item.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Note
