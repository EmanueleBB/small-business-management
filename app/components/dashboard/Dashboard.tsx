'use client'

import React from 'react'
import './Dashboard.styles.css'
import useDashboardStore from '@/app/hooks/dashboardStore'
import TodayBoard from './TodayBoard'
import WeekBoard from './WeekBoard'
import MonthBoard from './MonthBoard'
import GeneralBoard from './GeneralBoard'


const Dashboard:React.FC= () => {

	const dashboardStore = useDashboardStore();
	let activeItemLabel:string = dashboardStore.activeNavItem;

	const renderSwitch = (activeItemLabel:string)=>{
		switch(activeItemLabel) {
			case 'Oggi':
			  return <TodayBoard/>;
			case 'Settimana':
				return <WeekBoard/>;
			case 'Mese':
				return <MonthBoard/>;
			case 'Vista generale':
				return <GeneralBoard/>;
			default:
			  return <TodayBoard/>;
		}
	}
	return (
		<div className='dashboard'>
			<h1>{activeItemLabel}</h1>
			{renderSwitch(activeItemLabel)}
		</div>

	)
}

export default Dashboard