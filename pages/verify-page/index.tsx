import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import LogoAnimate from '@images/Logo.svg';
import v1 from '@images/verify1.png';
import React from 'react';
import v2 from '@images/verify2.png';
import v3 from '@images/verfy3.png';
import arrowDown from '@images/arrow-down.svg';
import PopUp from './PopUp';
import arrowRight from '@images/arrow-right.svg';

import { useAuth } from '@contexts/auth-context';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Verify = (props: { isMobile: any }) => {
	const { user, setUser } = useAuth();
	let slackname = 'obby dev';
	const router = useRouter();
	const [showPopUp, setshowPopUp] = React.useState(false);

	const grid = [
		{
			name: 'Verify your personal details',
			link: './',
			icon: v1
		},

		{
			name: 'Verify your document information',
			link: './',
			icon: v2
		},

		{
			name: 'Verify your contact information',
			link: './',
			icon: v3
		}
	];

	return (
		<div className="verify relative">
			<SEO title="home" />
			{/* <Text text="name"/>
			<Button text='button'/> */}

			{showPopUp && <PopUp setshowPopUp={setshowPopUp} />}

			<div className="navbar  h-[80px] bg-white flex items-center justify-between px-[105px]">
				<div className="logo-box cursor-pointer">
					<Link href="/">
						<Image src={LogoAnimate} width={150} height={60} alt="logo" />
					</Link>
				</div>

				<div className="nav-list  p-2">
					<ul className="list middle space-x-8">
						<li className="list-item middle ">
							<p className="text cap pr-2">products</p>
							<Image src={arrowDown} width={20} height={20} alt="logo" />
						</li>

						<li className="list-item middle ">
							<p className="text cap pr-2">products</p>
							<Image src={arrowDown} width={20} height={20} alt="logo" />
						</li>

						<li className="list-item middle">
							<p className="text cap pr-2">products</p>
							<Image src={arrowDown} width={20} height={20} alt="logo" />
						</li>
					</ul>
				</div>
			</div>

			{/*  */}
			<div className="background-partern mt-[80px]  absolute top-0 left-0 w-full h-full flex items-center justify-center">
				<div className="main_content  p-2 flex flex-col items-center space-y-9">
					<div className="row_one  flex items-center justify-center">
						<div className="center_box w-[500px] text-center">
							<h1 className="text-white font-semibold font-toma-sb text-3xl ">
								Verify your Information in less than 3 minutes
							</h1>
							<div className="button_box w-full mt-6">
								<button
									onClick={(p) => setshowPopUp((p: any) => !p)}
									className="btn light middle w-full centered"
								>
									<p className="mr-4">Verify Me</p>

									<Image src={arrowRight} width={20} height={20} alt="logo" />
								</button>
							</div>
						</div>
					</div>

					{/*  */}
					<div className="row_two text-center my-16">
						<h1 className="text-white font-semibold font-toma-sb text-xl">what we will do</h1>

						<div className="gap-11  grid grid-cols-3 mt-6">
							{grid.map((item, index) => (
								<div
									key={index}
									className="item_list text-center w-[360px] rounded-lg bg-white shadow-md p-6 "
								>
									<div className="image_box">
										<Image
											src={item.icon}
											width={115}
											height={104}
											alt="logo"
										/>
									</div>

									<h1 className="names mt-3 font-toma-reg font-medium">
										{item.name}
									</h1>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Verify;
