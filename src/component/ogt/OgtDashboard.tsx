import React from 'react';
import './ogt.css';
import { Tab, Tabs } from 'react-materialize';
import { ViewOgt } from './view-ogt';
import CreateOgt from './create-ogt';

const OgtDashboard = () => {
  return (
    <>
        <Tabs
            className="z-depth-1"
            options={{
                duration: 0,
                onShow: () => {},
                swipeable: true,
                responsiveThreshold: Infinity
            }}
             >
            <Tab title="Visualisation" active className='mt-10'
                tabWidth = {200}
            >
                <ViewOgt/>
            </Tab>
            <Tab title="Creation" className='mt-10' >
               <CreateOgt />
            </Tab>
            <Tab title="Edition" className='mt-10'>
                Composant Edition Saisie
            </Tab>
        </Tabs>
    </>
  )
}

export default OgtDashboard;