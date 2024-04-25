import classes from "@/components/Layout/SideBar.module.css";
import useAuth from "@/utils/hooks/useAuth";

export default function SideBarBottomContent(){
  const {signOut} = useAuth()

  return(
    <>
      <div className={classes.link} onClick={(event) => {
        signOut()
      }}>
        <span>Çıkış</span>
      </div>
    </>
  )
}
