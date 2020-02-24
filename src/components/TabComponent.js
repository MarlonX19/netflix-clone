import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/Tabdoor';
import TabDevices from './tabs_nav/Tabdevices';
import TabPrices from './tabs_nav/TabPrices';


class TabComponents extends Component {
    render() {
        return (
            <div>
                <Tabs className='tabs'>
                    <TabList className='tab-nav-container'>
                        <Tab>
                            <TabDoor />
                            <p>No commitments</p>
                        </Tab>
                        <Tab>
                            <TabDevices />
                            <p style={{ marginTop: '-5.14rem'}} >Watch anywhere</p>
                        </Tab>
                        <Tab>
                            <TabPrices />
                            <p>Pick your price</p>
                        </Tab>
                    </TabList>
                </Tabs>
            </div>
        )
    }
}

export default TabComponents;