import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function tabsForMobile(props) {
  return (
    <Tabs className="block sm:hidden my-10">
      <TabList>
        {props.list.map(i => (
          <Tab>
            <FontAwesomeIcon icon={i.icon} className="text-red text-2xl" />
          </Tab>
        ))}
      </TabList>

      {props.list.map(i => (
        <TabPanel>
          <h3 className="mb-5">{i.group}</h3>
          <ul>
            {i.nodes.map(j => (
              <li>{j}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
}
