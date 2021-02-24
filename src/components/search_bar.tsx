import "./search_bar.css";

export default function displaySearchBar(searchValue: string, changeSearchEvent: (e: React.ChangeEvent<HTMLInputElement>) => void, changeGenderEvent: (filter: string) => void) {
    const buttons = [
        {gender: "none", altText: "No filter", url: "https://www.flaticon.com/svg/vstatic/svg/73/73197.svg?token=exp=1614162575~hmac=63d02ff236498b7b4f4bedbd037b26db"},
        {gender: "m", altText: "Male filter", url: "https://www.flaticon.com/svg/vstatic/svg/1131/1131003.svg?token=exp=1614163531~hmac=7ca0ddb401184ff2107de094d26cc71b"},
        {gender: "f", altText: "Female filter", url: "https://www.flaticon.com/svg/vstatic/svg/1131/1131003.svg?token=exp=1614163531~hmac=7ca0ddb401184ff2107de094d26cc71b"}
    ]
    
    return (
        <div className="input-container">
            <input type="text" value={searchValue} onChange={changeSearchEvent} placeholder="Type here to start searching..."/>
            {buttons.map(({gender, altText, url}) => 
                <div className={"gender-button " + gender} onClick={() => changeGenderEvent(gender)}><img src={url} alt={altText}/></div>
            )}
        </div>
    )
}