import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/Logo-white.svg';
import item1 from '@images/item1.png';
import item2 from '@images/item2.svg';
import item3 from '@images/item3.png';
import arrowRight2 from '@images/arrow-right3.svg';
import home from '@images/home.svg';
import cog from '@images/cog.svg';
import logput from '@images/logout.svg';
import pen from '@images/pen.svg';
import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
// import PopUp from './PopUp';
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

	const tableHaeders = [' name', 'verification type', 'date', 'status'];
	const tableRows = [
		['Hannah', 'BVN', '12-110-2022', 'verified'],
		['bobby', 'voters-card', '12-110-2022', 'view']
	];

	return (
		<div className="">
			{/* <Text text="name"/>
			<Button text='button'/> */}
			{/* modal */}
			{/* {showPopUp && <PopUp setshowPopUp={setshowPopUp} />} */}
			{/* modal */}

			<div className="py-2 middle mt-16">
				<Link href={'/campaigns'}>
					<p className="body pr-4">Employee Authentication </p>
				</Link>
				<Image src={arrowRight2} width={9.7} height={16.5} alt="logo" />
				<p className="text-black font-toma-sb pl-4 font-semibold">Teachers Authentication</p>
			</div>

			<div className="campain_table w-full mt-6">
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
							<Link key={index} href={`/verified-user/${item[0]}`}>
								<tr className=" w-full border-b body cursor-pointer hover:bg-gray-100 capitalize">
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
