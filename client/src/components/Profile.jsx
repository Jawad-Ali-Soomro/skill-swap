import { useState } from "react";
import "../style/about.scss";

const Profile = () => {
  const [profileLocal, setProfile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="upload-profile flex col">
      {showPreview && (
        <div className="profile-pic flex" onClick={() => setShowPreview(false)}>
          {profileLocal && (
            <img src={profileLocal} className="profile" alt="Profile Preview" />
          )}
        </div>
      )}
      <div className="upload-profile-sect flex col">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <h1>Upload Profile</h1>
        <p>Drag & Drop File Here To Upload!</p>
      </div>
      {profileLocal && (
        <button onClick={() => setShowPreview(true)}>Preview</button>
      )}
      <button>NEXT</button>
    </div>
  );
};

export default Profile;
