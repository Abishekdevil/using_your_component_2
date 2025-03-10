import Likebutton from "./likebutton";


const PostCard = ({ profileImage, username, content, isLiked }) => {
  return (
    <div className="card">
      <img src={profileImage} alt={username} className="profile-image" />
      <div className="content">
        <h3>{username}</h3>
        <p>{content}</p>
        <Likebutton initialLiked={isLiked} />
      </div>
    </div>
  );
};

export default PostCard;
