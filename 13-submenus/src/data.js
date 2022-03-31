import { BsFillCreditCardFill } from "react-icons/bs";
import { FaBook, FaBriefcase } from "react-icons/fa";

export const dataSubmenu = [
	{
		menu: "Products",
		submenu: [
			{
				name: "Payment",
				url: "index.html",
				icon: <BsFillCreditCardFill />,
			},
			{
				name: "Terminal",
				url: "index.html",
				icon: <BsFillCreditCardFill />,
			},
			{
				name: "Connect",
				url: "index.html",
				icon: <BsFillCreditCardFill />,
			},
		],
	},
	{
		menu: "Developers",
		submenu: [
			{
				name: "Plugins",
				url: "index.html",
				icon: <FaBook />,
			},
			{
				name: "Libraries",
				url: "index.html",
				icon: <FaBook />,
			},
			{
				name: "Help",
				url: "index.html",
				icon: <FaBook />,
			},
			{
				name: "Billing",
				url: "index.html",
				icon: <FaBook />,
			},
		],
	},
	{
		menu: "Company",
		submenu: [
			{
				name: "About",
				url: "index.html",
				icon: <FaBriefcase />,
			},
			{
				name: "Customers",
				url: "index.html",
				icon: <FaBriefcase />,
			},
		],
	},
];
