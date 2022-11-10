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



function CreateCampaign({ click, data }: { click: any; data: any }) {
	const { verificationType, setVT, setID, IDType } = data;
	const [showDropDown, setShow] = React.useState(false);
	const [showIdDropDown, setIdShow] = React.useState(false);

	const IdTypeArray = ['bvn', 'nin', 'national passport', 'voters card', 'driver license'];

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
				<h1 className="big-body capitalize ">create capmpaign</h1>

				<div className="input_box  flex flex-col space-y-3">
					<label className="body" htmlFor="body">
						Campaign type
					</label>
					<div
						onClick={() => setIdShow(!showIdDropDown)}
						onChange={() => true}
						className="input_field-select p-4 cursor-pointer middle justify-between font-toma-reg border border-gray-200 rounded-lg"
						placeholder="Select ID Type"
					>
						<p className="fade text-gray-300">{IDType}</p>

						<Image src={arrowDown} width={21.33} height={21} alt="logo" />

						{showIdDropDown && (
							<div className="dropdown ">
								<div className="dropdown_list-wrapper">
									<ul className="dropdown_list p-4">
										{IdTypeArray.map((item, index) => (
											<li
												onClick={() => setID(item)}
												key={index}
												className="list_item text-sm capitalize border-b"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>

				{/*  */}

				<div className="input_box  flex flex-col space-y-3">
					<label className="body" htmlFor="body">
						Campaign Name
					</label>
					<input
						type="text"
						className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
						placeholder="Enter Campaign "
					/>
				</div>
				{/*  */}

				<div className="input_box  flex flex-col space-y-3">
					<label className="body" htmlFor="body">
						ID Verification type
					</label>
					<div
						onClick={() => setShow(!showDropDown)}
						onChange={() => true}
						className="input_field-select p-4 cursor-pointer middle justify-between font-toma-reg border border-gray-200 rounded-lg"
						placeholder="Select ID Type"
					>
						<p className="fade text-gray-300">{verificationType}</p>

						<Image src={arrowDown} width={21.33} height={21} alt="logo" />

						{showDropDown && (
							<div className="dropdown ">
								<div className="dropdown_list-wrapper">
									<ul className="dropdown_list p-4">
										{IdTypeArray.map((item, index) => (
											<li
												onClick={() => setVT(item)}
												key={index}
												className="list_item text-sm capitalize border-b"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>

				{/*  */}

				<div className="button_box w-full">
					<button
						onClick={(p) => click((p: any) => !p)}
						className="btn light middle w-full centered"
					>
						Contiue
					</button>
				</div>
			</div>
		</motion.div>
	);
}

function CampaignCreated({ click }: { click: any }) {

	const [notify, setNotify] = React.useState(false)

	function copyToCB(text: string) {
		navigator?.clipboard?.writeText(text);
		console.log('copied to clipboard');
		setNotify(true)

		setTimeout(() => {

			setNotify(false)
			
		},3000);
		
		// click((p: any) => !p)
	}
	
	
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
				<h1 className="big-body capitalize text-center">Campaign create Successfully</h1>

				<div className="input_box  flex flex-col space-y-3 relative">
					<label className="body" htmlFor="body">
						Campaign Code
					</label>
					<input
						type="email"
						className="input_field p-4 font-toma-reg border border-gray-200 rounded-lg"
						placeholder="http://authect.vercel.app/verify-page "
					/>

					{notify && (
						<motion.div 
						initial={{
							scale:0.4,
							opacity: 0
						}}
						animate={{
							scale:1,
							
							opacity: 1
						}}
						transition={{
							duration: 0.2
						}}
						
						className="info  bg-green-400 rounded-lg shadow-md right-0 p-2 px-4 bottom-0">
							<p className="text-lg text-white w-full text-center">
								Copied link to clipboard
							</p>
						</motion.div>
					)}
				</div>
				{/*  */}

				<div className="button_box w-full">
					<button
						onClick={(p) => copyToCB('http://authect.vercel.app/verify-page')}
						className="btn light middle w-full centered"
					>
						Copy Campaign Code
					</button>
				</div>
			</div>
		</motion.div>
	);
}

const PopUp = ({ setshowPopUp }: { setshowPopUp: any }) => {
	// const PopUp = React.forwardRef((props, ref) => {
	const { user, setUser } = useAuth();
	const [verificationType, setVT] = React.useState('Select verification Type ');
	const [IDType, setID] = React.useState('Select ID Type ');
	const [isCreating, seIsCreating] = React.useState(true);
	let slackname = 'obby dev';
	const cardRef = React.useRef(null);

	function backDrop(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		// console.log( cardRef.current);
		if (cardRef?.current && e?.target === cardRef.current) {
			setshowPopUp(false);
		}
		return;
	}

	

	return (
		<div className="popup fixed flex centered " ref={cardRef} onClick={(e) => backDrop(e)}>
			<AnimatePresence mode="wait">
				{isCreating ? (
					<CreateCampaign data={{ verificationType, setVT, IDType, setID }} click={seIsCreating} />
				) : (
					<CampaignCreated click={seIsCreating} />
				)}
			</AnimatePresence>
		</div>
	);
};
// () => router.push('/dashboard')

export default PopUp;
