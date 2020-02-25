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
                <Tabs className='tabs' selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex: tabIndex })} >
                    <TabList className='tab-nav-container'>
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`} >
                            <TabDoor />
                            <p className='lgScreen' style={{ marginTop: '1rem' }}>No commitments</p>
                            <p className='lgScreen' >Cancel at any moment</p>
                            <br />
                            <span  style={{ marginTop: '0.4rem' }} className='mdScreen'>Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            <p className='lgScreen' style={{ marginTop: '-5rem' }} >Watch anywhere</p>
                            <span className='mdScreen' style={{ marginTop: '-5rem' }}>Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPrices />
                            <p className='lgScreen'>Pick your price</p>
                            <br />
                            <span className='mdScreen'>Prices</span>
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