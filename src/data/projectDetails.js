import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/project11.webp'

const projectData = [
  {
    id: "1",
    name: "phonezone",
    imgSrc: img1,
    info: "Phonezone is a Full-Stack Web App built using MERN stack. User can log in into the store to make their purchases. Razorpay has been integrated to handle the payments. User can search, sort & filter the products. All the files are store on AWS S3",
    userEmail: "karan1@gmail.com",
    userPassword: "123123",
    adminEmail: "karandemo577@gmail.com",
    adminPassword: "123123",
    repo: "https://github.com/karanch577/ecommerce-frontend",
    liveLink: "https://phonezone.vercel.app",
    techStack: ["React", "Tailwind CSS","ExpressJs", "MongoDB"]
  },
  {
    id: "2",
    name: "paytmClone",
    imgSrc: img2,
    info: "This is a Paytm clone made using TailwindCSS. It is fully responsive for all screens. Paytm serves different site for smartphone and desktop. This is the clone of the desktop site and made it mobile responsive.",
    repo: "https://github.com/karanch577/paytm-clone-tailwindcss",
    liveLink: "https://paytm-clone-karanch.netlify.app",
    techStack: ["HTML", "Tailwind CSS"]
  },
  {
    id: "3",
    name: "shopifyClone",
    imgSrc: img3,
    info: "Shopify.in clone made using TailwindCSS. It is fully responsive for all screens.",
    repo: "https://github.com/karanch577/shopify.in-clone",
    liveLink: "https://shopify-clone-karanch.netlify.app",
    techStack: ["HTML", "Tailwind CSS"]
  },
  {
    id: "4",
    name: "hosting Company",
    imgSrc: img4,
    info: "A modern, fully-responsive landing page for a hosting company. It is built using HTML, CSS and Javascript.",
    repo: "https://github.com/karanch577/css-project-11",
    liveLink: "https://css-projects-11.netlify.app",
    techStack: ["HTML", "CSS", "Javascript"]
  },
];


export default projectData;