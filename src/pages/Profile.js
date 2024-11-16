import React, {useEffect} from 'react';
import ProfileSection from "../components/Profile/ProfileSection";
import feather from "feather-icons";
import Sidebar from "../components/Home/Sidebar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import BottomNavbar from "../components/Home/BottomNavbar";

function Profile() {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <>
            <div className="profile-page">
                <Sidebar/>
                <ProfileHeader/>
                <ProfileSection/>
                <BottomNavbar/>
            </div>
        </>
    );
}

export default Profile;
