import React, {useState} from 'react'

import purdueLogo from './purdue_logo.png'
import msuLogo from './michstate_logo.png'
import rutgersLogo from './rutgers_logo.png'
import northwesternLogo from './northwestern_logo.png'
import wisconsinLogo from './wisconsin_logo.png'
import michiganLogo from './michigan_logo.png'
import pennstateLogo from './pennstate_logo.png'
import iowaLogo from './iowa_logo2.png'
import maryLogo from './maryland_logo.png'
import illinoisLogo from './illinois_logo.png'
import osuLogo from './osu_logo.png'
import nebraskaLogo from './nebraska_logo.png'
import indianaLogo from './indiana_logo.png'
import minnesotaLogo from './minnesota_logo.png'
import bigtenLogo from './bigten_logo.png'

var teams = [
    {school: "Purdue", ranks: 1, logo: purdueLogo, record: "(18-1)(7-1)"},
    {school: "Michigan State", ranks: 2, logo: msuLogo, record: "(13-6)(5-3)"},
    {school: "Rutgers", ranks: 3, logo: rutgersLogo,record: "(13-6)(5-3)"},
    {school: "Northwestern", ranks: 8, logo: northwesternLogo, record: "(12-5)(3-3)"},
    {school: "Wisconsin", ranks: 5, logo: wisconsinLogo, record: "(12-5)(4-3)"},
    {school: "Michigan", ranks: 7, logo: michiganLogo, record: "(10-8)(4-3)"},
    {school: "Penn State", ranks: 10, logo: pennstateLogo, record: "(12-6)(3-4)"},
    {school: "Iowa", ranks: 6, logo: iowaLogo, record: "(12-6)(4-3)"},
    {school: "Maryland", ranks: 9, logo: maryLogo, record: "(12-6)(3-4)"},
    {school: "Illinois", ranks: 4, logo: illinoisLogo, record: "(17-1)(6-1)"},
    {school: "Ohio State", ranks: 13, logo: osuLogo, record: "(10-8)(2-5)"},
    {school: "Nebraska", ranks: 11, logo: nebraskaLogo, record: "(10-9)(3-5)"},
    {school: "Indiana", ranks: 12, logo: indianaLogo, record: "(11-6)(2-4)"},
    {school: "Minnesota", ranks: 14, logo: minnesotaLogo, record: "(7-10)(1-6)"},
    {school: "TBD", ranks: 15, logo: bigtenLogo, record: ""},
]

teams = teams.sort((a,b) => {
    return a.ranks - b.ranks;
});

function Standings() {
    
    // Game 1
    var [g1taSelected, setGame1teamA] = useState(false)
    var [g1tbSelected, setGame1teamB] = useState(false)
    var [g1Winner, setg1Winner] = useState(14)
    const g1taIndex = 12;
    const g1tbIndex = 11;

    const clickHandlerG1A = () => {
        setGame1teamA(true)
        setg1Winner(g1taIndex);
        setGame1teamB(false);
    }
    const clickHandlerG1B = () => {
        setGame1teamB(true)
        setg1Winner(g1tbIndex);
        setGame1teamA(false);
    }

    // Game 2

    var [g2taSelected, setGame2teamA] = useState(false)
    var [g2tbSelected, setGame2teamB] = useState(false)
    var [g2Winner, setg2Winner] = useState(14)
    const g2taIndex = 13;
    const g2tbIndex = 10;
    
    const clickHandlerG2A = () => {
        setGame2teamA(true)
        setg2Winner(g2taIndex);
        setGame2teamB(false);
    }
    const clickHandlerG2B = () => {
        setGame2teamB(true)
        setg2Winner(g2tbIndex);
        setGame2teamA(false);
    }

    // Game 3

    var [g3taSelected, setGame3teamA] = useState(false)
    var [g3tbSelected, setGame3teamB] = useState(false)
    var [g3Winner, setg3Winner] = useState(14)
    const g3taIndex = 8;
    const g3tbIndex = 7;
    
    const clickHandlerG3A = () => {
        setGame3teamA(true)
        setg3Winner(g3taIndex);
        setGame3teamB(false);
    }
    const clickHandlerG3B = () => {
        setGame3teamB(true)
        setg3Winner(g3tbIndex);
        setGame3teamA(false);
    }

    // Game 4
    var [g4taSelected, setGame4teamA] = useState(false)
    var [g4tbSelected, setGame4teamB] = useState(false)
    var [g4Winner, setg4Winner] = useState(14)
    const g4taIndex = g1Winner;
    const g4tbIndex = 4;
    
    const clickHandlerG4A = () => {
        setGame4teamA(true)
        setg4Winner(g4taIndex);
        setGame4teamB(false);
    }
    const clickHandlerG4B = () => {
        setGame4teamB(true)
        setg4Winner(g4tbIndex);
        setGame4teamA(false);
    }

    // Game 5
    var [g5taSelected, setGame5teamA] = useState(false)
    var [g5tbSelected, setGame5teamB] = useState(false)
    var [g5Winner, setg5Winner] = useState(14)
    const g5taIndex = g2Winner;
    const g5tbIndex = 5;
    
    const clickHandlerG5A = () => {
        setGame5teamA(true)
        setg5Winner(g5taIndex);
        setGame5teamB(false);
    }
    const clickHandlerG5B = () => {
        setGame5teamB(true)
        setg5Winner(g5tbIndex);
        setGame5teamA(false);
    }

    // Game 6
    var [g6taSelected, setGame6teamA] = useState(false)
    var [g6tbSelected, setGame6teamB] = useState(false)
    var [g6Winner, setg6Winner] = useState(14)
    const g6taIndex = 9;
    const g6tbIndex = 6;
    
    const clickHandlerG6A = () => {
        setGame6teamA(true)
        setg6Winner(g6taIndex);
        setGame6teamB(false);
    }
    const clickHandlerG6B = () => {
        setGame6teamB(true)
        setg6Winner(g6tbIndex);
        setGame6teamA(false);
    }

    // COMPONENT RETURN STATEMENT: BUILDING THE HTML
    return (
        <div className="standings">
            <h3>Big Ten Tournament Matchups</h3>
            <div className='tournament-games-container'>
                <div className='Round'>
                    <h6>Round 1</h6>
                    <ul className='matchup'>
                        <li className='gametime'>5:30 pm - BTN</li>
                        <li>
                            <button 
                                style={{backgroundColor: g1taSelected ? '#0085CA' : ''}}
                                onClick={clickHandlerG1A}>
                                13.<img src={teams[12]['logo']} alt="school logo"></img>{teams[12]['school']}
                            <p className="record" 
                                style={{color: g1taSelected ? 'black' : ''}}>
                            <i>{teams[12]['record']}</i></p>
                            </button>
                        </li>
                        <li>
                            <button 
                                style={{backgroundColor: g1tbSelected ? '#0085CA' : ''}}
                                onClick={clickHandlerG1B}>
                                12. <img src={teams[11]['logo']} alt="school logo"></img>{teams[11]['school']}
                            <p className="record"
                                style={{color: g1tbSelected ? 'black' : ''}}>
                            <i>{teams[11]['record']}</i></p>
                            </button>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>8:00 pm - BTN</li>
                        <li>
                        <button 
                            style={{backgroundColor: g2taSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG2A}>
                            14. <img src={teams[13]['logo']} alt="school logo"></img>{teams[13]['school']}
                            <p className="record"
                            style={{color: g2taSelected ? 'black' : ''}}>
                            <i>{teams[13]['record']}</i></p>
                        </button>
                        </li>
                        <li>
                        <button 
                            style={{backgroundColor: g2tbSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG2B}>
                            11. <img src={teams[10]['logo']} alt="school logo"></img>{teams[10]['school']}
                            <p className="record"
                            style={{color: g2tbSelected ? 'black' : ''}}>
                            <i>{teams[10]['record']}</i></p>
                        </button>
                        </li>
                    </ul>
                </div>
                <div className='Round'>
                    <h6>Round 2</h6>
                    <ul className='matchup'>
                        <li className='gametime'>12:00 pm - BTN</li>
                        <li>
                        <button 
                            style={{backgroundColor: g3taSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG3A}>
                            9. <img src={teams[8]['logo']} alt="school logo"></img>{teams[8]['school']}
                            <p className="record"
                            style={{color: g3taSelected ? 'black' : ''}}>
                            <i>{teams[8]['record']}</i></p>
                        </button>
                        </li>
                        <li>
                        <button 
                            style={{backgroundColor: g3tbSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG3B}>
                            8. <img src={teams[7]['logo']} alt="school logo"></img>{teams[7]['school']}
                            <p className="record"
                            style={{color: g3tbSelected ? 'black' : ''}}>
                            <i>{teams[7]['record']}</i></p>
                        </button>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>2:30 pm - BTN</li>
                        <li>
                        <button 
                            style={{backgroundColor: g4taSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG4A}>
                            {g1Winner + 1}. <img src={teams[g1Winner]['logo']} alt="school logo"></img>{teams[g1Winner]['school']}
                            <p className="record"
                            style={{color: g4taSelected ? 'black' : ''}}>
                            <i>{teams[g1Winner]['record']}</i></p>
                        </button>
                        </li>
                        <li>
                        <button 
                            style={{backgroundColor: g4tbSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG4B}>
                            5. <img src={teams[4]['logo']} alt="school logo"></img>{teams[4]['school']}
                            <p className="record"
                            style={{color: g4tbSelected ? 'black' : ''}}>
                            <i>{teams[4]['record']}</i></p>
                        </button>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>5:30 pm - BTN</li>
                        <li>
                        <button 
                            style={{backgroundColor: g5taSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG5A}>
                            {g2Winner + 1}. <img src={teams[g2Winner]['logo']} alt="school logo"></img>{teams[g2Winner]['school']}
                            <p className="record"
                            style={{color: g5taSelected ? 'black' : ''}}>
                            <i>{teams[g2Winner]['record']}</i></p>
                        </button>
                        </li>
                        <li>
                        <button 
                            style={{backgroundColor: g5tbSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG5B}>
                            6. <img src={teams[5]['logo']} alt="school logo"></img>{teams[5]['school']}
                            <p className="record"
                            style={{color: g5tbSelected ? 'black' : ''}}>
                            <i>{teams[5]['record']}</i></p>
                        </button>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>8:00 pm - BTN</li>
                        <li>
                        <button 
                            style={{backgroundColor: g6taSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG6A}>
                            10. <img src={teams[9]['logo']} alt="school logo"></img>{teams[9]['school']}
                            <p className="record"
                            style={{color: g6taSelected ? 'black' : ''}}>
                            <i>{teams[9]['record']}</i></p>
                        </button>
                        </li>
                        <li>
                        <button 
                            style={{backgroundColor: g6tbSelected ? '#0085CA' : ''}}
                            onClick={clickHandlerG6B}>
                            7. <img src={teams[6]['logo']} alt="school logo"></img>{teams[6]['school']}
                            <p className="record"
                            style={{color: g6tbSelected ? 'black' : ''}}>
                            <i>{teams[6]['record']}</i></p>
                        </button>
                        </li>
                    </ul>
                </div>
                <div className='Round'>
                    <h6>Quarterfinal</h6>
                    <ul className='matchup'>
                        <li className='gametime'>12:00 pm - BTN</li>
                        <li>
                        {g3Winner + 1}. <img src={teams[g3Winner]['logo']} alt="school logo"></img>{teams[g3Winner]['school']}
                            <p className="record">
                            <i>{teams[g3Winner]['record']}</i></p>
                        </li>
                        <li>
                            1. <img src={teams[0]['logo']} alt="school logo"></img>{teams[0]['school']}<p className="record"><i>{teams[0]['record']}</i></p>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>2:30 pm - BTN</li>
                        <li>
                            {g4Winner + 1}. <img src={teams[g4Winner]['logo']} alt="school logo"></img>{teams[g4Winner]['school']}
                            <p className="record">
                            <i>{teams[g4Winner]['record']}</i></p>
                        </li>
                        <li>
                            4. <img src={teams[3]['logo']} alt="school logo"></img>{teams[3]['school']}<p className="record">  <i>{teams[3]['record']}</i></p>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>5:30 pm - BTN</li>
                        <li>
                            {g5Winner + 1}. <img src={teams[g5Winner]['logo']} alt="school logo"></img>{teams[g5Winner]['school']}
                            <p className="record">
                            <i>{teams[g5Winner]['record']}</i></p>
                        </li>
                        <li>
                            3. <img src={teams[2]['logo']} alt="school logo"></img>{teams[2]['school']}<p className="record"><i>{teams[2]['record']}</i></p>
                        </li>
                    </ul>
                    <ul className='matchup'>
                        <li className='gametime'>8:00 pm - BTN</li>
                        <li>
                            {g6Winner + 1}. <img src={teams[g6Winner]['logo']} alt="school logo"></img>{teams[g6Winner]['school']}
                            <p className="record">
                            <i>{teams[g3Winner]['record']}</i></p>
                        </li>
                        <li>
                            2. <img src={teams[1]['logo']} alt="school logo"></img>{teams[1]['school']}<p className="record"><i>{teams[1]['record']}</i></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Standings;