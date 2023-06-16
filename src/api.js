const API_KEY = '07863069e273489cb378459a7868514e';
export async function getMovies(){
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
    try{
        let result = await fetch(url);
        result = await result.json()
        console.log(result);
        return {data: result, error: null};
    }catch(error){
        console.log(error)
        return {data: null, error: error};	
    }
}