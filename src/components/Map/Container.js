import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, google } from 'google-maps-react';

const style = {
  borderRadius: '6px',
  border: 'solid 5px black',
  justifyContent: 'center',
  frameborder: "0",
  style: "border:0",
  height: '80%',
  width: '90%',
}

class Container extends Component {
  state = {
    //google-maps-react
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    newMarker: false,
    map: true
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  render() {
    let map = ""
    if (this.state.map) {
      map = (
        <Map google={this.props.google} style={style} zoom={4} initialCenter={{ lat: 33.46810796, lng: -84.39697266 }}

          onClick={this.onMapClick}>

          <Marker
            onClick={this.onMarkerClick}
            name={"Suches, GA Post Office"}
            address={"C/O General Delivery Suches, GA 30572"}
            phoneNumber={"(706) 747-2611"}
            fee={"No"}
            position={{ lat: 34.690031, lng: -84.021988 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Mountain Crossings"}
            address={"C/O Mountain Crossings 12471 Gainseville HWY Blairsville, GA 30512"}
            phoneNumber={"(706) 745-6095"}
            fee={"No"}
            position={{ lat: 34.7352073, lng: -83.9176726 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Helen, GA Post Office"}
            address={"C/O General Delivery Helen, GA 30545"}
            phoneNumber={"(706) 878-2422"}
            fee={"No"}
            position={{ lat: 34.697962, lng: -83.719677 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Top of Georgia Hostel and Hiking Gear"}
            address={"Top Of Georgia Hostel and Hiking Gear 7675 Hwy 76 E Hiawassee, GA 30546 Your Name ETA: On Trail Cell Ph #"}
            phoneNumber={"(706) 982-3252"}
            fee={"No"}
            position={{ lat: 34.920308, lng: -83.624922 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Hiawassee, GA Post Office"}
            address={"C/O General Delivery Hiawassee, GA 30546"}
            phoneNumber={"(706) 896-3632"}
            fee={"No"}
            position={{ lat: 34.949748, lng: -83.758075 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Franklin, NC"}
            address={"C/O General Delivery Franklin, NC 28734"}
            phoneNumber={"(828) 524-3219"}
            fee={"No"}
            position={{ lat: 35.178764, lng: -83.374166 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Nantahala Outdoor Center"}
            address={"Call before Sending Nantahala Outdoor Center 13077 W Hwy 19 Bryson City, NC 28713"}
            phoneNumber={"(828) 785-4850"}
            fee={"No"}
            position={{ lat: 35.331289, lng: -83.592089 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Fontana Dam, NC Post Office"}
            address={"C/O General Delivery Fontana Dam, NC 28733"}
            phoneNumber={"(828) 498-2315"}
            fee={"No"}
            position={{ lat: 35.432654, lng: -83.821307 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Gatlinburg, TN Post Office"}
            address={"C/O General Delivery Gatlinburg, TN 37738"}
            phoneNumber={"(865) 436-3229"}
            fee={"No"}
            position={{ lat: 35.725634, lng: -83.481567 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Hot Spring, NC Post Office"}
            address={"C/O General Delivery Hot Springs, NC 28743"}
            phoneNumber={"(828) 622-3242"}
            fee={"No"}
            position={{ lat: 35.892755, lng: -82.827667 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Uncle Johnny's Nolichucky Hostel & Outfitters"}
            address={"Your Name C/O Uncle Johnny's Nolichucky Hostel & Outfitters 151 River Road Erwin, TN 37650"}
            phoneNumber={"(423) 735-0548"}
            fee={"No"}
            position={{ lat: 36.1057138, lng: -82.4485382 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Erwin, TN Post Office"}
            address={"C/O General Delivery Erwin, TN 37650"}
            phoneNumber={"(423) 743-9422"}
            fee={"No"}
            position={{ lat: 36.146058, lng: -82.415885 }}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Elk Park, NC Post Office"}
            address={"C/O General Delivery Elk Park, NC 28622"}
            phoneNumber={"(828) 733-5711"}
            fee={"No"}
            position={{ lat: 36.161367, lng: -81.872089}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Mountain Harbor Hostel"}
            address={"Your Name c/o Hiker Hostel 9151 Hwy 19E Roan Mountain, TN 37687"}
            phoneNumber={"(423) 772-9494"}
            fee={"No"}
            position={{ lat: 36.1793997, lng: -82.0162949}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Roan Mountain, TN Post Office"}
            address={"C/O General Delivery Roan Mountain, TN 37687"}
            phoneNumber={"(423) 772-3014"}
            fee={"No"}
            position={{ lat: 36.200261, lng: -82.074508}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Hampton, TN Post Office"}
            address={"C/O General Delivery Hampton, TN 37658"}
            phoneNumber={"(423) 725 2177"}
            fee={"No"}
            position={{ lat:36.285935, lng:  -82.165053}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Shady Valley, TN Post Office"}
            address={"C/O General Delivery Shady Valley, TN 37688"}
            phoneNumber={"(423) 739-2173"}
            fee={"No"}
            position={{ lat:36.519590, lng: -81.928009}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Damascus, VA Post Office"}
            address={"C/O General Delivery Damascus, VA 24236"}
            phoneNumber={"(276) 475-3411"}
            fee={"No"}
            position={{ lat:36.636054, lng: -81.789763}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Troutdale, VA Post Office"}
            address={"C/O General Delivery Troutdale, VA 24378"}
            phoneNumber={"(276) 677-3221"}
            fee={"No"}
            position={{ lat:36.702527, lng: -81.438986}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Sugar Grove, VA Post Office"}
            address={"C/O General Delivery Sugar Grove, VA 24375"}
            phoneNumber={"(276) 677-3200"}
            fee={"No"}
            position={{ lat:36.775337, lng:  -81.413010}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Atkins, VA Post Office"}
            address={"C/O General Delivery Atkins, VA 24311"}
            phoneNumber={"(276) 783-5551"}
            fee={"No"}
            position={{ lat:36.866887, lng: -81.420511}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Bland, VA Post Office "}
            address={"C/O General Delievery Bland, VA 24315"}
            phoneNumber={"(276) 688-3751"}
            fee={"No"}
            position={{ lat:37.100503, lng: -81.116258}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Bastian, VA Post Office "}
            address={"C/O General Delivery Bastian, VA 24314"}
            phoneNumber={"(276) 688-4631"}
            fee={"No"}
            position={{ lat:37.152264, lng: -81.152090}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Pearisburg, VA Post Office "}
            address={"C/O General Delivery Pearisburg, VA 24134"}
            phoneNumber={"(540) 921-1100"}
            fee={"No"}
            position={{ lat:37.328092, lng:-80.735723}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Catawba, VA Post Office"}
            address={"C/O General Delivery Catawba, VA 24070"}
            phoneNumber={"(540) 384-6011"}
            fee={"No"}
            position={{ lat:37.382714, lng: -80.108696}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Cloverdale, VA Post Office"}
            address={"C/O General Delivery Cloverdale, VA 24077"}
            phoneNumber={"(540) 992-2334"}
            fee={"No"}
            position={{ lat:37.364782, lng: -79.905360}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Daleville, VA Post Office"}
            address={"C/O General Delivery Daleville, VA 24083"}
            phoneNumber={"(540) 992-4422"}
            fee={"No"}
            position={{ lat:37.406214, lng: -79.913070}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Troutville, VA Post Office"}
            address={"Troutville, VA 24175 Please Hold for AT Hiker"}
            phoneNumber={"(540) 992-1472"}
            fee={"No"}
            position={{ lat:37.412633, lng: -79.880962}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Buchanan, VA Post Office"}
            address={"C/O General Delivery Buchana, VA 24066"}
            phoneNumber={"(540) 254-2178"}
            fee={"No"}
            position={{ lat:37.527073, lng:  -79.680170}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Big Island, VA Post Office"}
            address={"C/O General Delivery Big Island, 24526"}
            phoneNumber={"(434) 299-5072"}
            fee={"No"}
            position={{ lat:37.534969, lng: -79.360876}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Glasgow, VA Post Office"}
            address={"C/O General Delivery Glasgow, VA 24555"}
            phoneNumber={"(540) 258-2852"}
            fee={"No"}
            position={{ lat:37.631506, lng: -79.449339}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Buena Vista, VA Post Office"}
            address={"C/O General Delivery Buena Vista, VA 24416"}
            phoneNumber={"(540) 261-8959"}
            fee={"No"}
            position={{ lat:37.733994, lng: -79.353468}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Montebello, VA Post Office"}
            address={"C/O General Delivery Montebello, VA 24464"}
            phoneNumber={"(540) 377-9218"}
            fee={"No"}
            position={{ lat:37.852582, lng:  -79.131301}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

          <Marker
            onClick={this.onMarkerClick}
            name={"Waynesboro, VA Post Office"}
            address={"C/O General Delivery Waynesboro, VA 22980"}
            phoneNumber={"(540) 942-7320"}
            fee={"No"}
            position={{ lat:38.067537, lng: -78.889211}}
            draggable={false}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

        </Map>
      )
    } else if (this.state.map === false) {
      map = (

        <Map google={this.props.google} style={style} zoom={4} initialCenter={{ lat: 40.6627, lng: 86.7816 }}

          onClick={this.onMapClick}>

          <Marker
            onClick={this.onMarkerClick}
            name={"Shelby Park"}
            address={"Nashville, TN 37206"}
            position={{ lat: 36.1676, lng: -86.7297 }}
            draggable={true}
            onDragend={this.centerMoved} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>

        </Map>
      )
    }

    return (
      <React.Fragment>
        {map}
      </React.Fragment>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyA1JExI4EYtc_alntsyg52wBjCdeEAQGWc")
})(Container)