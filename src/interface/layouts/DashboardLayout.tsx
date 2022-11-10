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
// import PopUp from './PopUp';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PopUp from './PopUp';

// @ts-ignore
const DashBoardLayout = ({ children }) => {
	const { user, setUser } = useAuth();
	const [showPopUp, setshowPopUp] = React.useState(false);
	const router = useRouter();

	const sideNav = [
		{
			name: 'home',
			link: '/dashboard',
			icon: home
		},

		{
			name: 'Campaign',
			link: '/campaigns',
			icon: home
		},

		{
			name: 'Settings',
			link: '/dashboard',
			icon: cog
		}
	];

	return (
		<div className="dashboard relative flex">
			<SEO title="dashboard" />
	
			{showPopUp && <PopUp setshowPopUp={setshowPopUp} />}

			<div className="dashboard_side py-14 px-8 flex flex-col justify-between">
				<div className="first_tab space-y-8">
					<Link href={'/'} className="logo-box cursor-pointer">
						<Image src={Logo} width={150} height={60} alt="logo" />
					</Link>

					<div className="nav ">
						<ul className="sidebar_nav_list space-y-4">
							{sideNav.map((item, index) => (
								<Link href={item.link} key={item.name}>
									<li
										className={`${
											item.name === 'home' && 'bg-light-blue'
										} list_item middle hover:bg-light-blue  font-toma-sb px-6 p-3 rounded-lg`}
									>
										<Image
											src={item.icon}
											width={21.33}
											height={21}
											alt="logo"
										/>
										<p className=" capitalize text-white ml-4 text-lg">
											{item.name}
										</p>
									</li>
								</Link>
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
			<div className="dashboard_main p-20 bg-green">{children}</div>
		</div>
	);
};

export default DashBoardLayout;
