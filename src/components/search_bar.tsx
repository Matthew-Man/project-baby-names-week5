import "./search_bar.css";

export default function displaySearchBar(searchValue: string, changeSearchEvent: (e: React.ChangeEvent<HTMLInputElement>) => void) {
    return (
        <div className="input-container">
            <input type="text" value={searchValue} onChange={changeSearchEvent} placeholder="Type here to start searching..."/>
            <div className="gender-button m"><img src="https://www.flaticon.com/svg/vstatic/svg/1131/1131003.svg?token=exp=1614163531~hmac=7ca0ddb401184ff2107de094d26cc71b" alt="Show both genders"/></div>
        </div>
    )
}