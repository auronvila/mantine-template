import {Avatar, Text} from "@mantine/core";
import classes from './PopOverTargetContent.module.css'
import {useAppSelector} from "@/store";

export default function PopOverTargetContent(){
  const {fullName,email} = useAppSelector((state) => state.auth.user);
  const firstNameInitial = fullName!.split(' ')[0][0]
  const lastNameInitial = fullName!.split(' ')[1][0]

  return(
    <>
      <div className={classes.contentWrapper}>
        <Avatar color={'blue'} radius={'lg'}>{firstNameInitial + lastNameInitial}</Avatar>
        <div>
          <Text style={{fontWeight:'bold'}} size="md">
            {fullName}
          </Text>
          <Text size="xs">
            {email}
          </Text>
        </div>
      </div>
    </>
  )
}
