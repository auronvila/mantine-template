import classes from "@/components/Layout/SideBar.module.css";
import useAuth from "@/utils/hooks/useAuth";
import UserPopOver from "../UserPopOver/UserPopOver";

export default function SideBarBottomContent(){
  const {signOut} = useAuth()

  return(
    <>
      <UserPopOver/>
      <div className={classes.link} onClick={(event) => {
        signOut()
      }}>
        <span>Exit</span>
      </div>
    </>
  )
}
