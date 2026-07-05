# @ohos.geoLocationManager

Provides interfaces for acquiring location information, managing location switches, geocoding, reverse geocoding, country code, fencing and other functions.

**起始版本：** 22

**系统能力：** SystemCapability.Location.Location.Core

## 导入模块

```TypeScript
import { geoLocationManager } from '@kit.LocationKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addBeaconFence](arkts-geolocationmanager-addbeaconfence-f.md#addBeaconFence-1) | Add a beacon fence. |
| [addGnssGeofence](arkts-geolocationmanager-addgnssgeofence-f.md#addGnssGeofence-1) | Add a geofence. |
| <!--DelRow-->[disableLocation](arkts-geolocationmanager-disablelocation-f-sys.md#disableLocation-1) | Disable location switch. |
| <!--DelRow-->[disableLocationByUserId](arkts-geolocationmanager-disablelocationbyuserid-f-sys.md#disableLocationByUserId-1) | Turn off the location switch for a specified user. |
| <!--DelRow-->[disableLocationMock](arkts-geolocationmanager-disablelocationmock-f-sys.md#disableLocationMock-1) | Disable the geographical location simulation function. |
| <!--DelRow-->[disableReverseGeocodingMock](arkts-geolocationmanager-disablereversegeocodingmock-f-sys.md#disableReverseGeocodingMock-1) | Disable the reverse geocoding simulation function. |
| <!--DelRow-->[enableLocation](arkts-geolocationmanager-enablelocation-f-sys.md#enableLocation-1) | Enable location switch. |
| <!--DelRow-->[enableLocation](arkts-geolocationmanager-enablelocation-f-sys.md#enableLocation-2) | Enable location switch. |
| <!--DelRow-->[enableLocationByUserId](arkts-geolocationmanager-enablelocationbyuserid-f-sys.md#enableLocationByUserId-1) | Turn on the location switch for a specified user. |
| <!--DelRow-->[enableLocationMock](arkts-geolocationmanager-enablelocationmock-f-sys.md#enableLocationMock-1) | Enable the geographical location simulation function. |
| <!--DelRow-->[enableReverseGeocodingMock](arkts-geolocationmanager-enablereversegeocodingmock-f-sys.md#enableReverseGeocodingMock-1) | Enable the reverse geocoding simulation function. |
| [findMatchingWlan](arkts-geolocationmanager-findmatchingwlan-f.md#findMatchingWlan-1) | Check whether the WLAN scan results match the WLAN BSSID list, return information about the WLAN device that is successfully matched. |
| [flushCachedGnssLocations](arkts-geolocationmanager-flushcachedgnsslocations-f.md#flushCachedGnssLocations-1) | All prepared GNSS locations are returned to the application through the callback function, and the bottom-layer buffer is cleared. |
| [flushCachedGnssLocations](arkts-geolocationmanager-flushcachedgnsslocations-f.md#flushCachedGnssLocations-2) | All prepared GNSS locations are returned to the application, and the bottom-layer buffer is cleared. |
| [getActiveGeoFences](arkts-geolocationmanager-getactivegeofences-f.md#getActiveGeoFences-1) | Get all active fences. |
| [getAddressesFromLocation](arkts-geolocationmanager-getaddressesfromlocation-f.md#getAddressesFromLocation-1) | Obtain address info from location. |
| [getAddressesFromLocation](arkts-geolocationmanager-getaddressesfromlocation-f.md#getAddressesFromLocation-2) | Obtain address info from location. |
| [getAddressesFromLocationName](arkts-geolocationmanager-getaddressesfromlocationname-f.md#getAddressesFromLocationName-1) | Obtain latitude and longitude info from location address. |
| [getAddressesFromLocationName](arkts-geolocationmanager-getaddressesfromlocationname-f.md#getAddressesFromLocationName-2) | Obtain latitude and longitude info from location address. |
| [getCachedGnssLocationsSize](arkts-geolocationmanager-getcachedgnsslocationssize-f.md#getCachedGnssLocationsSize-1) | Obtain the number of cached GNSS locations reported at a time. |
| [getCachedGnssLocationsSize](arkts-geolocationmanager-getcachedgnsslocationssize-f.md#getCachedGnssLocationsSize-2) | Obtain the number of cached GNSS locations. |
| [getCountryCode](arkts-geolocationmanager-getcountrycode-f.md#getCountryCode-1) | Obtain the current country code. |
| [getCountryCode](arkts-geolocationmanager-getcountrycode-f.md#getCountryCode-2) | Obtain the current country code. |
| [getCurrentDistrict](arkts-geolocationmanager-getcurrentdistrict-f.md#getCurrentDistrict-1) | Obtains the information about the district where the current device is located. |
| [getCurrentLocation](arkts-geolocationmanager-getcurrentlocation-f.md#getCurrentLocation-1) | Obtain current location. |
| [getCurrentLocation](arkts-geolocationmanager-getcurrentlocation-f.md#getCurrentLocation-2) | Obtain current location. |
| [getCurrentLocation](arkts-geolocationmanager-getcurrentlocation-f.md#getCurrentLocation-3) | Obtain current location. |
| [getCurrentWifiBssidForLocating](arkts-geolocationmanager-getcurrentwifibssidforlocating-f.md#getCurrentWifiBssidForLocating-1) | Obtains the BSSID of the connected Wi-Fi hotspot. |
| [getDistanceBetweenLocations](arkts-geolocationmanager-getdistancebetweenlocations-f.md#getDistanceBetweenLocations-1) | Obtains the distance between two locations. |
| [getGeofenceSupportedCoordTypes](arkts-geolocationmanager-getgeofencesupportedcoordtypes-f.md#getGeofenceSupportedCoordTypes-1) | Obtains the coordinate system types supported by geofence. |
| [getLastLocation](arkts-geolocationmanager-getlastlocation-f.md#getLastLocation-1) | Obtain last known location. |
| <!--DelRow-->[getLocatingRequiredData](arkts-geolocationmanager-getlocatingrequireddata-f-sys.md#getLocatingRequiredData-1) | Get WiFi/BT scanning information, and use the WiFi/BT scanning information for localization. |
| <!--DelRow-->[getLocationIconStatus](arkts-geolocationmanager-getlocationiconstatus-f-sys.md#getLocationIconStatus-1) | Get location icon status. |
| [getPoiInfo](arkts-geolocationmanager-getpoiinfo-f.md#getPoiInfo-1) | Obtaining POI Information. |
| [getPostProcessingTrack](arkts-geolocationmanager-getpostprocessingtrack-f.md#getPostProcessingTrack-1) | Obtain post-processing trajectory information under specific sport mode. Only [SKIING]{@link geoLocationManager.SportsType.SKIING} is supported currently. Before calling this API, you need to call [on('locationChange')]{@link geoLocationManager.on('locationChange')} and set the input parameter [sportsType]{@link geoLocationManager.ContinuousLocationRequest.sportsType} to the specific sport mode to start tracking. Returns data within 24 hours since tracking started; Subsequent calls return only new records. |
| [isBeaconFenceSupported](arkts-geolocationmanager-isbeaconfencesupported-f.md#isBeaconFenceSupported-1) | Check whether the BeaconFence service is supported. |
| [isCachedGnssServiceSupported](arkts-geolocationmanager-iscachedgnssservicesupported-f.md#isCachedGnssServiceSupported-1) | Check whether the cached GNSS service is supported. |
| [isGeocoderAvailable](arkts-geolocationmanager-isgeocoderavailable-f.md#isGeocoderAvailable-1) | Obtain geocoding service status. |
| [isGnssFenceServiceSupported](arkts-geolocationmanager-isgnssfenceservicesupported-f.md#isGnssFenceServiceSupported-1) | Check whether the GNSS fence service is supported. |
| [isGnssServiceSupported](arkts-geolocationmanager-isgnssservicesupported-f.md#isGnssServiceSupported-1) | Check whether the GNSS service is supported. |
| [isLocationEnabled](arkts-geolocationmanager-islocationenabled-f.md#isLocationEnabled-1) | Obtain current location switch status. |
| <!--DelRow-->[isLocationEnabledByUserId](arkts-geolocationmanager-islocationenabledbyuserid-f-sys.md#isLocationEnabledByUserId-1) | Obtaining the location switch status of a specified user. |
| <!--DelRow-->[isLocationPrivacyConfirmed](arkts-geolocationmanager-islocationprivacyconfirmed-f-sys.md#isLocationPrivacyConfirmed-1) | Querying location privacy protocol confirmation status. |
| [isPoiServiceSupported](arkts-geolocationmanager-ispoiservicesupported-f.md#isPoiServiceSupported-1) | Check whether the POI service is supported. |
| [isWlanBssidMatched](arkts-geolocationmanager-iswlanbssidmatched-f.md#isWlanBssidMatched-1) | Check whether the WLAN scan results match the WLAN BSSID list. |
| [off](arkts-geolocationmanager-off-f.md#off-1) | Unsubscribe location changed. You are advised to use the {@link offLocationChange} instead. |
| [off](arkts-geolocationmanager-off-f.md#off-2) | Unsubscribe continuous location error changed. |
| [off](arkts-geolocationmanager-off-f.md#off-3) | Unsubscribe location switch changed. |
| [off](arkts-geolocationmanager-off-f.md#off-4) | Unsubscribe to cache GNSS locations update messages. |
| [off](arkts-geolocationmanager-off-f.md#off-5) | Unsubscribe satellite status changed. |
| [off](arkts-geolocationmanager-off-f.md#off-6) | Unsubscribe nmea message changed. |
| [off](arkts-geolocationmanager-off-f.md#off-7) | Remove a geofence and unsubscribe geofence status changed. |
| [off](arkts-geolocationmanager-off-f.md#off-8) | Unregistering the callback function for listening to country code changes. |
| [off](arkts-geolocationmanager-off-f.md#off-9) | Stop bluetooth scanning and unregister to listen to bluetooth scanning result changes. |
| <!--DelRow-->[off](arkts-geolocationmanager-off-f-sys.md#off-1) | Stop WiFi/BT scanning and unsubscribe from WiFi/BT scanning information changes. |
| <!--DelRow-->[off](arkts-geolocationmanager-off-f-sys.md#off-2) | Unsubscribe location icon status changed. |
| [offBluetoothScanResultChange](arkts-geolocationmanager-offbluetoothscanresultchange-f.md#offBluetoothScanResultChange-1) | Stop bluetooth scanning and unregister to listen to bluetooth scanning result changes. |
| [offCachedGnssLocationsChange](arkts-geolocationmanager-offcachedgnsslocationschange-f.md#offCachedGnssLocationsChange-1) | Unsubscribe to cache GNSS locations update messages. |
| [offCountryCodeChange](arkts-geolocationmanager-offcountrycodechange-f.md#offCountryCodeChange-1) | Unregistering the callback function for listening to country code changes. |
| <!--DelRow-->[offLocatingRequiredDataChange](arkts-geolocationmanager-offlocatingrequireddatachange-f-sys.md#offLocatingRequiredDataChange-1) | Stop WiFi/BT scanning and unsubscribe from WiFi/BT scanning information changes. |
| [offLocationChange](arkts-geolocationmanager-offlocationchange-f.md#offLocationChange-1) | Unsubscribe location changed. |
| [offLocationEnabledChange](arkts-geolocationmanager-offlocationenabledchange-f.md#offLocationEnabledChange-1) | Unsubscribe location switch changed. |
| [offLocationError](arkts-geolocationmanager-offlocationerror-f.md#offLocationError-1) | Unsubscribe continuous location error changed. |
| <!--DelRow-->[offLocationIconStatusChange](arkts-geolocationmanager-offlocationiconstatuschange-f-sys.md#offLocationIconStatusChange-1) | Unsubscribe location icon status changed. |
| [offNmeaMessage](arkts-geolocationmanager-offnmeamessage-f.md#offNmeaMessage-1) | Unsubscribe nmea message changed. |
| [offSatelliteStatusChange](arkts-geolocationmanager-offsatellitestatuschange-f.md#offSatelliteStatusChange-1) | Unsubscribe satellite status changed. |
| [on](arkts-geolocationmanager-on-f.md#on-1) | Subscribe location changed. |
| [on](arkts-geolocationmanager-on-f.md#on-2) | Subscribe continuous location error changed. |
| [on](arkts-geolocationmanager-on-f.md#on-3) | Subscribe location switch changed. |
| [on](arkts-geolocationmanager-on-f.md#on-4) | Subscribe to cache GNSS locations update messages. |
| [on](arkts-geolocationmanager-on-f.md#on-5) | Subscribe satellite status changed. |
| [on](arkts-geolocationmanager-on-f.md#on-6) | Subscribe nmea message changed. |
| [on](arkts-geolocationmanager-on-f.md#on-7) | Add a geofence and subscribe geofence status changed. |
| [on](arkts-geolocationmanager-on-f.md#on-8) | Registering the callback function for listening to country code changes. |
| [on](arkts-geolocationmanager-on-f.md#on-9) | Registers and listens to bluetooth scanning results for location services. |
| <!--DelRow-->[on](arkts-geolocationmanager-on-f-sys.md#on-1) | Subscribe to changes in WiFi/BT scanning information, and use the WiFi/BT scanning information for localization. |
| <!--DelRow-->[on](arkts-geolocationmanager-on-f-sys.md#on-2) | Subscribe location icon status changed. |
| [onBluetoothScanResultChange](arkts-geolocationmanager-onbluetoothscanresultchange-f.md#onBluetoothScanResultChange-1) | Registers and listens to bluetooth scanning results for location services. |
| [onCachedGnssLocationsChange](arkts-geolocationmanager-oncachedgnsslocationschange-f.md#onCachedGnssLocationsChange-1) | Subscribe to cache GNSS locations update messages. |
| [onCountryCodeChange](arkts-geolocationmanager-oncountrycodechange-f.md#onCountryCodeChange-1) | Registering the callback function for listening to country code changes. |
| <!--DelRow-->[onLocatingRequiredDataChange](arkts-geolocationmanager-onlocatingrequireddatachange-f-sys.md#onLocatingRequiredDataChange-1) | Subscribe to changes in WiFi/BT scanning information, and use the WiFi/BT scanning information for localization. |
| [onLocationChange](arkts-geolocationmanager-onlocationchange-f.md#onLocationChange-1) | Subscribe location changed. |
| [onLocationEnabledChange](arkts-geolocationmanager-onlocationenabledchange-f.md#onLocationEnabledChange-1) | Subscribe location switch changed. |
| [onLocationError](arkts-geolocationmanager-onlocationerror-f.md#onLocationError-1) | Subscribe continuous location error changed. |
| <!--DelRow-->[onLocationIconStatusChange](arkts-geolocationmanager-onlocationiconstatuschange-f-sys.md#onLocationIconStatusChange-1) | Subscribe location icon status changed. |
| [onNmeaMessage](arkts-geolocationmanager-onnmeamessage-f.md#onNmeaMessage-1) | Subscribe nmea message changed. |
| [onSatelliteStatusChange](arkts-geolocationmanager-onsatellitestatuschange-f.md#onSatelliteStatusChange-1) | Subscribe satellite status changed. |
| [removeBeaconFence](arkts-geolocationmanager-removebeaconfence-f.md#removeBeaconFence-1) | Remove a beacon fence. |
| [removeGnssGeofence](arkts-geolocationmanager-removegnssgeofence-f.md#removeGnssGeofence-1) | Remove a geofence. |
| [sendCommand](arkts-geolocationmanager-sendcommand-f.md#sendCommand-1) | Send extended commands to location subsystem. |
| [sendCommand](arkts-geolocationmanager-sendcommand-f.md#sendCommand-2) | Send extended commands to location subsystem. |
| <!--DelRow-->[setLocationPrivacyConfirmStatus](arkts-geolocationmanager-setlocationprivacyconfirmstatus-f-sys.md#setLocationPrivacyConfirmStatus-1) | Set location privacy protocol confirmation status. |
| <!--DelRow-->[setLocationSwitchIgnored](arkts-geolocationmanager-setlocationswitchignored-f-sys.md#setLocationSwitchIgnored-1) | Set the app locating behavior not controlled by the location switch. |
| <!--DelRow-->[setMockedLocations](arkts-geolocationmanager-setmockedlocations-f-sys.md#setMockedLocations-1) | Set the configuration parameters for location simulation. |
| <!--DelRow-->[setReverseGeocodingMockInfo](arkts-geolocationmanager-setreversegeocodingmockinfo-f-sys.md#setReverseGeocodingMockInfo-1) | Set the configuration parameters for simulating reverse geocoding. |
| [startBluetoothSearch](arkts-geolocationmanager-startbluetoothsearch-f.md#startBluetoothSearch-1) | Starts Bluetooth scanning and matches the device ID list in the input parameter with the Bluetooth scanning result. If the matching is successful, the Bluetooth device information is returned through the callback. |
| [stopBluetoothSearch](arkts-geolocationmanager-stopbluetoothsearch-f.md#stopBluetoothSearch-1) | Stop Bluetooth scanning and searching. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BeaconFence](arkts-geolocationmanager-beaconfence-i.md) | Beacon fence details. |
| [BeaconFenceRequest](arkts-geolocationmanager-beaconfencerequest-i.md) | Configuring parameters in BeaconFence request. |
| [BeaconManufactureData](arkts-geolocationmanager-beaconmanufacturedata-i.md) | Beacon equipment manufacturer data. |
| <!--DelRow-->[BluetoothScanInfo](arkts-geolocationmanager-bluetoothscaninfo-i-sys.md) | Describes the contents of the Bluetooth scan results. |
| [BluetoothScanResult](arkts-geolocationmanager-bluetoothscanresult-i.md) | Describes the contents of the bluetooth scan results. |
| [BluetoothSearchRequest](arkts-geolocationmanager-bluetoothsearchrequest-i.md) | Indicates request parameters for Bluetooth search function. |
| [CachedGnssLocationsRequest](arkts-geolocationmanager-cachedgnsslocationsrequest-i.md) | Parameters for requesting to report cache location information. |
| <!--DelRow-->[CellInfo](arkts-geolocationmanager-cellinfo-i-sys.md) | Cell information. |
| [ContinuousLocationRequest](arkts-geolocationmanager-continuouslocationrequest-i.md) | Configuring parameters in continuous location requests. |
| [CountryCode](arkts-geolocationmanager-countrycode-i.md) | Country code structure. |
| [CurrentLocationRequest](arkts-geolocationmanager-currentlocationrequest-i.md) | Configuring parameters in current location requests. |
| [DistrictInfo](arkts-geolocationmanager-districtinfo-i.md) | Indicates request parameters for obtaining the district information. |
| [DistrictRequestParams](arkts-geolocationmanager-districtrequestparams-i.md) | Indicates request parameters for obtaining the district information. |
| [GeoAddress](arkts-geolocationmanager-geoaddress-i.md) | Data struct describes geographic locations. |
| [GeoCodeRequest](arkts-geolocationmanager-geocoderequest-i.md) | Configuring parameters in geocode requests. |
| [Geofence](arkts-geolocationmanager-geofence-i.md) | Circular fence information. |
| [GeofenceRequest](arkts-geolocationmanager-geofencerequest-i.md) | Configuring parameters in geofence requests. |
| [GeofenceTransition](arkts-geolocationmanager-geofencetransition-i.md) | Geofence transition status. |
| [GnssGeofenceRequest](arkts-geolocationmanager-gnssgeofencerequest-i.md) | Configuring parameters in GNSS geofence requests. |
| <!--DelRow-->[LocatingRequiredData](arkts-geolocationmanager-locatingrequireddata-i-sys.md) | Describes the structure of the data required for locating. |
| <!--DelRow-->[LocatingRequiredDataConfig](arkts-geolocationmanager-locatingrequireddataconfig-i-sys.md) | Describes the request parameters for obtaining the data required for locating. |
| [Location](arkts-geolocationmanager-location-i.md) | Provides information about geographic locations. |
| [LocationCommand](arkts-geolocationmanager-locationcommand-i.md) | Location subsystem command structure. |
| <!--DelRow-->[LocationMockConfig](arkts-geolocationmanager-locationmockconfig-i-sys.md) | Parameters for configuring the location simulation function. |
| [LocationRequest](arkts-geolocationmanager-locationrequest-i.md) | Configuring parameters in location requests. |
| [MatchingWlanInfo](arkts-geolocationmanager-matchingwlaninfo-i.md) | Matching WLAN information structure. |
| [Poi](arkts-geolocationmanager-poi-i.md) | Describes the information about a single POI. |
| [PoiInfo](arkts-geolocationmanager-poiinfo-i.md) | Describes the POI information struct. |
| [ReverseGeoCodeRequest](arkts-geolocationmanager-reversegeocoderequest-i.md) | Configuring parameters in reverse geocode requests. |
| <!--DelRow-->[ReverseGeocodingMockInfo](arkts-geolocationmanager-reversegeocodingmockinfo-i-sys.md) | Configuration parameters for simulating reverse geocoding. |
| [SatelliteStatusInfo](arkts-geolocationmanager-satellitestatusinfo-i.md) | Satellite status information. |
| [SingleLocationRequest](arkts-geolocationmanager-singlelocationrequest-i.md) | Configuring parameters in single location requests. |
| <!--DelRow-->[WifiScanInfo](arkts-geolocationmanager-wifiscaninfo-i-sys.md) | Describes the scanned WiFi information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [BeaconFenceInfoType](arkts-geolocationmanager-beaconfenceinfotype-e.md) | Enum for the beacon fence information type. |
| [CoordinateSystemType](arkts-geolocationmanager-coordinatesystemtype-e.md) | Enum for coordinate system type. |
| [CountryCodeType](arkts-geolocationmanager-countrycodetype-e.md) | Enum for country code type. |
| [GeofenceTransitionEvent](arkts-geolocationmanager-geofencetransitionevent-e.md) | Enum for geofence transition status. |
| [LocatingPriority](arkts-geolocationmanager-locatingpriority-e.md) | Enum for locating priority. |
| <!--DelRow-->[LocatingRequiredDataType](arkts-geolocationmanager-locatingrequireddatatype-e-sys.md) | Enum for locating required data type. |
| [LocationError](arkts-geolocationmanager-locationerror-e.md) | Enum for location error code. |
| <!--DelRow-->[LocationIconStatus](arkts-geolocationmanager-locationiconstatus-e-sys.md) | Enum for location icon status. |
| <!--DelRow-->[LocationPrivacyType](arkts-geolocationmanager-locationprivacytype-e-sys.md) | Enum for location privacy type. |
| [LocationRequestPriority](arkts-geolocationmanager-locationrequestpriority-e.md) | Enum for location priority. |
| [LocationRequestScenario](arkts-geolocationmanager-locationrequestscenario-e.md) | Enum for location scenario. |
| [LocationSourceType](arkts-geolocationmanager-locationsourcetype-e.md) | Enum for the source of the location. |
| [PowerConsumptionScenario](arkts-geolocationmanager-powerconsumptionscenario-e.md) | Enum for power consumption scenario. |
| [SatelliteAdditionalInfo](arkts-geolocationmanager-satelliteadditionalinfo-e.md) | Enum for satellite additional information. |
| [SatelliteConstellationCategory](arkts-geolocationmanager-satelliteconstellationcategory-e.md) | Enum for satellite constellation category. |
| [SportsType](arkts-geolocationmanager-sportstype-e.md) | Enum for sports type |
| [UserActivityScenario](arkts-geolocationmanager-useractivityscenario-e.md) | Enum for user activity scenario. |

