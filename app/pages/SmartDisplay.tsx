import { useLoaderData } from "@remix-run/react";
import DepartureRow from "../components/DepartureRow";
import Header from "../components/Header"

function SmartDisplay() {

    const data = useLoaderData()

    const {stopsDetails, departures, name} = data
    
    /* option possible */
    // if (!stopIds) {
    //     return (<div>erreur</div>)
    // }

    //const { name } = data ? data : {} // short version : const { name } = data || {}

  // 
    return (
      <div className="main-container">
        {
          stopsDetails
          ?(<>
            <Header name={name} stopsDetails={stopsDetails}/> 
            
          </>)
          : (<p>Stop non trouvé</p>)
        }
        {
          departures
          ?(
            <ul>
              {departures.map((departure: any, index: number) => (
                <DepartureRow key={index} departure={departure}/>
              ))}
            </ul>
          )
          : (<p>Départ non trouvé</p>)
        }
      </div>
    )
  }

  export default SmartDisplay