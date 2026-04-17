import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <main>
      <h1>Mailboxes</h1>
      {props.mailboxes.length === 0 ? (
        <p>No mailboxes yet.</p>
      ) : (
        props.mailboxes.map((mailbox) => (
          <Link
            key={mailbox._id}
            to={`/mailboxes/${mailbox._id}`}
          >
            <div className="mail-box">
              <h2>Mailbox {mailbox._id}</h2>
            </div>
          </Link>
        ))
      )}
    </main>
  );
};

export default MailboxList;