import {Loader} from "@mantine/core";
import classes from './LoadingScreen.module.css'

export default function LoadingScreen() {
  return (
    <div className={classes.loadingScreenBackground}>
      <Loader style={{alignSelf:'center'}} color="blue" type="bars"/>
    </div>
  )
}
