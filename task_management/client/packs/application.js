// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

import ReactOnRails from "react-on-rails";
import DashboardPage from "../bundles/Dashboard/components/DashboardPage";
import ProjectPage from "../bundles/Project/components/ProjectPage";
import LoginPage from "../bundles/Session/components/LoginPage";
import FlashContent from "../bundles/Shared/components/FlashContent";
import Flash from "../bundles/Shared/components/Flash";
import UsersPage from "../bundles/User/components/UsersPage";
import RegistrationUserPage from "../bundles/User/components/RegistrationUserPage";

ReactOnRails.register({
  DashboardPage,
  ProjectPage,
  LoginPage,
  FlashContent,
  Flash,
  UsersPage,
  RegistrationUserPage
});
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
