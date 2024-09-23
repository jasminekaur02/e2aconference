const Repo = "https://raw.githubusercontent.com/E2A-Conference/e2a.dynamicData.json/main/";

const DynamicFetch = async(file: string) => {
    let response = await fetch( Repo + `${file}`, { cache: "no-store" } );
        
    if (response.ok) {
        let data = await response.json();
        return ( data );
    }
    else {
        return ( { "error": "error" } );
    }
}

export default DynamicFetch 