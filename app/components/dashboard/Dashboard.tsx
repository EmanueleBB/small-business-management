'use client'

import React from 'react'
import './Dashboard.styles.css'
import useDashboardStore from '@/app/hooks/dashboardStore'


const Dashboard:React.FC= () => {

	const dashboardStore = useDashboardStore();
	let activeItemLabel=dashboardStore.activeNavItem;

	return (
		<div className='dashboard'>
			<h1>{activeItemLabel}</h1>
		</div>
	)
}

export default Dashboard