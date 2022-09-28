import React, {Component} from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"

// const MY_API_KEY = "AIzaSyAg3JhtyzxRI4ctt_MnKVUUKFK2ooaaAxc"  // .net key from gopi sir
const MY_API_KEY = "AIzaSyAeKUaLMk4ebscOh_YN-hRE700cBojopB0"  // .new key from Pramil_skoolz

export default class SearchComp extends React.Component {
    state = {
        search: "",
        value: "",
    }

    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }

    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction,);
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
                                input: search     
                            }}
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" 
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