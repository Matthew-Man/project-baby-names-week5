import "./search_bar.css";

export default function displaySearchBar(searchValue: string, changeSearchEvent: (e: React.ChangeEvent<HTMLInputElement>) => void) {
    return (
        <div className="input-container">
            <input type="text" value={searchValue} onChange={changeSearchEvent} placeholder="Type here to start searching..."/>
        </div>
    )
}