import { profiles } from './profiles';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="profile-grid">
      {profiles.map(person => (
        <ProfileCard key={person.id} profile={person} />
      ))}
    </div>
  );
}
export default App;