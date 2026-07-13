# @ohos.geoLocationManager

Provides interfaces for acquiring location information, managing location switches,
geocoding, reverse geocoding, country code, fencing and other functions.

**Since:** 22

**System capability:** SystemCapability.Location.Location.Core

## Modules to Import

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addBeaconFence](arkts-location-addbeaconfence-f.md#addbeaconfence-1) | Add a beacon fence. |
| [addGnssGeofence](arkts-location-addgnssgeofence-f.md#addgnssgeofence-1) | Add a geofence. |
| [findMatchingWlan](arkts-location-findmatchingwlan-f.md#findmatchingwlan-1) | Check whether the WLAN scan results match the WLAN BSSID list,return information about the WLAN device that is successfully matched. |
| [flushCachedGnssLocations](arkts-location-flushcachedgnsslocations-f.md#flushcachedgnsslocations-1) | All prepared GNSS locations are returned to the application through the callback function,and the bottom-layer buffer is cleared. |
| [flushCachedGnssLocations](arkts-location-flushcachedgnsslocations-f.md#flushcachedgnsslocations-2) | All prepared GNSS locations are returned to the application,and the bottom-layer buffer is cleared. |
| [getActiveGeoFences](arkts-location-getactivegeofences-f.md#getactivegeofences-1) | Get all active fences. |
| [getAddressesFromLocation](arkts-location-getaddressesfromlocation-f.md#getaddressesfromlocation-1) | Obtain address info from location. |
| [getAddressesFromLocation](arkts-location-getaddressesfromlocation-f.md#getaddressesfromlocation-2) | Obtain address info from location. |
| [getAddressesFromLocationName](arkts-location-getaddressesfromlocationname-f.md#getaddressesfromlocationname-1) | Obtain latitude and longitude info from location address. |
| [getAddressesFromLocationName](arkts-location-getaddressesfromlocationname-f.md#getaddressesfromlocationname-2) | Obtain latitude and longitude info from location address. |
| [getCachedGnssLocationsSize](arkts-location-getcachedgnsslocationssize-f.md#getcachedgnsslocationssize-1) | Obtain the number of cached GNSS locations reported at a time. |
| [getCachedGnssLocationsSize](arkts-location-getcachedgnsslocationssize-f.md#getcachedgnsslocationssize-2) | Obtain the number of cached GNSS locations. |
| [getCountryCode](arkts-location-getcountrycode-f.md#getcountrycode-1) | Obtain the current country code. |
| [getCountryCode](arkts-location-getcountrycode-f.md#getcountrycode-2) | Obtain the current country code. |
| [getCurrentDistrict](arkts-location-getcurrentdistrict-f.md#getcurrentdistrict-1) | Obtains the information about the district where the current device is located. |
| [getCurrentLocation](arkts-location-getcurrentlocation-f.md#getcurrentlocation-1) | Obtain current location. |
| [getCurrentLocation](arkts-location-getcurrentlocation-f.md#getcurrentlocation-2) | Obtain current location. |
| [getCurrentLocation](arkts-location-getcurrentlocation-f.md#getcurrentlocation-3) | Obtain current location. |
| [getCurrentWifiBssidForLocating](arkts-location-getcurrentwifibssidforlocating-f.md#getcurrentwifibssidforlocating-1) | Obtains the BSSID of the connected Wi-Fi hotspot. |
| [getDistanceBetweenLocations](arkts-location-getdistancebetweenlocations-f.md#getdistancebetweenlocations-1) | Obtains the distance between two locations. |
| [getGeofenceSupportedCoordTypes](arkts-location-getgeofencesupportedcoordtypes-f.md#getgeofencesupportedcoordtypes-1) | Obtains the coordinate system types supported by geofence. |
| [getLastLocation](arkts-location-getlastlocation-f.md#getlastlocation-1) | Obtain last known location. |
| [getPoiInfo](arkts-location-getpoiinfo-f.md#getpoiinfo-1) | Obtaining POI Information. |
| [getPostProcessingTrack](arkts-location-getpostprocessingtrack-f.md#getpostprocessingtrack-1) | Obtain post-processing trajectory information under specific sport mode. Only[SKIING](arkts-location-sportstype-e.md#skiing) is supported currently.Before calling this API, you need to call[on('locationChange')](geoLocationManager.on('locationChange')) and set the input parameter[sportsType](arkts-location-continuouslocationrequest-i-sys.md#sportstype) to the specific sport mode to starttracking.Returns data within 24 hours since tracking started; Subsequent calls return only new records. |
| [isBeaconFenceSupported](arkts-location-isbeaconfencesupported-f.md#isbeaconfencesupported-1) | Check whether the BeaconFence service is supported. |
| [isCachedGnssServiceSupported](arkts-location-iscachedgnssservicesupported-f.md#iscachedgnssservicesupported-1) | Check whether the cached GNSS service is supported. |
| [isGeocoderAvailable](arkts-location-isgeocoderavailable-f.md#isgeocoderavailable-1) | Obtain geocoding service status. |
| [isGnssFenceServiceSupported](arkts-location-isgnssfenceservicesupported-f.md#isgnssfenceservicesupported-1) | Check whether the GNSS fence service is supported. |
| [isGnssServiceSupported](arkts-location-isgnssservicesupported-f.md#isgnssservicesupported-1) | Check whether the GNSS service is supported. |
| [isLocationEnabled](arkts-location-islocationenabled-f.md#islocationenabled-1) | Obtain current location switch status. |
| [isPoiServiceSupported](arkts-location-ispoiservicesupported-f.md#ispoiservicesupported-1) | Check whether the POI service is supported. |
| [isWlanBssidMatched](arkts-location-iswlanbssidmatched-f.md#iswlanbssidmatched-1) | Check whether the WLAN scan results match the WLAN BSSID list. |
| [off](arkts-location-off-f.md#off-1) | Unsubscribe location changed.You are advised to use the {@link offLocationChange} instead. |
| [off](arkts-location-off-f.md#off-2) | Unsubscribe continuous location error changed. |
| [off](arkts-location-off-f.md#off-3) | Unsubscribe location switch changed. |
| [off](arkts-location-off-f.md#off-4) | Unsubscribe to cache GNSS locations update messages. |
| [off](arkts-location-off-f.md#off-5) | Unsubscribe satellite status changed. |
| [off](arkts-location-off-f.md#off-6) | Unsubscribe nmea message changed. |
| [off](arkts-location-off-f.md#off-7) | Remove a geofence and unsubscribe geofence status changed. |
| [off](arkts-location-off-f.md#off-8) | Unregistering the callback function for listening to country code changes. |
| [off](arkts-location-off-f.md#off-11) | Stop bluetooth scanning and unregister to listen to bluetooth scanning result changes. |
| [offLocationChange](arkts-location-offlocationchange-f.md#offlocationchange-1) | Unsubscribe location changed. |
| [on](arkts-location-on-f.md#on-1) | Subscribe location changed. |
| [on](arkts-location-on-f.md#on-2) | Subscribe continuous location error changed. |
| [on](arkts-location-on-f.md#on-3) | Subscribe location switch changed. |
| [on](arkts-location-on-f.md#on-4) | Subscribe to cache GNSS locations update messages. |
| [on](arkts-location-on-f.md#on-5) | Subscribe satellite status changed. |
| [on](arkts-location-on-f.md#on-6) | Subscribe nmea message changed. |
| [on](arkts-location-on-f.md#on-7) | Add a geofence and subscribe geofence status changed. |
| [on](arkts-location-on-f.md#on-8) | Registering the callback function for listening to country code changes. |
| [on](arkts-location-on-f.md#on-11) | Registers and listens to bluetooth scanning results for location services. |
| [onLocationChange](arkts-location-onlocationchange-f.md#onlocationchange-1) | Subscribe location changed. |
| [removeBeaconFence](arkts-location-removebeaconfence-f.md#removebeaconfence-1) | Remove a beacon fence. |
| [removeGnssGeofence](arkts-location-removegnssgeofence-f.md#removegnssgeofence-1) | Remove a geofence. |
| [sendCommand](arkts-location-sendcommand-f.md#sendcommand-1) | Send extended commands to location subsystem. |
| [sendCommand](arkts-location-sendcommand-f.md#sendcommand-2) | Send extended commands to location subsystem. |
| [startBluetoothSearch](arkts-location-startbluetoothsearch-f.md#startbluetoothsearch-1) | Starts Bluetooth scanning and matches the device ID list in the input parameterwith the Bluetooth scanning result. If the matching is successful, the Bluetoothdevice information is returned through the callback. |
| [stopBluetoothSearch](arkts-location-stopbluetoothsearch-f.md#stopbluetoothsearch-1) | Stop Bluetooth scanning and searching. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableLocation](arkts-location-disablelocation-f-sys.md#disablelocation-1) | Disable location switch. |
| [disableLocationByUserId](arkts-location-disablelocationbyuserid-f-sys.md#disablelocationbyuserid-1) | Turn off the location switch for a specified user. |
| [disableLocationMock](arkts-location-disablelocationmock-f-sys.md#disablelocationmock-1) | Disable the geographical location simulation function. |
| [disableReverseGeocodingMock](arkts-location-disablereversegeocodingmock-f-sys.md#disablereversegeocodingmock-1) | Disable the reverse geocoding simulation function. |
| [enableLocation](arkts-location-enablelocation-f-sys.md#enablelocation-1) | Enable location switch. |
| [enableLocation](arkts-location-enablelocation-f-sys.md#enablelocation-2) | Enable location switch. |
| [enableLocationByUserId](arkts-location-enablelocationbyuserid-f-sys.md#enablelocationbyuserid-1) | Turn on the location switch for a specified user. |
| [enableLocationMock](arkts-location-enablelocationmock-f-sys.md#enablelocationmock-1) | Enable the geographical location simulation function. |
| [enableReverseGeocodingMock](arkts-location-enablereversegeocodingmock-f-sys.md#enablereversegeocodingmock-1) | Enable the reverse geocoding simulation function. |
| [getLocatingRequiredData](arkts-location-getlocatingrequireddata-f-sys.md#getlocatingrequireddata-1) | Get WiFi/BT scanning information, and use the WiFi/BT scanning information for localization. |
| [getLocationIconStatus](arkts-location-getlocationiconstatus-f-sys.md#getlocationiconstatus-1) | Get location icon status. |
| [isLocationEnabledByUserId](arkts-location-islocationenabledbyuserid-f-sys.md#islocationenabledbyuserid-1) | Obtaining the location switch status of a specified user. |
| [isLocationPrivacyConfirmed](arkts-location-islocationprivacyconfirmed-f-sys.md#islocationprivacyconfirmed-1) | Querying location privacy protocol confirmation status. |
| [off](arkts-location-off-f-sys.md#off-9) | Stop WiFi/BT scanning and unsubscribe from WiFi/BT scanning information changes. |
| [off](arkts-location-off-f-sys.md#off-10) | Unsubscribe location icon status changed. |
| [on](arkts-location-on-f-sys.md#on-9) | Subscribe to changes in WiFi/BT scanning information,and use the WiFi/BT scanning information for localization. |
| [on](arkts-location-on-f-sys.md#on-10) | Subscribe location icon status changed. |
| [setLocationPrivacyConfirmStatus](arkts-location-setlocationprivacyconfirmstatus-f-sys.md#setlocationprivacyconfirmstatus-1) | Set location privacy protocol confirmation status. |
| [setLocationSwitchIgnored](arkts-location-setlocationswitchignored-f-sys.md#setlocationswitchignored-1) | Set the app locating behavior not controlled by the location switch. |
| [setMockedLocations](arkts-location-setmockedlocations-f-sys.md#setmockedlocations-1) | Set the configuration parameters for location simulation. |
| [setReverseGeocodingMockInfo](arkts-location-setreversegeocodingmockinfo-f-sys.md#setreversegeocodingmockinfo-1) | Set the configuration parameters for simulating reverse geocoding. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BeaconFence](arkts-location-beaconfence-i.md) | Beacon fence details. |
| [BeaconFenceRequest](arkts-location-beaconfencerequest-i.md) | Configuring parameters in BeaconFence request. |
| [BeaconManufactureData](arkts-location-beaconmanufacturedata-i.md) | Beacon equipment manufacturer data. |
| [BluetoothScanResult](arkts-location-bluetoothscanresult-i.md) | Describes the contents of the bluetooth scan results. |
| [BluetoothSearchRequest](arkts-location-bluetoothsearchrequest-i.md) | Indicates request parameters for Bluetooth search function. |
| [CachedGnssLocationsRequest](arkts-location-cachedgnsslocationsrequest-i.md) | Parameters for requesting to report cache location information. |
| [ContinuousLocationRequest](arkts-location-continuouslocationrequest-i.md) | Configuring parameters in continuous location requests. |
| [CountryCode](arkts-location-countrycode-i.md) | Country code structure. |
| [CurrentLocationRequest](arkts-location-currentlocationrequest-i.md) | Configuring parameters in current location requests. |
| [DistrictInfo](arkts-location-districtinfo-i.md) | Indicates request parameters for obtaining the district information. |
| [DistrictRequestParams](arkts-location-districtrequestparams-i.md) | Indicates request parameters for obtaining the district information. |
| [GeoAddress](arkts-location-geoaddress-i.md) | Data struct describes geographic locations. |
| [GeoCodeRequest](arkts-location-geocoderequest-i.md) | Configuring parameters in geocode requests. |
| [Geofence](arkts-location-geofence-i.md) | Circular fence information. |
| [GeofenceRequest](arkts-location-geofencerequest-i.md) | Configuring parameters in geofence requests. |
| [GeofenceTransition](arkts-location-geofencetransition-i.md) | Geofence transition status. |
| [GnssGeofenceRequest](arkts-location-gnssgeofencerequest-i.md) | Configuring parameters in GNSS geofence requests. |
| [Location](arkts-location-location-i.md) | Provides information about geographic locations. |
| [LocationCommand](arkts-location-locationcommand-i.md) | Location subsystem command structure. |
| [LocationRequest](arkts-location-locationrequest-i.md) | Configuring parameters in location requests. |
| [MatchingWlanInfo](arkts-location-matchingwlaninfo-i.md) | Matching WLAN information structure. |
| [Poi](arkts-location-poi-i.md) | Describes the information about a single POI. |
| [PoiInfo](arkts-location-poiinfo-i.md) | Describes the POI information struct. |
| [ReverseGeoCodeRequest](arkts-location-reversegeocoderequest-i.md) | Configuring parameters in reverse geocode requests. |
| [SatelliteStatusInfo](arkts-location-satellitestatusinfo-i.md) | Satellite status information. |
| [SingleLocationRequest](arkts-location-singlelocationrequest-i.md) | Configuring parameters in single location requests. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [BluetoothScanInfo](arkts-location-bluetoothscaninfo-i-sys.md) | Describes the contents of the Bluetooth scan results. |
| [CellInfo](arkts-location-cellinfo-i-sys.md) | Cell information. |
| [ContinuousLocationRequest](arkts-location-continuouslocationrequest-i-sys.md) | Configuring parameters in continuous location requests. |
| [GeoAddress](arkts-location-geoaddress-i-sys.md) | Data struct describes geographic locations. |
| [LocatingRequiredData](arkts-location-locatingrequireddata-i-sys.md) | Describes the structure of the data required for locating. |
| [LocatingRequiredDataConfig](arkts-location-locatingrequireddataconfig-i-sys.md) | Describes the request parameters for obtaining the data required for locating. |
| [LocationMockConfig](arkts-location-locationmockconfig-i-sys.md) | Parameters for configuring the location simulation function. |
| [ReverseGeocodingMockInfo](arkts-location-reversegeocodingmockinfo-i-sys.md) | Configuration parameters for simulating reverse geocoding. |
| [WifiScanInfo](arkts-location-wifiscaninfo-i-sys.md) | Describes the scanned WiFi information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [BeaconFenceInfoType](arkts-location-beaconfenceinfotype-e.md) | Enum for the beacon fence information type. |
| [CoordinateSystemType](arkts-location-coordinatesystemtype-e.md) | Enum for coordinate system type. |
| [CountryCodeType](arkts-location-countrycodetype-e.md) | Enum for country code type. |
| [GeofenceTransitionEvent](arkts-location-geofencetransitionevent-e.md) | Enum for geofence transition status. |
| [LocatingPriority](arkts-location-locatingpriority-e.md) | Enum for locating priority. |
| [LocationError](arkts-location-locationerror-e.md) | Enum for location error code. |
| [LocationRequestPriority](arkts-location-locationrequestpriority-e.md) | Enum for location priority. |
| [LocationRequestScenario](arkts-location-locationrequestscenario-e.md) | Enum for location scenario. |
| [LocationSourceType](arkts-location-locationsourcetype-e.md) | Enum for the source of the location. |
| [PowerConsumptionScenario](arkts-location-powerconsumptionscenario-e.md) | Enum for power consumption scenario. |
| [SatelliteAdditionalInfo](arkts-location-satelliteadditionalinfo-e.md) | Enum for satellite additional information. |
| [SatelliteConstellationCategory](arkts-location-satelliteconstellationcategory-e.md) | Enum for satellite constellation category. |
| [SportsType](arkts-location-sportstype-e.md) | Enum for sports type |
| [UserActivityScenario](arkts-location-useractivityscenario-e.md) | Enum for user activity scenario. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [GeofenceTransitionEvent](arkts-location-geofencetransitionevent-e-sys.md) | Enum for geofence transition status. |
| [LocatingRequiredDataType](arkts-location-locatingrequireddatatype-e-sys.md) | Enum for locating required data type. |
| [LocationIconStatus](arkts-location-locationiconstatus-e-sys.md) | Enum for location icon status. |
| [LocationPrivacyType](arkts-location-locationprivacytype-e-sys.md) | Enum for location privacy type. |
<!--DelEnd-->

