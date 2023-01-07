import classNames from "classnames";
import Photo from "../commons/Photo";
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const Tweet = ({ className, content, user, updatedAt, like }) => {
  return (
    <div
      className={classNames("card mb-3", className)}
      style={{ maxWidth: "540px" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <Photo width="100%" alt="30px" classNames="xs" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text">
              <time dateTime={updatedAt}>
                <small className="text-muted">
                  {formatDistanceToNow(new Date())}
                </small>
              </time>
            </p>
            <p className="card-text"> {content}</p>
            <p className="card-text"> {like}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
