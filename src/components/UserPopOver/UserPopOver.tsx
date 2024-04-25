import {Button, Popover, Text} from "@mantine/core";
import {useState} from "react";
import PopOverTargetContent from "@/components/UserPopOver/PopOverTargetContent";

export default function UserPopOver() {
  const [displayPopOver, setDisplayPopOver] = useState<boolean>(false);


  return (
    <div>
      <Popover
        width={200}
        position="right"
        opened={displayPopOver}
        offset={{mainAxis: 13, crossAxis: 0}}
      >
        <Popover.Target>
          <div onClick={() => setDisplayPopOver(prevState => !prevState)}>
            <PopOverTargetContent/>
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">
            Change position and offset to configure dropdown offset relative to target
          </Text>
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}
