import IBabyNames from "./interface";
import "./baby_name_card.css"


export default function displayBabyNames(allData: IBabyNames[]) {
    return (
        <div>
            <hr id="top-margin"/>
            <div className="flex-container">
                {allData.map(createBabyCard)}
            </div>
            <br/>
            <hr id="bottom-margin"/>
        </div>
    )
}


function createBabyCard(props: IBabyNames) {
    return (
        <BabyCard 
            id={props.id}
            name={props.name}
            sex={props.sex}
        />
    )
}


function BabyCard(props: IBabyNames): JSX.Element {
    const {name, sex} = props
    return (
        <div className={sex + " card"}><p>{name}</p></div>
    )
}