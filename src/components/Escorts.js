import React, {useState, useEffect} from 'react';
import './escorts.css';

const Escorts = () => {
    const [escorts, setEscorts] = useState([]);
    const [mass, setMass] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedDroid, setSelectedDroid] = useState('');
    const [selectedHuman, setSelectedHuman] = useState('');
    const [selectedAlien, setSelectedAlien] = useState('');
    
        useEffect(() => {
            if (playOnce) {
                const getData = () => {
                    fetch("https://miadil.github.io/starwars-api/api/all.json")
                    .then((res) => res.json())
                    .then((res) => setEscorts(res))
                    .then((res) => setPlayOnce(false))
                }
                getData();
            }
             const massPopulation = () => {
                 const massObj = Object.keys(escorts).map((i) => escorts[i]);
                 console.log(massObj);
                 const massArray = massObj.sort((a,b) => {
                     return b.mass - a.mass
                 });
                 console.log("massArray",massArray);
                 massArray.length = rangeValue;
                 setMass(massArray);
             }
            
             massPopulation();
            
            
                       
        }, [escorts, rangeValue])

        // const human = escorts.filter(e => e.species === "human");
        // const droid = escorts.filter(e => e.species === "droid");
        // const alien = escorts.filter(e => e.species !=="human" && e.species !=="droid")

        function showHuman() {
            setSelectedHuman(!selectedHuman)
        }
        function showDroid () {
            setSelectedDroid(!selectedDroid)
        }
        function showAlien() {
            setSelectedAlien(!selectedAlien)
        }

        return (
            <div>
                <h1 class="escortstitle">Nos Escorts !</h1>
                <div className="sort-container">
                    <input type="range" min="1" max="88" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                    <div className="species-button">
                        <button onClick={showHuman}>Humain</button>
                        <button onClick={showDroid}>Droïde</button>
                        <button onClick={showAlien}>Extraterrestre</button>
                    </div>
                </div>
                <div class="escortsglobal">
                    {mass
                    .filter((escort)=>( !selectedHuman || escort.species.includes("human")) && ( !selectedDroid || escort.species.includes("droid")) && ( !selectedAlien|| (escort.species !=="human" && escort.species !=="droid")))
                    .map((escort) => (  
                        <div class="escortcontainer">
                            <div class="imagecontainer">
                                <img class="escortimage" src={escort.image} alt={escort.name} />
                            </div>
                            <div class="escortbox">   
                                <p class="escortname">{escort.name}</p>
                                {/* <p>{escort.species}</p> */}
                            </div>  

                        </div>
                    ))}

                                    </div>
            </div>
        )
}

export default Escorts;