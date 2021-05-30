import React from "react";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SettingsIcon from "@material-ui/icons/Settings";

export const SidebarData = [
  {
    title: "All videos",
    icon: <ImportExportIcon fontSize="large" />,
    link: "/",
  },
  {
    title: "My uploads",
    icon: <PersonIcon fontSize="large" />,
    link: "/my_uploads",
  },
  {
    title: "Approve Requests",
    icon: <MailOutlineIcon fontSize="large" />,
    link: "/approve_requests",
  },
  {
    title: "Settings",
    icon: <SettingsIcon fontSize="large" />,
    link: "/settings",
  },
];

export default SidebarData;
