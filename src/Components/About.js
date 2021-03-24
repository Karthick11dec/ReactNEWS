import Footer from './Footer'
import NavBar from './NavBar';
const About = () => {
    return (
        <div>
            <NavBar />
            <h1 className=" mb-5 text-center" style={{ color: "white" ,background:"grey"}}>
                About us
            </h1>
            <div className="container">You can now view mynews in the browser.

            Local:            http://localhost:3000
            On Your Network:  http://192.168.43.219:3000

            Note that the development build is not optimized.
            To create a production build, use npm run build. </div>
            <div className="container">You can now view mynews in the browser.

            Local:            http://localhost:3000
            On Your Network:  http://192.168.43.219:3000

            Note that the development build is not optimized.
            To create a production build, use npm run build. </div>
            <div className="container">You can now view mynews in the browser.

            Local:            http://localhost:3000
            On Your Network:  http://192.168.43.219:3000

            Note that the development build is not optimized.
            To create a production build, use npm run build. </div>
            <div className="container">You can now view mynews in the browser.

            Local:            http://localhost:3000
            On Your Network:  http://192.168.43.219:3000

            Note that the development build is not optimized.
            To create a production build, use npm run build. </div>

            <h2 className="contianer text-center" style={{ color: "navy", fontSize: "60px" }}>0999-4587770</h2>
            <Footer />
        </div>
    )
}

export default About;