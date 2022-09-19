// import React, { Component } from 'react'
// import ReactGoogleMapLoader from "react-google-maps-loader"
// import ReactGooglePlacesSuggest from "react-google-places-suggest"

// const   APIKEY = "AIzaSyAg3JhtyzxRI4ctt_MnKVUUKFK2ooaaAxc";
// class SearchComp extends Component {
//   state = {
  
//     search: "",
//     value: "",
//   }

//   handleInputChange(e) {
//     this.setState({ search: e.target.value, value: e.target.value })
//   }

//   handleSelectSuggest(suggest) {
//     console.log(suggest)
//     this.setState({ search: "", value: suggest.formatted_address })
//   }
//   render() {
//     const { search, value } = this.state
//     return (
//       <ReactGoogleMapLoader
//         params={{
//           key:APIKEY,
//           libraries: "places,geocode",
//         }}
//         render={googleMaps =>
//           googleMaps && (
//             <div>
//               <ReactGooglePlacesSuggest
//                 autocompletionRequest={{ input: search }}
//                 googleMaps={googleMaps}
//                 onSelectSuggest={this.handleSelectSuggest.bind(this)}
//               >
//                 <input
//                   type="text"
//                   value={value}
//                   placeholder="Search a location"
//                   onChange={this.handleInputChange.bind(this)}
//                 />
//               </ReactGooglePlacesSuggest>
//             </div>
//           )
//         }
//         />
//     )
//   }
// }
// export default SearchComp


import React, {Component} from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"

const MY_API_KEY = "AIzaSyAg3JhtyzxRI4ctt_MnKVUUKFK2ooaaAxc" // fake

export default class SearchComp extends React.Component {
    state = {
        search: "",
        value: "",
    }

    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.setState({
            search: "",
            value: geocodedPrediction.formatted_address,
        })
    }

    handleNoResult = () => {
        console.log("No results for ", this.state.search)
    }

    handleStatusUpdate = status => {
        console.log(status)
    }

    render() {
        const {search, value} = this.state
        return (
            <ReactGoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <ReactGooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <input
                                type="text"
                                value={value}
                                placeholder="Search a location"
                                onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                    )
                }
            />
        )
    }
}