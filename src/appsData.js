// Icons import
import birthdayImg from './imgs/apps/BrithdayApp.png'
import tourImg from './imgs/apps/Tour.png'
import reviewImg from './imgs/apps/Reviews.png'
import accordionImg from './imgs/apps/accordion.png'
import menuImg from './imgs/apps/Menu.png'
import tabsImg from './imgs/apps/tabs.png'
import pImg from './imgs/apps/paragraph.png'
import clrAppImg from './imgs/apps/colorapp.png'
import groceryImg from './imgs/apps/grocery.png'
import navImg from './imgs/apps/navbar.png'
import sidebarImg from './imgs/apps/sidebar.png'
import stripeImg from './imgs/apps/stripe.png'
import cartImg from './imgs/apps/cart.png'
import cocktailLogo from './imgs/apps/cocktaillogo.svg'
//Compnents import
import BirthdayReminder from './screens/BirthdayReminder/BirthdayReminder'
import Tour from './screens/Tour/Tour'
import Reviews from './screens/Reviews/Reviews'
import Accordion from './screens/accordion/Accordion'
import Menu from './screens/Menu/Menu'
import Tab from './screens/tabs/Tab'
import Slider from './screens/slider/Slider'
import Paraghraph from './screens/paragraph/Paraghraph'
import ColorGenerator from './screens/colorGenerator/ColorGenerator'
import GroceryBud from './screens/grocerybud/GroceryBud'
import NavBar from './screens/simpleNavbar/NavBar'
import SideBarMain from './screens/Sidebar/SideBarMain'
import Main from './screens/stripemenu/components/Main'
import CartMain from './screens/cart/CartMain'
import CocktailApp from './screens/cocktails/CocktailApp'
import About from './screens/cocktails/pages/About'
import Err from  './screens/cocktails/pages/Err'

export default [
	{
		name: 'Birthday Riminder',
		image: birthdayImg,
		link: '/birthday-reminder',
		comp: <BirthdayReminder />,
	},
	{
		name: 'Tour',
		image: tourImg,
		link: '/tour',
		comp: <Tour />,
	},
	{
		name: 'Reviews',
		image: reviewImg,
		link: '/reviews',
		comp: <Reviews />,
	},

	{
		name: 'Accordion',
		image: accordionImg,
		link: '/accordion',
		comp: <Accordion />,
	},
	{
		name: 'Menu',
		image: menuImg,
		link: '/menu',
		comp: <Menu />,
	},
	{
		name: 'Tabs',
		image: tabsImg,
		link: '/tabs',
		comp: <Tab />,
	},
	{
		name: 'Paragraph',
		image: pImg,
		link: '/paragraph',
		comp: <Paraghraph />,
	},
	{
		name: 'Color Generator',
		image: clrAppImg,
		link: '/colors',
		comp: <ColorGenerator />,
	},
	{
		name: 'Grocery Bud',
		image: groceryImg,
		link: '/grocerybud',
		comp: <GroceryBud />,
	},
	{
		name: 'Simple Nav',
		image: navImg,
		link: '/simple-nav',
		comp: <NavBar />,
	},
	{
		name: 'SideBar',
		image: sidebarImg,
		link: '/sidebar',
		comp: <SideBarMain />,
	},
	{
		name: 'Stripe',
		image: stripeImg,
		link: '/stripe-menu',
		comp: <Main />,
	},
	{
		name: 'Cart',
		image: cartImg,
		link: '/cart',
		comp: <CartMain />,
	},
    {
		name: 'Cocktails',
		image: cocktailLogo,
		link: '/cocktails',
		comp: <CocktailApp />,
        childRoute:[
            {
                component:<About/>,
                link:'/cocktail/about'
            }, {
                component:<Err/>,
                link:'/cocktail/error'
            }
        ]
	},
]
