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
import React from 'react';
import {useRouter} from 'next/router';

const DashBoard = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	const [showPopUp, setshowPopUp] = React.useState(false);
	const router = useRouter()

	const sideNav = [
		{
			name: 'home',
			link: './',
			icon: home
		},

		{
			name: 'Campaign',
			link: './',
			icon: home
		},

		{
			name: 'Settings',
			link: './',
			icon: cog
		}
	];

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

	return (
		<div className="dashboard relative flex">
			<SEO title="auth" />
			{/* <Text text="name"/>
			<Button text='button'/> */}
			{/* modal */}
			{showPopUp && <PopUp setshowPopUp={setshowPopUp} />}
			{/* modal */}

			<div className="dashboard_side py-14 px-8 flex flex-col justify-between">
				<div className="first_tab space-y-8">
					<div className="logo-box">
						<Image src={Logo} width={150} height={60} alt="logo" />
					</div>

					<div className="nav ">
						<ul className="sidebar_nav_list space-y-4">
							{sideNav.map((item, index) => (
								<li
									key={item.name}
									className={`${
										item.name === 'home' && 'bg-light-blue'
									} list_item middle hover:bg-light-blue  font-toma-sb px-6 p-3 rounded-lg`}
								>
									<Image src={item.icon} width={21.33} height={21} alt="logo" />
									<p className=" capitalize text-white ml-4 text-lg">{item.name}</p>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="second_tab">
					<ul className="sidebar_nav_list space-y-4">
						<li
							onClick={() => setshowPopUp(true)}
							className={`$ list_item middle bg-white -toma-sb px-6 p-3 rounded-lg`}
						>
							<Image src={pen} width={21.33} height={21} alt="logo" />
							<p className=" capitalize ml-4 text-black font">{'create camapaing'}</p>
						</li>

						<li
							onClick={() => router.push('./')}
							className={`list_item middle cursor-pinter  font-toma-sb px-6 p-3 rounded-lg`}
						>
							<Image src={logput} width={21.33} height={21} alt="logo" />
							<p className=" capitalize text-white ml-4 ">{'sign out'}</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="dashboard_main p-20 bg-green">
				<div className="info space-y-2">
					<h1 className="body">Welcome Back</h1>

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
							className="card-item flex  flex-col justify-between h-[390px]"
						>
							<div className="image_box bg-light-blue centered h-[85%] rounded-lg">
								<Image src={item.icon} width={232} height={230.35} alt="logo" />
							</div>

							<button
								onClick={() => router.push('/auth')}
								className="bg-dark-blue justify-center middle w-full px-6 p-3 rounded-lg"
							>
								<p className="text-white font-toma-reg">{item.name}</p>
								<Image src={arrowRight2} width={21.33} height={21} alt="logo" />
							</button>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
