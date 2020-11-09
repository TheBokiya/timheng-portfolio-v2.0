import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function tabsForMobile(props) {
  return (
    <Tabs className="block sm:hidden my-10">
      <TabList>
        {props.list.map((item, index) => (
          <Tab key={"tabList-" + index}>
            <FontAwesomeIcon icon={item.icon} className="text-red text-2xl" />
          </Tab>
        ))}
      </TabList>

      {props.list.map((i, iIndex) => (
        <TabPanel key={"tabPanel-" + iIndex}>
          <h3 className="mb-5">{i.group}</h3>
          <ul>
            {i.nodes.map((j, jIndex) => (
              <li key={jIndex}>{j}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  );
}
