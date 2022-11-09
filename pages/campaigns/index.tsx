import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/Logo-white.svg';
import item1 from '@images/item1.png';
import item2 from '@images/item2.svg';
import item3 from '@images/item3.png';
import arrowRight2 from '@images/arrow-right2.svg';
import home from '@images/home.svg';
import cog from '@images/cog.svg';
import logput from '@images/logout.svg';
import pen from '@images/pen.svg';
import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
import PopUp from './PopUp';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DashBoardLayout from '@layouts/DashboardLayout';

const DashBoard = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	const [showPopUp, setshowPopUp] = React.useState(false);
	const router = useRouter();

	const grid = [
		{
			name: 'verify user',
			link: './',
			icon: item1
		},

		{
			name: 'unverify user',
			link: './',
			icon: item2
		},

		{
			name: 'pending',
			link: './',
			icon: item3
		}
	];

	const tableHaeders = ['campaign name', 'verification type', 'name', 'status'];
	const tableRows = [
		['Employee Authentication', '	Teachers Authentication', '12-110-2022', 'view'],
		['Employee Authentication', 'voters-card', '12-110-2022', 'view']
	];

	return (
		<div className="">
			{/* <Text text="name"/>
			<Button text='button'/> */}
			{/* modal */}
			{showPopUp && <PopUp setshowPopUp={setshowPopUp} />}
			{/* modal */}

			<h1 className="big-body mt-16">List of Campaings</h1>

			<div className="campain_table w-full">
				<table className="w-full mt-8">
					<thead className="text-left bg-gray-100 capitalize body ">
						{tableHaeders.map((item, index) => (
							<th className="p-2 px-4" key={item}>
								{item}
							</th>
						))}
					</thead>

					<tbody className="space-y-4">
						{tableRows.map((item, index) => (
							<Link key={index} href={'/campaigns/campaign-item'}>
								<tr className=" w-full border-b body cursor-pointer hover:bg-gray-100 capitaliz">
									{item.map((item, index) => (
										<td className="p-2 px-4" key={item}>
											{item}
										</td>
									))}
								</tr>
							</Link>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

DashBoard.getLayout = function getLayout(children: ReactElement) {
	return <DashBoardLayout>{children}</DashBoardLayout>;
};

export default DashBoard;
