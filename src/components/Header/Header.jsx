import React from "react";
import SearchBar from "./SearchBar";
import UpgradeButton from "./UpgradeButton";
import CreateCampaignButton from "./CreateCampaignButton";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <header className="app-header" aria-label="Top navigation">
      <SearchBar />

      <div className="app-header__actions">
        <UpgradeButton />
        <CreateCampaignButton />
        <ProfileMenu />
      </div>
    </header>
  );
}
