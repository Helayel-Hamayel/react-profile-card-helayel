function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <img src={profile.avatar} alt={profile.fullName} className="profile-avatar" />
      <h2>{profile.fullName}</h2>
      <h3>{profile.jobTitle}</h3>
      <p>{profile.bio ? profile.bio : "No bio provided."}</p>
    </article>
  );
}
export default ProfileCard;