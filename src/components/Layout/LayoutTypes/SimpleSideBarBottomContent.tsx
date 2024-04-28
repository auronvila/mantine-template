import classes from "@/components/Layout/LayoutTypes/SimpleSideBar.module.css";
import useAuth from "@/utils/hooks/useAuth";
import UserPopOver from "../../UserPopOver/UserPopOver";
import {
  IconLogout,
} from '@tabler/icons-react';

export default function SimpleSideBarBottomContent(){
  const {signOut} = useAuth()

  return(
    <>
      <UserPopOver/>
      <div className={classes.link} onClick={(event) => {
        signOut()
      }}>
        <IconLogout className={classes.icon}/>
        <span>Exit</span>
      </div>
    </>
  )
}
