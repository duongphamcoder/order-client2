import { ItemControl, AvatarUser } from "./itemHeader/item";
import {
  faBell,
  faListDots,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../css/header.scss";

import Avt from "../img/avt.png";

function AHeader() {
  return (
    <div id="aHeader-wraper" className="">
      <div id="header_control">
        <ItemControl icon={faBell} title={"bell"} />
        <ItemControl icon={faListDots} title={"list"} />
        <ItemControl icon={faEnvelope} title={"mail"} />
      </div>
      <AvatarUser photoURL={Avt} />
    </div>
  );
}

export default AHeader;
