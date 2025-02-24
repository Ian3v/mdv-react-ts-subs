import {Sub, SubsResponseFromApi} from '../types/types'

//LLEGAN DESDE API SERVER CON ESTE FORMATO AKI
// {
//   nick:element.nick,
//   months:element.submonths,
//   profileUrl: element.avatar,
//   description: element.description
// }  

const fetchSubs= async ():Promise<SubsResponseFromApi> =>{
    
    const response = await fetch('http://localhost:6505/users');
    const dataJson = await response.json()
    await console.log('fetchSubs>>', dataJson)
    return dataJson
}


const mapFromApiToSubs = async (apiResponse: SubsResponseFromApi):Array<Sub> => {

      const mappedSubs= apiResponse.map( element=>{
        return {

          nick: element.nick,
          subMonths: element.months, // Mapeamos "months" a "subMonths"
          avatar: element.profileUrl, // Mapeamos "profileUrl" a "avatar"
          description: element.description
        }
      })


      return mappedSubs
}


export const getAllSubs = async () =>{
    // console.log(mapFromApiToSubs)
    // return mapFromApiToSubs(fetchSubs)
    const fetchSubsData = await fetchSubs()
    const allSubs = mapFromApiToSubs(fetchSubsData)
    return allSubs
     
}