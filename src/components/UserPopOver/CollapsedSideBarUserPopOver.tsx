import {Button, Popover, Text} from "@mantine/core";
import {useState} from "react";
import { IconUserCircle } from '@tabler/icons-react';
import CollapsedUserPopOverContent from "@/components/UserPopOver/CollapsedUserPopOverContent";

export default function CollapsedSideBarUserPopOver() {
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
             <IconUserCircle
            size={30}
            strokeWidth={1.5}
            color={'black'}
          />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <CollapsedUserPopOverContent/>
        </Popover.Dropdown>
      </Popover>
    </div>
  )
}
