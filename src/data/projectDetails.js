import img1 from '../assets/1.webp'
import img2 from '../assets/2.png'
import img3 from '../assets/3.webp'
import img4 from '../assets/project11.webp'

const projectData = [
  {
    id: "1",
    name: "Sneakerx",
    imgSrc: img1,
    info: "Sneakerx is a Full-Stack Web App built using MERN stack. User can log in into the store to make their purchases. Razorpay has been integrated to handle the payments. User can search, sort & filter the products. All the files are store on AWS S3",
    email: "iwebtrends@gmail.com",
    password: "123123",
    repo: "https://github.com/karanch577/Sneakerx-frontend",
    liveLink: "https://sneakerx-frontend.vercel.app",
    techStack: ["ReactJs", "ReduxJs", "Tailwind CSS","ExpressJs", "MongoDB"]
  },
  {
    id: "2",
    name: "sneakerxDashboard",
    imgSrc: img2,
    info: "This is the Admin Dashboard for Sneakerx. You can manage all the users, products, categories, coupons, etc. from this admin dashboard. ",
    email: "karandemo577@gmail.com",
    password: "543219",
    repo: "https://github.com/karanch577/Sneakerx-admin",
    liveLink: "https://sneakerx-admin.vercel.app",
    techStack: ["NextJs", "Zustand", "Tanstack Query", "Typescript", "Tailwind CSS"]
  },
  {
    id: "3",
    name: "shopifyClone",
    imgSrc: img3,
    info: "Shopify.in clone made using TailwindCSS. It is fully responsive for all screens.",
    repo: "https://github.com/karanch577/shopify.in-clone",
    liveLink: "https://shopify-in-clone.vercel.app",
    techStack: ["HTML", "Tailwind CSS"]
  },
  {
    id: "4",
    name: "hosting Company",
    imgSrc: img4,
    info: "A modern, fully-responsive landing page for a hosting company. It is built using HTML, CSS and Javascript.",
    repo: "https://github.com/karanch577/css-project-11",
    liveLink: "https://css-project-11.vercel.app",
    techStack: ["HTML", "CSS", "Javascript"]
  },
];


export default projectData;