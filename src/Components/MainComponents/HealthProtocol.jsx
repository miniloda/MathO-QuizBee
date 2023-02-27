

export default function HealthProtocol (){
    return(
        <div className = "container w-full mt-3" id="Health">
            <div>
                <h1 className="text-white">Health Protocol</h1>
                <p className="text-white">To help us safely and reduce the risk of COVID-19 transmission and other transmittance diseases, participants, orgranizers, judges, faculty, and staff should follow the following protocols:</p>
                <div>
                    <div>
                        <h2 className="text-white">Before the event:</h2>
                        <ul>
                            <li className="text-white list-disc">Disinfect chairs and tables and other materials that will be used for the competition.</li>
                            <li className="text-white list-disc">Distance all the chairs by at least one meter.</li>
                            <li className="text-white list-disc">Provide alcohol at the entrance or in the registration area of the venue.</li>
                            <li className="text-white list-disc">Open windows and doors to ventilate the venue and common areas.</li>
                            
                        </ul>
                    </div>
                    <div>
                    <h2 className="text-white">After the event:</h2>
                        <ul>
                            <li className="text-white list-disc">Wearing a face-mask is highly encouraged but not obligated</li>
                            <li className="text-white list-disc">Keep your hands clean. Spray your hands with alcohol provided at the entrance</li>
                            <li className="text-white list-disc">Follow appropriate respiratory etiquette, which includes covering for coughs and sneezes.</li>
                            <li className="text-white list-disc">Avoid close contact with people who are sick.</li>
                            <li className="text-white list-disc">Food distribution will follow CDC (Centers for Disease Control) guidelines.</li>
                            <li className="text-white list-disc">Encourage the use of filtering face pieces.</li>
                            <li className="text-white list-disc">If you have COVID-19 symptoms (fever, sore throat, fatigue, shortness of breath, dy cough) immediately notify any facilitator.</li>
                            <li className="text-white list-disc">Be cautious of other health consequences of exposure to certain cleaners.</li>
                            <li className="text-white list-disc">In addition, participants must familiarize themselves with the symptoms of COVID-19:
                                <ul>
                                    <li className="text-white list-disc">Cough;</li>
                                    <li className="text-white list-disc">Fever;</li>
                                    <li className="text-white list-disc">Shortness of breath, difficulty breathing; and</li>
                                    <li className="text-white list-disc">Early symptoms such as chills, body aches, sore throat, headache, diarrhea, nausea/vomiting, and runny nose must be reported to any facilitator.</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            {/* Emergency Plan */}
            <div>
                <div >
                    <h1 className="text-white">Emergency Plan</h1>
                    <h2 className="text-white">In the case of an emergency, contact the following concerned offices:</h2>
                    <div className="container">
                        <div className="grid grid-cols-2">
                            <div className="text-white">
                                <h4>Office of the President</h4>
                                <p>(033) 337-8594</p>
                                
                            </div>
                            <div className="text-white">
                                <h3>Office of the Vice President for Academic Affairs</h3>
                                <p>(033) 315-9631; local 413</p>
                            </div>
                            <div className="text-white">
                                <h3>Security/ UP Police Main Office</h3>
                                <p>327-7938; local 404</p>
                            </div>
                            <div className="text-white">
                                <h3>Campus Development and Maintenance Office (CDMO)</h3>
                                <p>337-4414</p>
                            </div>
                            <div className="text-white">
                                <h3>Iloilo City Municipal Police Station</h3>
                                <p>337-0400</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </div>   )
}