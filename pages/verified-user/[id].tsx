import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/Logo-white.svg';
import item1 from '@images/gridnew.png';
import item2 from '@images/item1.png';
import item3 from '@images/item3.png';
import arrowRight2 from '@images/arrow-right2.svg';
import home from '@images/home.svg';
import cog from '@images/cog.svg';
import logput from '@images/logout.svg';
import pen from '@images/pen.svg';
import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
import PopUp from '../../src/interface/layouts/PopUp';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DashBoardLayout from '@layouts/DashboardLayout';

const DashBoard = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	const [showPopUp, setshowPopUp] = React.useState(false);
	const router = useRouter();
	const {id} = router.query

	console.log(id);
	

	const sideNav = [
		{
			name: 'home',
			link: './dashboard',
			icon: home
		},

		{
			name: 'Campaign',
			link: './verify-page',
			icon: home
		},

		{
			name: 'Settings',
			link: './dashboard',
			icon: cog
		}
	];

	const grid = [
		{
			name: 'campaign',
			link: './',
			icon: item1
		},

		{
			name: 'verified user',
			link: './',
			icon: item2
		},

		{
			name: 'unverifed',
			link: './',
			icon: item3
		}
	];

	return (
		<div className="">
			{/* <Text text="name"/>
			<Button text='button'/> */}
			{/* modal */}
			{showPopUp && <PopUp setshowPopUp={setshowPopUp} />}
			{/* modal */}
			<div className="info space-y-2">
				<h1 className="body">Welcome Back {id}</h1>

				<h1 className="big-body">Pandora PLC</h1>
			</div>

			<div className="content_row grid grid-cols-3 gap-3 mt-12">
				{grid.map((item, index) => (
					<motion.div
						initial={{ opacity: 0, scale: 1.06 }}
						animate={{ opacity: 1, scale: 1.0 }}
						whileHover={{ scale: 1.02 }}
						transition={{ delay: index * 0.5, duration: 0.5 }}
						key={index}
						className="card-item flex  flex-col justify-between h-[450px]"
					>
						<div className="image_box bg-light-blue centered h-[100%] rounded-lg">
							<Image src={item.icon} width={232} height={230.35} alt="logo" />
						</div>

						<button
							onClick={() => router.push('/auth')}
							className="bg-dark-blue justify-center mb-3 mt-4 middle w-full px-6 p-3 rounded-lg"
						>
							<p className="text-white capitalize font-toma-reg">{item.name}</p>
							<Image src={arrowRight2} width={21.33} height={21} alt="logo" />
						</button>

						<div className="p-2 middle justify-between px-6">
							<h1 className="body w-[170px]">
								Number of {item.name} {item.name == 'campaign' && 'created'}:
							</h1>

							<h1 className="text-black font-bold  text-[40px] ">24</h1>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

DashBoard.getLayout = function getLayout(children: ReactElement) {
	return <DashBoardLayout>{children}</DashBoardLayout>;
};

export default DashBoard;
