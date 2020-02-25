import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/Tabdoor';
import TabDevices from './tabs_nav/Tabdevices';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';


class TabComponents extends Component {
    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className='tabs' selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex: tabIndex})} >
                    <TabList className='tab-nav-container'>
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`} >
                            <TabDoor />
                            <p>No commitments</p>
                            <p style={{ marginBottom: '1.85rem'}}>Cancel at any moment</p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            <p style={{ marginTop: '-5rem'}} >Watch anywhere</p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPrices />
                            <p>Pick your price</p>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabComponents;