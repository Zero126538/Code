import backgroundImage from '../assets/2.jpg'; 

const Home = () => {
    
return (
    <div className="flex justify-center items-center">
        <img src={backgroundImage} className="w-screen"></img>
        <h1 className="absolute pl-44 text-5xl font-bold pb-80">Багшийн цагийн бүртгэлийн системд </h1>
        <p className='absolute pl-96 text-6xl font-bold pb-36 right-14'>тавтай морилно уу</p>
    </div>
);
} 

export default Home;