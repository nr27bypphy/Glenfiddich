// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

import ReactOnRails from "react-on-rails";
import DashboardPage from "../bundles/containers/pages/DashboardPage";
import ProjectPage from "../bundles/containers/pages/ProjectPage";
import LoginPage from "../bundles/containers/pages/LoginPage";
import FlashContent from "../bundles/components/molecules/FlashContent";
import Flash from "../bundles/components/organisms/Flash";
import RegistrationUserPage from "../bundles/containers/pages/RegistrationUserPage";
import WorkspaceMembersPage from "../bundles/containers/pages/WorkspaceMembersPage";

ReactOnRails.register({
  DashboardPage,
  ProjectPage,
  LoginPage,
  FlashContent,
  Flash,
  RegistrationUserPage,
  WorkspaceMembersPage
});
