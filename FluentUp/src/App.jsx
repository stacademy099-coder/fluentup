import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Link,useLocation} from "react-router-dom";
import {motion} from "framer-motion";

/* ---------------- SCROLL TO TOP ---------------- */
function ScrollToTop(){
 const {pathname}=useLocation();
 useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[pathname]);
 return null;
}

/* ---------------- NAVBAR ---------------- */
function Navbar(){
 const [open,setOpen]=useState(false);
 return(
  <nav className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <Link to="/" className="text-2xl font-extrabold text-indigo-600">FluentUp</Link>

    <button className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>☰</button>

    <div className="hidden md:flex gap-6 text-sm font-semibold">
     <Link className="hover:text-indigo-600" to="/">Home</Link>
     <Link className="hover:text-indigo-600" to="/about">About</Link>
     <Link className="hover:text-indigo-600" to="/features">Features</Link>
     <Link className="hover:text-indigo-600" to="/pricing">Pricing</Link>
     <Link className="hover:text-indigo-600" to="/safety">Safety</Link>
     <Link className="hover:text-indigo-600" to="/contact">Contact</Link>
     <Link className="hover:text-indigo-600" to="/login">Login</Link>
    </div>

   </div>

   {open && (
    <div className="md:hidden px-6 pb-4 flex flex-col gap-3 font-semibold">
     <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
     <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
     <Link to="/features" onClick={()=>setOpen(false)}>Features</Link>
     <Link to="/pricing" onClick={()=>setOpen(false)}>Pricing</Link>
     <Link to="/safety" onClick={()=>setOpen(false)}>Safety</Link>
     <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
     <Link to="/login" onClick={()=>setOpen(false)}>Login</Link>
    </div>
   )}

  </nav>
 )
}


/* ---------------- HERO RANDOM TALK ---------------- */
function RandomTalkBox(){
 const [status,setStatus]=useState("idle");

 const findUser=()=>{
  setStatus("searching");
  setTimeout(()=>setStatus("connected"),2500);
 }

 return(
  <motion.div
   initial={{scale:0.9,opacity:0}}
   animate={{scale:1,opacity:1}}
   className="bg-white shadow-2xl rounded-3xl p-12 max-w-xl mx-auto"
  >

   <h3 className="text-3xl font-bold mb-4">Start Random Conversation</h3>

   <p className="text-gray-600 mb-8">
    Instantly connect with people around the world and start a
    real voice or video conversation.
   </p>

   {status==="idle" &&(
    <button
     onClick={findUser}
     className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
    >
     Find Someone To Talk
    </button>
   )}

   {status==="searching" &&(
    <p className="text-indigo-600 font-semibold">Searching for conversation partner...</p>
   )}

   {status==="connected" &&(
    <div className="space-y-4">
     <p className="text-green-600 font-semibold">Partner Connected</p>

     <div className="flex gap-4 justify-center">
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg">Start Call</button>
      <button onClick={()=>setStatus("idle")} className="bg-red-500 text-white px-6 py-3 rounded-lg">End</button>
     </div>
    </div>
   )}

  </motion.div>
 )
}

/* ---------------- STATS SECTION ---------------- */
function StartupSection(){
 return(
  <section className="bg-white py-20">
   <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

    <div className="p-6">
     <h3 className="text-2xl font-bold text-indigo-600">Global Communication</h3>
     <p className="text-gray-600 mt-2">FluentUp aims to connect people across different countries to practice real conversations.</p>
    </div>

    <div className="p-6">
     <h3 className="text-2xl font-bold text-indigo-600">Startup Platform</h3>
     <p className="text-gray-600 mt-2">FluentUp is a growing startup currently developing advanced communication technology.</p>
    </div>

    <div className="p-6">
     <h3 className="text-2xl font-bold text-indigo-600">Future Features</h3>
     <p className="text-gray-600 mt-2">Upcoming updates include better matching algorithms, moderation systems and mobile applications.</p>
    </div>

   </div>
  </section>
 )
}


/* ---------------- HOME ---------------- */
function Home(){
 return(

  <div>

   <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">

    <div className="max-w-7xl mx-auto px-6 py-32 text-center">

     <h1 className="text-6xl font-extrabold mb-6">
      Speak With People Worldwide
     </h1>

     <p className="max-w-2xl mx-auto mb-12">
      FluentUp is a global communication platform where people
      connect randomly and practice conversations.
     </p>

     <RandomTalkBox/>

    </div>

   </section>

   <StartupSection/>

   <FeaturesSection/>

   <Testimonials/>

   <FAQ/>

  </div>
 )
}

/* ---------------- FEATURES SECTION ---------------- */
function FeaturesSection(){

 const features=[
 {title:"Random Matching",desc:"Instant algorithm connects users randomly."},
 {title:"Voice Calls",desc:"High quality voice conversations."},
 {title:"Video Communication",desc:"Optional face to face chat."},
 {title:"Language Practice",desc:"Improve English and speaking skills."},
 {title:"Global Community",desc:"Meet users from many countries."},
 {title:"Safety Tools",desc:"Reporting and moderation system."}
 ];

 return(

  <section className="bg-gray-50 py-24">

   <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>

    <div className="grid md:grid-cols-3 gap-10">

     {features.map((f,i)=>(

      <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">

       <h3 className="text-xl font-semibold mb-3">{f.title}</h3>

       <p className="text-gray-600">{f.desc}</p>

      </div>

     ))}

    </div>

   </div>

  </section>
 )
}

/* ---------------- SAFETY PAGE ---------------- */
function Safety(){
 return(

  <Page title="Platform Safety & Moderation">

   <p>
    FluentUp focuses on providing a safe and respectful
    communication environment. Our moderation systems
    monitor suspicious activities and users can report
    inappropriate behavior.
   </p>

   <ul className="list-disc pl-6 space-y-2">

    <li>User reporting system</li>
    <li>Account blocking feature</li>
    <li>Community guidelines enforcement</li>
    <li>Moderation monitoring tools</li>

   </ul>

  </Page>
 )
}

/* ---------------- PRICING ---------------- */
function Pricing(){

 const openPayment=(plan)=>{

  // UPI deep links sometimes get blocked in desktop browsers.
  // So we open them in a new tab and also provide a fallback payment page.

  const monthlyLink="upi://pay?pa=7352460579@upi&pn=FluentUp&am=199&cu=INR&tn=FluentUp Monthly Plan";
  const yearlyLink="upi://pay?pa=7352460579@upi&pn=FluentUp&am=499&cu=INR&tn=FluentUp Yearly Plan";

  const link = plan==='monthly' ? monthlyLink : yearlyLink;

  const newWindow = window.open(link,"_blank");

  // fallback if browser blocks UPI
  if(!newWindow){
    alert("Your browser blocked the payment app. Please open this website on your mobile device to complete the payment using PhonePe, Google Pay, or Paytm.");
  }

 };

 return(

  <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-24">

   <div className="max-w-6xl mx-auto px-6 text-center">

    <h1 className="text-4xl font-bold mb-4">Simple Pricing</h1>

    <p className="text-gray-600 mb-16">
     Choose a plan to unlock premium FluentUp features and
     unlimited random conversations.
    </p>

    <div className="grid md:grid-cols-2 gap-10">

     {/* MONTHLY */}
     <div className="bg-white rounded-2xl shadow-xl p-10 hover:scale-105 transition">

      <h2 className="text-2xl font-bold mb-4">Monthly Plan</h2>

      <p className="text-5xl font-extrabold text-indigo-600 mb-6">₹199</p>

      <ul className="text-gray-600 space-y-2 mb-8">
       <li>✔ Unlimited Random Talks</li>
       <li>✔ Video Conversation Access</li>
       <li>✔ Priority Matching</li>
       <li>✔ Early Access Features</li>
      </ul>

      <button
       onClick={()=>openPayment('monthly')}
       className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
      >
       Pay ₹199
      </button>

     </div>


     {/* YEARLY */}
     <div className="bg-white rounded-2xl shadow-xl p-10 hover:scale-105 transition border-2 border-purple-500">

      <h2 className="text-2xl font-bold mb-4">Yearly Plan</h2>

      <p className="text-5xl font-extrabold text-purple-600 mb-6">₹499</p>

      <ul className="text-gray-600 space-y-2 mb-8">
       <li>✔ All Monthly Features</li>
       <li>✔ Best Value Plan</li>
       <li>✔ Priority Support</li>
       <li>✔ Future Premium Features</li>
      </ul>

      <button
       onClick={()=>openPayment('yearly')}
       className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
      >
       Pay ₹499
      </button>

     </div>

    </div>

   </div>

  </div>

 )

}


/* ---------------- TESTIMONIALS ---------------- */
function Testimonials(){

 const list=[
 {name:"Rahul",text:"Great platform for speaking practice."},
 {name:"Amit",text:"I meet people from many countries."},
 {name:"Sarah",text:"Best communication platform."}
 ];

 return(

  <section className="bg-purple-50 py-24">

   <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-14">User Testimonials</h2>

    <div className="grid md:grid-cols-3 gap-10">

     {list.map((t,i)=>(

      <div key={i} className="bg-white p-8 rounded-2xl shadow">

       <p className="text-gray-600 mb-4">"{t.text}"</p>

       <p className="font-semibold text-indigo-600">{t.name}</p>

      </div>

     ))}

    </div>

   </div>

  </section>
 )
}

/* ---------------- FAQ ---------------- */
function FAQ(){

 const list=[
 {q:"What is FluentUp?",a:"A platform for global speaking practice."},
 {q:"Is subscription required?",a:"Basic access may be free but premium features require subscription."},
 {q:"How payments work?",a:"Payments are securely processed through trusted payment gateways."}
 ];

 return(

  <section className="py-24 bg-white">

   <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-14">Frequently Asked Questions</h2>

    <div className="space-y-6">

     {list.map((f,i)=>(

      <div key={i} className="border rounded-xl p-6 hover:shadow-lg">

       <h3 className="font-semibold mb-2">{f.q}</h3>

       <p className="text-gray-600">{f.a}</p>

      </div>

     ))}

    </div>

   </div>

  </section>
 )
}

/* ---------------- PAGE WRAPPER ---------------- */
function Page({title,children}){
 return(

  <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">

   <div className="max-w-5xl mx-auto px-6 py-24">

    <h1 className="text-4xl font-bold mb-8">{title}</h1>

    <div className="text-gray-700 leading-relaxed space-y-4">
     {children}
    </div>

   </div>

  </div>
 )
}

/* ---------------- ABOUT ---------------- */
function About(){
 return(
  <Page title="About FluentUp">

   <p>
    FluentUp is a modern communication startup focused on helping
    people improve speaking skills through real conversations with
    individuals from different parts of the world. The platform
    allows users to connect randomly and communicate using voice
    and video technology.
   </p>

   <p>
    The main goal of FluentUp is to create a global environment
    where users can practice languages, build confidence in
    speaking and meet new people. Unlike traditional social
    media platforms, FluentUp focuses specifically on real
    communication and meaningful conversations.
   </p>

   <p>
    FluentUp is currently in its development phase as a startup
    project. New features, security improvements and advanced
    communication tools are continuously being developed to
    improve the user experience.
   </p>

   <p>
    Founder: <strong>Shekh Eklakh</strong>
   </p>

   <p>
    The project is independently developed and managed from India
    with the vision of building a global speaking community.
   </p>

   <p>
    Future roadmap includes mobile applications, improved
    moderation systems, smart matching technology and
    enhanced privacy protections for users.
   </p>

  </Page>
 )
}


/* ---------------- PRIVACY ---------------- */
function Privacy(){
 return(

  <Page title="Privacy Policy">

   <p>
    FluentUp is committed to protecting the privacy of its users. This
    Privacy Policy explains how information is collected, used and
    protected when users access the FluentUp website and related
    services. Because FluentUp is a developing communication platform,
    policies may be updated as the service evolves.
   </p>

   <h2 className="font-semibold text-xl mt-6">Information We Collect</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>Email address used during account registration.</li>
    <li>Basic profile information provided voluntarily by the user.</li>
    <li>Device information such as browser type, operating system and IP address.</li>
    <li>Usage data including pages visited, time spent and feature interaction.</li>
    <li>Communication logs necessary for service stability and abuse prevention.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">How We Use Information</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>To operate and maintain the FluentUp platform.</li>
    <li>To improve communication matching algorithms.</li>
    <li>To provide customer support and respond to inquiries.</li>
    <li>To monitor misuse, spam or harmful activities.</li>
    <li>To improve platform performance and reliability.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Data Protection</h2>
   <p>
    FluentUp implements reasonable technical and organizational
    measures to protect personal information from unauthorized
    access, misuse or disclosure.
   </p>

   <h2 className="font-semibold text-xl mt-6">Third Party Services</h2>
   <p>
    Payment processing and certain infrastructure services may
    be handled by trusted third‑party providers such as payment
    gateways or hosting providers.
   </p>

   <h2 className="font-semibold text-xl mt-6">User Rights</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>Users may request account deletion.</li>
    <li>Users may update profile information.</li>
    <li>Users may contact support regarding data concerns.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Policy Updates</h2>
   <p>
    Since FluentUp is an actively developing web application,
    this policy may be updated periodically to reflect new
    features, security improvements and legal requirements.
   </p>

  </Page>
 )
}


/* ---------------- TERMS ---------------- */
function Terms(){
 return(

  <Page title="Terms & Conditions">

   <p>
    These Terms and Conditions govern the use of the FluentUp
    website and communication platform. By accessing or using
    the platform, users agree to comply with these terms.
   </p>

   <h2 className="font-semibold text-xl mt-6">Platform Usage</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>Users must be at least 18 years old or meet legal age requirements.</li>
    <li>The platform must be used only for lawful communication purposes.</li>
    <li>Users must respect other participants during conversations.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Prohibited Activities</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>Harassment, abuse or threatening behavior.</li>
    <li>Sharing illegal or harmful content.</li>
    <li>Attempting to exploit or disrupt the platform.</li>
    <li>Using automated bots or scraping systems.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Account Responsibility</h2>
   <p>
    Users are responsible for maintaining the confidentiality
    of their account information and activities performed
    through their account.
   </p>

   <h2 className="font-semibold text-xl mt-6">Service Availability</h2>
   <p>
    FluentUp is currently a developing web application and
    features may evolve over time. Temporary interruptions
    may occur during updates or maintenance.
   </p>

   <h2 className="font-semibold text-xl mt-6">Termination</h2>
   <p>
    FluentUp reserves the right to suspend or terminate
    accounts that violate these terms or engage in harmful
    activity on the platform.
   </p>

   <h2 className="font-semibold text-xl mt-6">Limitation of Liability</h2>
   <p>
    FluentUp provides a communication platform and does not
    control user generated conversations. Users interact
    with others at their own discretion.
   </p>

  </Page>
 )
}


/* ---------------- REFUND ---------------- */
function Refund(){
 return(

  <Page title="Refund Policy">

   <p>
    This Refund Policy explains how subscription payments
    and refunds are handled for FluentUp premium services.
   </p>

   <h2 className="font-semibold text-xl mt-6">Subscription Plans</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>Monthly Plan – ₹199</li>
    <li>Yearly Plan – ₹499</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Refund Eligibility</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>If a payment is deducted due to a technical error.</li>
    <li>If the service cannot be activated after payment.</li>
    <li>If duplicate payments are made accidentally.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Non‑Refundable Situations</h2>
   <ul className="list-disc pl-6 space-y-2">
    <li>Change of mind after subscription activation.</li>
    <li>Violation of platform policies.</li>
    <li>Misuse of premium features.</li>
   </ul>

   <h2 className="font-semibold text-xl mt-6">Refund Request Process</h2>
   <p>
    Users may contact support through the official email
    address within a reasonable time period after payment
    to request assistance regarding billing issues.
   </p>

   <h2 className="font-semibold text-xl mt-6">Processing Time</h2>
   <p>
    If approved, refunds may take several business days
    depending on the payment gateway and banking system.
   </p>

  </Page>
 )
}


/* ---------------- CONTACT ---------------- */
function Contact(){

 const [submitted,setSubmitted]=useState(false);

 const handleSubmit=(e)=>{
  e.preventDefault();
  setSubmitted(true);
 };

 return(

  <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-24">

   <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">

    {/* CONTACT INFO */}
    <div className="space-y-8">

     <h1 className="text-4xl font-bold">Contact FluentUp</h1>

     <p className="text-gray-600">
      If you have any questions, business inquiries, partnership
      opportunities or support issues, you can contact the
      FluentUp team using the information below.
     </p>

     <div className="space-y-6">

      <a
       href="tel:7352460579"
       className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
      >
       <h3 className="font-semibold text-lg">📞 Call Support</h3>
       <p className="text-gray-600">7352460579</p>
       <p className="text-sm text-gray-500">Tap to call directly</p>
      </a>

      <a
       href="mailto:eklakhshekh653@gmail.com"
       className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
      >
       <h3 className="font-semibold text-lg">📧 Email Support</h3>
       <p className="text-gray-600">eklakhshekh653@gmail.com</p>
       <p className="text-sm text-gray-500">Tap to send email</p>
      </a>

      <a
       href="https://wa.me/917352460579"
       target="_blank"
       rel="noreferrer"
       className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
      >
       <h3 className="font-semibold text-lg">💬 WhatsApp Chat</h3>
       <p className="text-gray-600">Start conversation on WhatsApp</p>
      </a>

      <div className="bg-white shadow-lg rounded-xl p-6">
       <h3 className="font-semibold text-lg">📍 Office Address</h3>
       <p className="text-gray-600">
        Ward No 04 Tellua Shekhtoli
        West Champaran
        Bihar 845459
        India
       </p>
      </div>

     </div>

    </div>


    {/* CONTACT FORM */}
    <div className="bg-white shadow-xl rounded-2xl p-10">

     <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

     {!submitted ? (

     <form onSubmit={handleSubmit} className="space-y-5">

      <input
       required
       placeholder="Your Name"
       className="w-full border rounded-lg p-3"
      />

      <input
       required
       type="email"
       placeholder="Your Email"
       className="w-full border rounded-lg p-3"
      />

      <textarea
       required
       placeholder="Your Message"
       rows="5"
       className="w-full border rounded-lg p-3"
      />

      <button
       className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
       Submit Message
      </button>

     </form>

     ) : (

      <div className="text-center py-10">

       <h3 className="text-2xl font-bold text-green-600 mb-3">Message Sent Successfully</h3>

       <p className="text-gray-600">
        Thank you for contacting FluentUp. Our team will review
        your message and respond as soon as possible.
       </p>

      </div>

     )}

    </div>

   </div>

  </div>

 )

}


/* ---------------- AUTH PAGES ---------------- */
function Login(){
 return(
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100">
   <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

    <form className="space-y-4">
     <input placeholder="Email" type="email" className="w-full border p-3 rounded-lg" />
     <input placeholder="Password" type="password" className="w-full border p-3 rounded-lg" />

     <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">
      Login
     </button>

     <p className="text-center text-sm">
      Don't have account? <Link className="text-indigo-600" to="/register">Register</Link>
     </p>
    </form>

   </div>
  </div>
 )
}

function Register(){
 return(
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-100">
   <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

    <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>

    <form className="space-y-4">

     <input placeholder="Full Name" className="w-full border p-3 rounded-lg" />
     <input placeholder="Email" type="email" className="w-full border p-3 rounded-lg" />
     <input placeholder="Password" type="password" className="w-full border p-3 rounded-lg" />

     <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold">
      Register
     </button>

     <p className="text-center text-sm">
      Already have account? <Link className="text-indigo-600" to="/login">Login</Link>
     </p>

    </form>

   </div>
  </div>
 )
}

/* ---------------- FOOTER ---------------- */
function Footer(){
 return(

  <footer className="bg-gray-900 text-gray-300">

   <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

    <div>
     <h3 className="text-white font-semibold mb-3">FluentUp</h3>
     <p className="text-sm">Global speaking platform.</p>
    </div>

    <div>
     <h4 className="text-white font-semibold mb-3">Product</h4>
     <ul className="space-y-2 text-sm">
      <li><Link to="/features">Features</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
     </ul>
    </div>

    <div>
     <h4 className="text-white font-semibold mb-3">Legal</h4>
     <ul className="space-y-2 text-sm">
      <li><Link to="/privacy">Privacy</Link></li>
      <li><Link to="/terms">Terms</Link></li>
      <li><Link to="/refund">Refund</Link></li>
     </ul>
    </div>

    <div>
     <h4 className="text-white font-semibold mb-3">Contact</h4>
     <p className="text-sm">7352460579</p>
     <p className="text-sm">eklakhshekh653@gmail.com</p>
    </div>

   </div>

   <div className="text-center text-sm border-t border-gray-700 py-4">
    © 2026 FluentUp
   </div>

  </footer>
 )
}

/* ---------------- APP ---------------- */
export default function FluentUpSite(){

 return(

  <Router>

   <ScrollToTop/>

   <Navbar/>

   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/features" element={<FeaturesSection/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/safety" element={<Safety/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/refund" element={<Refund/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

   </Routes>

   <Footer/>

  </Router>
 )
}
