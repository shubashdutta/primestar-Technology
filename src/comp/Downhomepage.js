// HomePage.jsx
import  { React,useState }  from 'react';
import { Link } from 'react-router-dom';
import "./down.css"




const Page = () => {
    const [content, setContent] = useState(" In an increasingly connected global environment, it will become easier for customers to choose between similar suppliers, thus increasing the pressure of profit margins on even the most successful companies. In order to address this more and more companies have moved from a pure product sale to incorporating services into their product offerings.");

    const handleClick = (type) => {
        if (type === 'Why Us') {
            setContent(
              <p style={{ color: 'black',marginRight:"30px" ,marginTop:"10px"}}>
                In an increasingly connected global environment, it will become easier for customers to choose between similar suppliers, thus increasing the pressure of profit margins on even the most successful companies. In order to address this more and more companies have moved from a pure product sale to incorporating services into their product offerings.
              </p>
            );
          } else if (type === 'Mission and Vision') {
            setContent(
              <p style={{ color: 'black',marginRight:"30px" ,marginTop:"10px" }}>
                Our Vision and Mission are both encouraging our team to accomplish the goal. We recognize the clients' requirements, analyze them, and provide the best solutions. We satisfy our clients by our services and implement them with more capable software solution approaches.
              </p>
            );
          } else if (type === 'Our Challenges') {
            setContent(
              <p style={{ color: 'black',marginRight:"30px" ,marginTop:"10px",}}>
              We take pride in helping our clients deliver marvelous results when it comes to their projects. From data to performance, we’ve got you covered. We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.
              </p>
            );
          }
    };
   
    return (
        <div>
            <div className="home-page">
                <div className="content">
                    <h1 style={{textTransform:"capitalize"}}>We help global leaders with their organization's most critical issues and opportunities.</h1>
                    <Link to="/contact">
                        <button style={{textTransform:"capitalize"}}>Contact Us</button>
                    </Link>

                </div>
            </div>
            <div className='down'>
      <div className='left-content'>                            
        <h2>About Primestar Technology </h2>
        <h3 >Delivering value and experience to customers with aligned and efficient business processes.</h3>
      </div>
      <div className='right-content'>
        <p >
        Primestar Technology is a leading provider of advanced software consulting and development services specializing in the next generation Internet applications. It also provides high quality, cost-effective strategic solutions to customers. Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately, the right combination of both is the most powerful motivational force known to humankind.
        </p>
      </div>
    </div>
    <div className='right-content' style={{ display: 'flex', alignItems: 'center',backgroundColor: '#f0f0f0',marginLeft:"10px" }}>
    <div style={{ flex: '1' }}>
      <img
        src="./digital-da.png"
        alt="Description of the image"
        style={{ width: '500px', marginTop: '0px',height:"400px", }}
      />
    </div>
    <div className="left-content">
    <div style={{ flex: '1', fontSize: '24px',  }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="feature-title">
              <h1>Feature</h1>
            <h2 >We enable constant enterprise transformation at speed and scale</h2>
              </div>
              </div>
            <div>
              <button onClick={() => handleClick('Why Us')} style={{  }}>Why Us?</button>
        <button onClick={() => handleClick('Mission and Vision')}style={{   marginRight: '20px' }}>Mission and Vision</button>
        <button onClick={() => handleClick('Our Challenges')}style={{  marginRight: '10px' }}>Our Challenges</button> 
        </div>
        <p className="content-paragraph">{content}</p>
        </div>
    </div>
</div>

    </div>


     
    );
};

export default Page;
