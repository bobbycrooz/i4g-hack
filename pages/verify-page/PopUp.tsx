import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import SEO from 'src/interface/components/SEO';
import Logo from '@images/Logo-white.svg';
import item1 from '@images/item1.png';
import item2 from '@images/item2.svg';
import item3 from '@images/item3.png';
import arrowDown from '@images/arrow-down.svg';
import home from '@images/home.svg';
import cog from '@images/cog.svg';
import logput from '@images/logout.svg';
import pen from '@images/pen.svg';
import { useAuth } from '@contexts/auth-context';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const transObj = {
	initial: { opacity: 0.5, x: -10 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 100 }
};

function Info({ click, data }: { click: any; data: any }) {
	const { verificationType, setVT } = data;
	const [showDropDown, setShow] = React.useState(false);

	return (
		<motion.div
			variants={transObj}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
			className="popup_card bg-white rounded-lg p-16 w-[700px] "
		>
			<div className="details_box   space-y-8">
				<h1 className="big-body capitalize ">Identity Verification</h1>

				<p className="body">
					Enter your identification information. This is a mandatory process of identifying and
					verifying the client&apos;s identity and to migrate to a micro or major influencer type.
				</p>

				<p className="body">Click on the “Connect to Authect” button to complete your verification.</p>

				{/*  */}

				<div className="button_box w-full">
					<button onClick={() => click(2)} className="btn light middle w-full centered">
						Connect to Authect
					</button>
				</div>
			</div>
		</motion.div>
	);
}

function Details({ click, data }: { click: any; data: any }) {
	const { verificationType, setVT } = data;
	const [hasName, setHasName] = React.useState(false);

	return (
		<motion.div
			variants={transObj}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
			className="popup_card bg-white rounded-lg p-16 w-[700px] "
		>
			<div className="details_box   space-y-8">
				<h1 className="big-body capitalize ">Basic information</h1>

				<div className="input_box  flex flex-col space-y-3">
					<label className="body" htmlFor="body">
						Name
					</label>
					<input
						type="text"
						className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
						placeholder="Enter your full name"
					/>
				</div>

				{/*  */}

				<div className="button_box w-full">
					<button onClick={() => click(3)} className="btn light middle w-full centered">
						Continue
					</button>
				</div>
			</div>
		</motion.div>
	);
}

function DetailsID({ click, data }: { click: any; data: any }) {
	const { verificationType, setVT } = data;
	const [hasName, setHasName] = React.useState(false);

	return (
		<motion.div
			variants={transObj}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
			className="popup_card bg-white rounded-lg p-16 w-[700px] "
		>
			<div className="details_box   space-y-8">
				<h1 className="big-body capitalize ">ID Number</h1>

				<div className="input_box  flex flex-col space-y-3">
					<label className="body" htmlFor="body">
						BVN Number
					</label>
					<input
						type="text"
						className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
						placeholder="Enter your BVN Number"
					/>
				</div>

				{/*  */}

				<div className="button_box w-full">
					<button onClick={() => click(4)} className="btn light middle w-full centered">
						Continue
					</button>
				</div>
			</div>
		</motion.div>
	);
}

function CampaignCreated({ click }: { click: any }) {
	return (
		<motion.div
			variants={transObj}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
			className="popup_card bg-white rounded-lg p-16 "
		>
			<div className="details_box   space-y-4">
				<h1 className="big-body capitalize text-center">Verification Process Completed</h1>

				{/*  */}

				<div className="button_box w-full">
					<button onClick={() => click(false)} className="btn light middle w-full centered">
						Close
					</button>
				</div>
			</div>
		</motion.div>
	);
}

const PopUp = ({ setshowPopUp }: { setshowPopUp: any }) => {
	// const PopUp = React.forwardRef((props, ref) => {
	const { user, setUser } = useAuth();
	const [verificationType, setVT] = React.useState('Select ID Type ');
	const [isCreating, seIsCreating] = React.useState(true);
	const [currentMode, setCurrentMode] = React.useState(1);
	let slackname = 'obby dev';
	const cardRef = React.useRef(null);

	function backDrop(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		// console.log( cardRef.current);

		if (cardRef?.current && e?.target === cardRef.current) {
			setshowPopUp(false);
		}

		return;
	}

	function toggleMode() {
		switch (currentMode) {
			case 1:
				return <Info data={{ verificationType, setVT }} click={setCurrentMode} />;

			case 2:
				return <Details data={{ verificationType, setVT }} click={setCurrentMode} />;
			case 3:
				return <DetailsID data={{ verificationType, setVT }} click={setCurrentMode} />;
			case 4:
				return <CampaignCreated click={setshowPopUp} />;

			default:
				return <Details data={{ verificationType, setVT }} click={setCurrentMode} />;
		}
	}

	return (
		<div className="popup fixed flex centered " ref={cardRef} onClick={(e) => backDrop(e)}>
			<AnimatePresence mode="wait">{toggleMode()}</AnimatePresence>
		</div>
	);
};
// () => router.push('/dashboard')

export default PopUp;
