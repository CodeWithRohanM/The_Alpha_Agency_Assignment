import React, { useState, useRef } from "react";
import "./HeroSection.css";
import logo1 from "/Users/rohanmote/Desktop/Thapa Projects/Avery_Dennison_Landing_Page/client/src/img/DOL_home_page/Group 195.svg";

import "/Users/rohanmote/Desktop/Thapa Projects/Avery_Dennison_Landing_Page/client/src/fonts.css";



const HeroSection = () => {


    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionProfession, setSelectedOptionProfession] = useState('');
    const [selectedOptionDistributor, setSelectedOptionDistributor] = useState('');

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    });

    const storeUserData = (event) => {
        const getName = event.target.name;
        const getValue = event.target.value;

        setUserData((prevVal) => {
            return {
                ...prevVal,
                [getName]: getValue,
            }
        });
    };

    const registerUser = async (event) => {
        try {
            event.preventDefault();

            window.alert("Submit");

            const getFirstName = userData.firstName;
            const getLastName = userData.lastName;
            const getEmail = userData.email;
            const getPhone = userData.phone;

            const getData = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: getFirstName,
                    lastName: getLastName,
                    email: getEmail,
                    phone: getPhone,
                })
            });

            const getReponse = await getData.json();

            if (getData.status === 200) {
                window.alert(getReponse.message);
            }
            else if (getData.status === 404) {
                window.alert(getReponse.error);
            }

        } catch (err) {
            console.warn(err);
        }
    }


    const scrollRef = useRef(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const handleChangeProfession = (event) => {
        setSelectedOptionProfession(event.target.value);
    };


    const handleChangeDistributor = (event) => {
        setSelectedOptionDistributor(event.target.value);
    };

    const scrollToComponent = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return <>

        <div className="flex flex-col">

            <div>

                <div id="heroSectionImage" alt="heroSectionImage" className="relative"></div>

                <div src="/Users/rohanmote/Desktop/Thapa Projects/Avery_Dennison_Landing_Page/client/src/Assets/DOL_home_page/Asset 3@4x-8.png"
                    id="logoImage"
                    className="absolute"
                    alt="logo"></div>

                <h1 className="absolute"
                    id="heroSectionText" style={{
                        "font-family": "book",
                    }}>Take your graphics protection to the next level with DOL Max overlaminates</h1>

                <h1 className="absolute" id="heroSectionSubText" style={{
                    "font-family": "light",
                }}>Pair with MPI 1105 wrapping film for ramped up protection</h1>

                <div id="image1" className="absolute rounded-full"></div>
                <div id="maximum" className="absolute"></div>
                <h1 id="image1Text" className="absolute" style={{
                    "font-family": "book",
                }}>Maximum Durability</h1>

                <div id="image2" className="absolute rounded-full"></div>
                <div id="enhanced" className="absolute"></div>
                <h1 id="image2Text" className="absolute"
                    style={{
                        "font-family": "book",
                    }}>Enhanced Appearance</h1>


                <div id="image3" className="absolute rounded-full"></div>
                <div id="high" className="absolute"></div>
                <h1 id="image3Text" className="absolute"
                    style={{
                        "font-family": "book",
                    }}>High Gloss Finish</h1>

                <div id="formSection" ref={scrollRef} className="absolute z-10"></div>


                <h1 id="formHeading" className="absolute z-10 w-full" style={{
                    "font-family": "semiBold",
                }}>Connect With Us</h1>

                <h1 id="formHeadingSubText" className="absolute z-10 w-full" style={{
                    "font-family": "book",
                }}>for outstanding protective overlaminates</h1>

                <h1 id="firstName" className="absolute z-10 w-fit" style={{
                    "font-family": "book",
                }}>First Name</h1>
                <input type="text" id="firstNameInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}></input>

                <h1 id="lastName" className="absolute z-10" style={{
                    "font-family": "book",
                }}>Last Name</h1>
                <input type="text" id="lastNameInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}></input>

                <h1 id="email" className="absolute z-10" style={{
                    "font-family": "book",
                }}>Email</h1>
                <input type="text" id="emailInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}></input>

                <h1 id="contact" className="absolute z-10" style={{
                    "font-family": "book",
                }}>Contact Number</h1>
                <input type="text" id="contactInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}></input>

                <h1 id="company" className="absolute z-10" style={{
                    "font-family": "book",
                }}>Company</h1>
                <input type="text" id="companyInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}></input>

                <h1 id="state" className="absolute z-10" style={{
                    "font-family": "book",
                }}>State</h1>
                <select id="stateInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}
                    value={selectedOption}
                    onChange={handleChange}>

                    <option value="">-- California --</option>
                    <option value="option1">Alabama</option>
                    <option value="option2">Arizona</option>
                    <option value="option3">Colorado</option>
                    <option value="option4">Delaware</option>

                </select>

                <h1 id="describe" className="absolute z-10" style={{
                    "font-family": "book",
                }}>How would you describe yourself</h1>
                <select type="text" id="describeInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }} value={selectedOptionProfession}
                    onChange={handleChangeProfession}>


                    <option value="">-- Installer --</option>
                    <option value="option1">Carpenter</option>
                    <option value="option2">Flooring Installer</option>
                    <option value="option3">Network Technician</option>
                    <option value="option4">Audiovisual Installer</option>
                </select>

                <h1 id="distributor" className="absolute z-10 w-fit" style={{
                    "font-family": "book",
                }}>Preferred Distributor:</h1>
                <select type="text" id="distributorInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}
                    value={selectedOptionDistributor}
                    onChange={handleChangeDistributor}>

                    <option value="">-- Aerotect --</option>
                    <option value="option1">Aviall</option>
                    <option value="option2">Wesco Aircraft</option>
                    <option value="option3">A.E.R.O. Inc</option>
                    <option value="option4">Satair</option>




                </select>

                <h1 id="additional" className="absolute z-10" style={{
                    "font-family": "book",
                }}>Additional Information</h1>
                <input type="textarea" id="additionalInputBox" className="absolute z-10" style={{
                    "font-family": "book",
                }}></input>

                <input type="checkbox" id="checkBox" className="absolute z-10"></input>

                <h1 id="checkBoxText" className="absolute z-10" style={{
                    "font-family": "light",
                }}>I'd like to receive promotions, product information and service offers from Avery Dennison.</h1>

                <button type="button" id="submitButton" className="absolute z-10">
                    <span id="buttonText" style={{
                        "font-family": "semiBold",
                    }} onClick={() => {
                        window.alert("Thank You For Submitting Your Information.")
                    }}>Submit</span>
                </button>



            </div>

            <div>


                <div id="middleSectionImage" className="absolute"></div>

                <h1 id="middleSectionHeading" className="absolute" style={{
                    "font-family": "semiBold",
                }}>DOL Max Overlaminate Films</h1>

                <h1 id="middleSectionSubHeading" className="absolute" style={{
                    "font-family": "light",
                }}>Printed graphics deserve maximum protection, DOL Max is the solution.</h1>

                <h1 id="features" className="absolute" style={{
                    "font-family": "medium",
                }}>Features and Benefits:</h1>

                <ul>
                    <li id="firstPoint" className="absolute text-black" style={{
                        "font-family": "light",
                    }}>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
                    <li id="secondPoint" className="absolute" style={{
                        "font-family": "light",
                    }}>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
                    <li id="thirdPoint" className="absolute" style={{
                        "font-family": "light",
                    }}>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
                </ul>

                <button id="middleSectionButton" className="absolute" onClick={scrollToComponent}>                </button>


                <button id="secondButtonText" className="absolute" style={{
                    "font-family": "semiBold",
                }} onClick={scrollToComponent}>Inquire Now</button>

                <div id="firstArrow" className="absolute"></div>





            </div>

            <div>

                <div id="thirdSection" className="absolute"></div>

                <div id="thirdSectionImage" className="absolute"></div>

                <h1 id="whyUs" className="absolute w-fit" style={{
                    "font-family": "semiBold",
                }}>Why Us?</h1>

                <div id="contentLogo1" className="absolute rounded-full"></div>
                <div id="quality" className="absolute"></div>


                <div id="contentLogo2" className="absolute rounded-full"></div>
                <div id="multiple" className="absolute"></div>

                <div id="contentLogo3" className="absolute rounded-full"></div>
                <div id="support" className="absolute"></div>

                <div id="contentLogo4" className="absolute rounded-full"></div>
                <div id="durability" className="absolute"></div>



                <div id="content" className="absolute">

                    <h1 id="firstHeading" className="absolute" style={{
                        "font-family": "semiBold",
                    }}>Quality Products</h1>
                    <p id="firstPara" className="absolute" style={{
                        "font-family": "light",
                    }}>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>


                    <h1 id="secondHeading" className="absolute" style={{
                        "font-family": "semiBold",
                    }}>Multiple Options</h1>
                    <p id="secondPara" className="absolute" style={{
                        "font-family": "light",
                    }}>We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</p>


                    <h1 id="thirdHeading" className="absolute" style={{
                        "font-family": "semiBold",
                    }}>Expertise And Support</h1>
                    <p id="thirdPara" className="absolute" style={{
                        "font-family": "light",
                    }}>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</p>


                    <h1 id="fourthHeading" className="absolute" style={{
                        "font-family": "semiBold",
                    }}>Durability Assurance</h1>
                    <p id="fourthPara" className="absolute" style={{
                        "font-family": "light",
                    }}>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>

                </div>


                <button id="thirdSectionButton" className="absolute" onClick={scrollToComponent}></button>

                <button id="callBack" className="absolute" style={{
                    "font-family": "semiBold",
                }} onClick={scrollToComponent}>Request a call back</button>


            </div>


            <div>

                <div id="footerSection" className="absolute"></div>

                <h1 id="solution" className="absolute" style={{
                    "font-family": "light",
                }}>Best Solutions From</h1>

                <div id="footerLogo" className="absolute"></div>

                <h1 id="footerText1" style={{
                    "font-family": "light",
                }}>DOL Max Overlaminate Films</h1>

                <h1 id="footerWhyUs" className="absolute w-fit" style={{
                    "font-family": "light",
                }}>Why Us</h1>

                <h1 id="enquire" className="absolute w-fit" style={{
                    "font-family": "light",
                }}>Enquire Now</h1>

                <div id="footerContent1" className="absolute" style={{
                    "font-family": "light",
                }}>Avery Dennison Overlaminate Avery Dennison Overlaminate Films Avery Dennison Digital Overlaminate Films Avery Dennison DOL Max</div>

                <div id="footerContent2" className="absolute" style={{
                    "font-family": "light",
                }}>Overlaminate Overlaminate Films Digital Overlaminate Films</div>

                <h1 id="footerText" className="absolute" style={{
                    "font-family": "light",
                }}>© 2023 Avery Dennison Label Packaging Material. All rights reserved.</h1>



            </div>


        </div>






    </>
};

export default HeroSection;