# @ohos.telephony.radio

Provides interfaces for applications to obtain the network state, cell information, signal information, and device ID of the wireless cellular network (WCN), and provides a callback registration mechanism to listen for changes of the network, cell, and signal status of the WCN.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

## Modules to Import

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getISOCountryCodeForNetwork](arkts-telephony-getisocountrycodefornetwork-f.md#getisocountrycodefornetwork-1) | Obtains the ISO-defined country code of the country where the registered network is deployed. |
| [getISOCountryCodeForNetwork](arkts-telephony-getisocountrycodefornetwork-f.md#getisocountrycodefornetwork-2) | Obtains the ISO-defined country code of the country where the registered network is deployed. |
| [getISOCountryCodeForNetworkSync](arkts-telephony-getisocountrycodefornetworksync-f.md#getisocountrycodefornetworksync-1) | Obtains the ISO-defined country code of the country where the registered network is deployed. |
| [getNetworkSelectionMode](arkts-telephony-getnetworkselectionmode-f.md#getnetworkselectionmode-1) | Obtains the network search mode of the SIM card in a specified slot. |
| [getNetworkSelectionMode](arkts-telephony-getnetworkselectionmode-f.md#getnetworkselectionmode-2) | Obtains the network search mode of the SIM card in a specified slot. |
| [getNetworkState](arkts-telephony-getnetworkstate-f.md#getnetworkstate-1) | Obtains the network state of the registered network. |
| [getNetworkState](arkts-telephony-getnetworkstate-f.md#getnetworkstate-2) | Obtains the network state of the registered network. |
| [getNetworkState](arkts-telephony-getnetworkstate-f.md#getnetworkstate-3) | Obtains the network state of the registered network. |
| [getOperatorName](arkts-telephony-getoperatorname-f.md#getoperatorname-1) | Get the operator name of the specified SIM card slot. |
| [getOperatorName](arkts-telephony-getoperatorname-f.md#getoperatorname-2) | Get the operator name of the specified SIM card slot. |
| [getOperatorNameSync](arkts-telephony-getoperatornamesync-f.md#getoperatornamesync-1) | Get the operator name of the specified SIM card slot. |
| [getPrimarySlotId](arkts-telephony-getprimaryslotid-f.md#getprimaryslotid-1) | Obtains the index number of the card slot where the primary card is located if multiple SIM cards are inserted. The primary card is the SIM card inserted in the card slot that uses data services by default. |
| [getPrimarySlotId](arkts-telephony-getprimaryslotid-f.md#getprimaryslotid-2) | Obtains the index number of the card slot where the primary card is located if multiple SIM cards are inserted. The primary card is the SIM card inserted in the card slot that uses data services by default. |
| [getRadioTech](arkts-telephony-getradiotech-f.md#getradiotech-1) | Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain. |
| [getRadioTech](arkts-telephony-getradiotech-f.md#getradiotech-2) | Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain. |
| [getRadioTechSync](arkts-telephony-getradiotechsync-f.md#getradiotechsync-1) | Obtains radio access technology (RAT) of the registered network. |
| [getSignalInformation](arkts-telephony-getsignalinformation-f.md#getsignalinformation-1) | Obtains the list of signal strength information of the registered network corresponding to a specified SIM card. |
| [getSignalInformation](arkts-telephony-getsignalinformation-f.md#getsignalinformation-2) | Obtains the list of signal strength information of the registered network corresponding to a specified SIM card. |
| [getSignalInformationSync](arkts-telephony-getsignalinformationsync-f.md#getsignalinformationsync-1) | Obtains the list of signal strength information of the registered network corresponding to a specified SIM card. |
| [isNRSupported](arkts-telephony-isnrsupported-f.md#isnrsupported-1) | Checks whether the device supports 5G New Radio (NR). |
| [isNRSupported](arkts-telephony-isnrsupported-f.md#isnrsupported-2) | Checks whether the device supports 5G New Radio (NR) by according card slot. |
| [isNrSupported](arkts-telephony-isnrsupported-f.md#isnrsupported-1) | Checks whether the device supports 5G New Radio (NR). |
| [isNrSupported](arkts-telephony-isnrsupported-f.md#isnrsupported-2) | Checks whether the device supports 5G New Radio (NR) by according card slot. |
| [isRadioOn](arkts-telephony-isradioon-f.md#isradioon-1) | Checks whether the radio service is enabled. |
| [isRadioOn](arkts-telephony-isradioon-f.md#isradioon-2) | Checks whether the radio service is enabled. |
| [isRadioOn](arkts-telephony-isradioon-f.md#isradioon-3) | Checks whether the radio service is enabled. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [factoryReset](arkts-telephony-factoryreset-f-sys.md#factoryreset-1) | Reset all network settings of telephony. |
| [getBasebandVersion](arkts-telephony-getbasebandversion-f-sys.md#getbasebandversion-1) | Get the version of Baseband. |
| [getBasebandVersion](arkts-telephony-getbasebandversion-f-sys.md#getbasebandversion-2) | Get the version of Baseband. |
| [getCellInformation](arkts-telephony-getcellinformation-f-sys.md#getcellinformation-1) | Get the current cell information. |
| [getCellInformation](arkts-telephony-getcellinformation-f-sys.md#getcellinformation-2) | Get the current cell information. |
| [getCellInformation](arkts-telephony-getcellinformation-f-sys.md#getcellinformation-3) | Get the current cell information. |
| [getIMEI](arkts-telephony-getimei-f-sys.md#getimei-1) | Obtains the IMEI of a specified card slot of the device. |
| [getIMEI](arkts-telephony-getimei-f-sys.md#getimei-2) | Obtains the IMEI of a specified card slot of the device. |
| [getIMEI](arkts-telephony-getimei-f-sys.md#getimei-3) | Obtains the IMEI of a specified card slot of the device. |
| [getIMEISV](arkts-telephony-getimeisv-f-sys.md#getimeisv-1) | Obtains the software version number of a specified card slot of the device. |
| [getImsRegInfo](arkts-telephony-getimsreginfo-f-sys.md#getimsreginfo-1) | Get the IMS registration state info of specified IMS service type. |
| [getImsRegInfo](arkts-telephony-getimsreginfo-f-sys.md#getimsreginfo-2) | Get the IMS registration state info of specified IMS service type. |
| [getMEID](arkts-telephony-getmeid-f-sys.md#getmeid-1) | Obtains the MEID of a specified card slot of the device. |
| [getMEID](arkts-telephony-getmeid-f-sys.md#getmeid-2) | Obtains the MEID of a specified card slot of the device. |
| [getMEID](arkts-telephony-getmeid-f-sys.md#getmeid-3) | Obtains the MEID of a specified card slot of the device. |
| [getNROptionMode](arkts-telephony-getnroptionmode-f-sys.md#getnroptionmode-1) | Get the option mode of NR. |
| [getNROptionMode](arkts-telephony-getnroptionmode-f-sys.md#getnroptionmode-2) | Get the option mode of NR. |
| [getNetworkCapability](arkts-telephony-getnetworkcapability-f-sys.md#getnetworkcapability-1) | Get the network capability state according to the specified capability type. |
| [getNetworkCapability](arkts-telephony-getnetworkcapability-f-sys.md#getnetworkcapability-2) | Get the network capability state according to the specified capability type. |
| [getNetworkSearchInformation](arkts-telephony-getnetworksearchinformation-f-sys.md#getnetworksearchinformation-1) | Get network search information. |
| [getNetworkSearchInformation](arkts-telephony-getnetworksearchinformation-f-sys.md#getnetworksearchinformation-2) | Get network search information. |
| [getNrOptionMode](arkts-telephony-getnroptionmode-f-sys.md#getnroptionmode-1) | Get the option mode of NR. |
| [getNrOptionMode](arkts-telephony-getnroptionmode-f-sys.md#getnroptionmode-2) | Get the option mode of NR. |
| [getNrOptionMode](arkts-telephony-getnroptionmode-f-sys.md#getnroptionmode-3) | Get the option mode of NR. |
| [getPreferredNetwork](arkts-telephony-getpreferrednetwork-f-sys.md#getpreferrednetwork-1) | Get the preferred network for the specified SIM card slot. |
| [getPreferredNetwork](arkts-telephony-getpreferrednetwork-f-sys.md#getpreferrednetwork-2) | Get the preferred network for the specified SIM card slot. |
| [getUniqueDeviceId](arkts-telephony-getuniquedeviceid-f-sys.md#getuniquedeviceid-1) | Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned. |
| [getUniqueDeviceId](arkts-telephony-getuniquedeviceid-f-sys.md#getuniquedeviceid-2) | Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned. |
| [getUniqueDeviceId](arkts-telephony-getuniquedeviceid-f-sys.md#getuniquedeviceid-3) | Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned. |
| [isManualNetworkScanning](arkts-telephony-ismanualnetworkscanning-f-sys.md#ismanualnetworkscanning-1) | Determine whether the current manual network scan is in progress. |
| [off](arkts-telephony-off-f-sys.md#off-1) | Unsubscribe from imsRegStateChange event. |
| [on](arkts-telephony-on-f-sys.md#on-1) | Called when the IMS registration state of specified IMS service type corresponding to a monitored {@code slotId} updates. |
| [sendUpdateCellLocationRequest](arkts-telephony-sendupdatecelllocationrequest-f-sys.md#sendupdatecelllocationrequest-1) | Actively requests to update location information. |
| [sendUpdateCellLocationRequest](arkts-telephony-sendupdatecelllocationrequest-f-sys.md#sendupdatecelllocationrequest-2) | Actively requests to update location information. |
| [sendUpdateCellLocationRequest](arkts-telephony-sendupdatecelllocationrequest-f-sys.md#sendupdatecelllocationrequest-3) | Actively requests to update location information. |
| [setNROptionMode](arkts-telephony-setnroptionmode-f-sys.md#setnroptionmode-1) | Set the NR option mode. |
| [setNROptionMode](arkts-telephony-setnroptionmode-f-sys.md#setnroptionmode-2) | Set the NR option mode. |
| [setNetworkCapability](arkts-telephony-setnetworkcapability-f-sys.md#setnetworkcapability-1) | Set the type and state for the specified network capability. |
| [setNetworkCapability](arkts-telephony-setnetworkcapability-f-sys.md#setnetworkcapability-2) | Set the type and state for the specified network capability. |
| [setNetworkSelectionMode](arkts-telephony-setnetworkselectionmode-f-sys.md#setnetworkselectionmode-1) | Set the current network selection mode. |
| [setNetworkSelectionMode](arkts-telephony-setnetworkselectionmode-f-sys.md#setnetworkselectionmode-2) | Set the current network selection mode. |
| [setPreferredNetwork](arkts-telephony-setpreferrednetwork-f-sys.md#setpreferrednetwork-1) | Set the preferred network for the specified SIM card slot. |
| [setPreferredNetwork](arkts-telephony-setpreferrednetwork-f-sys.md#setpreferrednetwork-2) | Set the preferred network for the specified SIM card slot. |
| [setPrimarySlotId](arkts-telephony-setprimaryslotid-f-sys.md#setprimaryslotid-1) | Set the index number of the main SIM card slot. |
| [setPrimarySlotId](arkts-telephony-setprimaryslotid-f-sys.md#setprimaryslotid-2) | Set the index number of the main SIM card slot. |
| [startManualNetworkScan](arkts-telephony-startmanualnetworkscan-f-sys.md#startmanualnetworkscan-1) | start ManualNetworkScan , Real-time report. |
| [stopManualNetworkScan](arkts-telephony-stopmanualnetworkscan-f-sys.md#stopmanualnetworkscan-1) | Stop ManualNetworkScan. |
| [turnOffRadio](arkts-telephony-turnoffradio-f-sys.md#turnoffradio-1) | Turn off the radio service. |
| [turnOffRadio](arkts-telephony-turnoffradio-f-sys.md#turnoffradio-2) | Turn off the radio service. |
| [turnOffRadio](arkts-telephony-turnoffradio-f-sys.md#turnoffradio-3) | Turn off the radio service. |
| [turnOnRadio](arkts-telephony-turnonradio-f-sys.md#turnonradio-1) | Turn on the radio service. |
| [turnOnRadio](arkts-telephony-turnonradio-f-sys.md#turnonradio-2) | Turn on the radio service. |
| [turnOnRadio](arkts-telephony-turnonradio-f-sys.md#turnonradio-3) | Turn on the radio service. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CellInformation](arkts-telephony-cellinformation-i.md) | Obtains current cell information. |
| [NetworkRadioTech](arkts-telephony-networkradiotech-i.md) | Describes the radio access technology (RAT) of registered network. |
| [NetworkState](arkts-telephony-networkstate-i.md) | Describes the network registration state. |
| [SignalInformation](arkts-telephony-signalinformation-i.md) | Returns child class objects specific to the network type. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [CdmaCellInformation](arkts-telephony-cdmacellinformation-i-sys.md) | Obtains CDMA cell information. |
| [CellInformation](arkts-telephony-cellinformation-i-sys.md) | Obtains current cell information. |
| [GsmCellInformation](arkts-telephony-gsmcellinformation-i-sys.md) | Obtains GSM cell information. |
| [ImsRegInfo](arkts-telephony-imsreginfo-i-sys.md) | Indicates IMS registration information. |
| [LteCellInformation](arkts-telephony-ltecellinformation-i-sys.md) | Obtains LTE cell information. |
| [NetworkInformation](arkts-telephony-networkinformation-i-sys.md) | Obtains the network information. |
| [NetworkSearchRealTimeResult](arkts-telephony-networksearchrealtimeresult-i-sys.md) | Indicates the results of manual network scan |
| [NetworkSearchResult](arkts-telephony-networksearchresult-i-sys.md) | Obtains the network search results. |
| [NetworkSelectionModeOptions](arkts-telephony-networkselectionmodeoptions-i-sys.md) | Obtains the network selection mode option. |
| [NrCellInformation](arkts-telephony-nrcellinformation-i-sys.md) | Obtains NR cell information. |
| [TdscdmaCellInformation](arkts-telephony-tdscdmacellinformation-i-sys.md) | Obtains TDSCDMA cell information. |
| [WcdmaCellInformation](arkts-telephony-wcdmacellinformation-i-sys.md) | Obtains WCDMA cell information. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [NetworkSelectionMode](arkts-telephony-networkselectionmode-e.md) | Obtains the network selection mode. |
| [NetworkType](arkts-telephony-networktype-e.md) | Describes the network type. |
| [NsaState](arkts-telephony-nsastate-e.md) | Describes the nsa state. |
| [RadioTechnology](arkts-telephony-radiotechnology-e.md) | Describes the radio access technology. |
| [RegState](arkts-telephony-regstate-e.md) | Describes the network registration state. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ImsRegState](arkts-telephony-imsregstate-e-sys.md) | Obtains IMS registration status. |
| [ImsRegTech](arkts-telephony-imsregtech-e-sys.md) | Indicates IMS registration technology. |
| [ImsServiceType](arkts-telephony-imsservicetype-e-sys.md) | Indicates the type of IMS service. |
| [NROptionMode](arkts-telephony-nroptionmode-e-sys.md) | Obtains the option mode of NR. |
| [NetworkCapabilityState](arkts-telephony-networkcapabilitystate-e-sys.md) | Enum for network capability state. |
| [NetworkCapabilityType](arkts-telephony-networkcapabilitytype-e-sys.md) | Enum for network capability type. |
| [NetworkInformationState](arkts-telephony-networkinformationstate-e-sys.md) | Obtains network information status. |
| [NrOptionMode](arkts-telephony-nroptionmode-e-sys.md) | Obtains the option mode of NR. |
| [PreferredNetworkMode](arkts-telephony-preferrednetworkmode-e-sys.md) | Indicates the preferred network. |
<!--DelEnd-->

