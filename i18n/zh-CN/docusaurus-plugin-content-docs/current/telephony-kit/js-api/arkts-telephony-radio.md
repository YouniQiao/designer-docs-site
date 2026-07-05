# @ohos.telephony.radio

Provides interfaces for applications to obtain the network state, cell information, signal information, and device ID of the wireless cellular network (WCN), and provides a callback registration mechanism to listen for changes of the network, cell, and signal status of the WCN.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CoreService

## 导入模块

```TypeScript
import { radio } from '@kit.TelephonyKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[factoryReset](arkts-radio-factoryreset-f-sys.md#factoryReset-1) | Reset all network settings of telephony. |
| <!--DelRow-->[getBasebandVersion](arkts-radio-getbasebandversion-f-sys.md#getBasebandVersion-1) | Get the version of Baseband. |
| <!--DelRow-->[getBasebandVersion](arkts-radio-getbasebandversion-f-sys.md#getBasebandVersion-2) | Get the version of Baseband. |
| <!--DelRow-->[getCellInformation](arkts-radio-getcellinformation-f-sys.md#getCellInformation-1) | Get the current cell information. |
| <!--DelRow-->[getCellInformation](arkts-radio-getcellinformation-f-sys.md#getCellInformation-2) | Get the current cell information. |
| <!--DelRow-->[getCellInformation](arkts-radio-getcellinformation-f-sys.md#getCellInformation-3) | Get the current cell information. |
| <!--DelRow-->[getIMEI](arkts-radio-getimei-f-sys.md#getIMEI-1) | Obtains the IMEI of a specified card slot of the device. |
| <!--DelRow-->[getIMEI](arkts-radio-getimei-f-sys.md#getIMEI-2) | Obtains the IMEI of a specified card slot of the device. |
| <!--DelRow-->[getIMEI](arkts-radio-getimei-f-sys.md#getIMEI-3) | Obtains the IMEI of a specified card slot of the device. |
| <!--DelRow-->[getIMEISV](arkts-radio-getimeisv-f-sys.md#getIMEISV-1) | Obtains the software version number of a specified card slot of the device. |
| [getISOCountryCodeForNetwork](arkts-radio-getisocountrycodefornetwork-f.md#getISOCountryCodeForNetwork-1) | Obtains the ISO-defined country code of the country where the registered network is deployed. |
| [getISOCountryCodeForNetwork](arkts-radio-getisocountrycodefornetwork-f.md#getISOCountryCodeForNetwork-2) | Obtains the ISO-defined country code of the country where the registered network is deployed. |
| [getISOCountryCodeForNetworkSync](arkts-radio-getisocountrycodefornetworksync-f.md#getISOCountryCodeForNetworkSync-1) | Obtains the ISO-defined country code of the country where the registered network is deployed. |
| <!--DelRow-->[getImsRegInfo](arkts-radio-getimsreginfo-f-sys.md#getImsRegInfo-1) | Get the IMS registration state info of specified IMS service type. |
| <!--DelRow-->[getImsRegInfo](arkts-radio-getimsreginfo-f-sys.md#getImsRegInfo-2) | Get the IMS registration state info of specified IMS service type. |
| <!--DelRow-->[getMEID](arkts-radio-getmeid-f-sys.md#getMEID-1) | Obtains the MEID of a specified card slot of the device. |
| <!--DelRow-->[getMEID](arkts-radio-getmeid-f-sys.md#getMEID-2) | Obtains the MEID of a specified card slot of the device. |
| <!--DelRow-->[getMEID](arkts-radio-getmeid-f-sys.md#getMEID-3) | Obtains the MEID of a specified card slot of the device. |
| <!--DelRow-->[getNROptionMode](arkts-radio-getnroptionmode-f-sys.md#getNROptionMode-1) | Get the option mode of NR. |
| <!--DelRow-->[getNROptionMode](arkts-radio-getnroptionmode-f-sys.md#getNROptionMode-2) | Get the option mode of NR. |
| <!--DelRow-->[getNetworkCapability](arkts-radio-getnetworkcapability-f-sys.md#getNetworkCapability-1) | Get the network capability state according to the specified capability type. |
| <!--DelRow-->[getNetworkCapability](arkts-radio-getnetworkcapability-f-sys.md#getNetworkCapability-2) | Get the network capability state according to the specified capability type. |
| <!--DelRow-->[getNetworkSearchInformation](arkts-radio-getnetworksearchinformation-f-sys.md#getNetworkSearchInformation-1) | Get network search information. |
| <!--DelRow-->[getNetworkSearchInformation](arkts-radio-getnetworksearchinformation-f-sys.md#getNetworkSearchInformation-2) | Get network search information. |
| [getNetworkSelectionMode](arkts-radio-getnetworkselectionmode-f.md#getNetworkSelectionMode-1) | Obtains the network search mode of the SIM card in a specified slot. |
| [getNetworkSelectionMode](arkts-radio-getnetworkselectionmode-f.md#getNetworkSelectionMode-2) | Obtains the network search mode of the SIM card in a specified slot. |
| [getNetworkState](arkts-radio-getnetworkstate-f.md#getNetworkState-1) | Obtains the network state of the registered network. |
| [getNetworkState](arkts-radio-getnetworkstate-f.md#getNetworkState-2) | Obtains the network state of the registered network. |
| [getNetworkState](arkts-radio-getnetworkstate-f.md#getNetworkState-3) | Obtains the network state of the registered network. |
| <!--DelRow-->[getNrOptionMode](arkts-radio-getnroptionmode-f-sys.md#getNrOptionMode-1) | Get the option mode of NR. |
| <!--DelRow-->[getNrOptionMode](arkts-radio-getnroptionmode-f-sys.md#getNrOptionMode-2) | Get the option mode of NR. |
| <!--DelRow-->[getNrOptionMode](arkts-radio-getnroptionmode-f-sys.md#getNrOptionMode-3) | Get the option mode of NR. |
| [getOperatorName](arkts-radio-getoperatorname-f.md#getOperatorName-1) | Get the operator name of the specified SIM card slot. |
| [getOperatorName](arkts-radio-getoperatorname-f.md#getOperatorName-2) | Get the operator name of the specified SIM card slot. |
| [getOperatorNameSync](arkts-radio-getoperatornamesync-f.md#getOperatorNameSync-1) | Get the operator name of the specified SIM card slot. |
| <!--DelRow-->[getPreferredNetwork](arkts-radio-getpreferrednetwork-f-sys.md#getPreferredNetwork-1) | Get the preferred network for the specified SIM card slot. |
| <!--DelRow-->[getPreferredNetwork](arkts-radio-getpreferrednetwork-f-sys.md#getPreferredNetwork-2) | Get the preferred network for the specified SIM card slot. |
| [getPrimarySlotId](arkts-radio-getprimaryslotid-f.md#getPrimarySlotId-1) | Obtains the index number of the card slot where the primary card is located if multiple SIM cards are inserted. The primary card is the SIM card inserted in the card slot that uses data services by default. |
| [getPrimarySlotId](arkts-radio-getprimaryslotid-f.md#getPrimarySlotId-2) | Obtains the index number of the card slot where the primary card is located if multiple SIM cards are inserted. The primary card is the SIM card inserted in the card slot that uses data services by default. |
| [getRadioTech](arkts-radio-getradiotech-f.md#getRadioTech-1) | Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain. |
| [getRadioTech](arkts-radio-getradiotech-f.md#getRadioTech-2) | Obtains radio access technology (RAT) of the registered network. The system returns RAT of the packet service (PS) and circuit service (CS) domain. |
| [getRadioTechSync](arkts-radio-getradiotechsync-f.md#getRadioTechSync-1) | Obtains radio access technology (RAT) of the registered network. |
| [getSignalInformation](arkts-radio-getsignalinformation-f.md#getSignalInformation-1) | Obtains the list of signal strength information of the registered network corresponding to a specified SIM card. |
| [getSignalInformation](arkts-radio-getsignalinformation-f.md#getSignalInformation-2) | Obtains the list of signal strength information of the registered network corresponding to a specified SIM card. |
| [getSignalInformationSync](arkts-radio-getsignalinformationsync-f.md#getSignalInformationSync-1) | Obtains the list of signal strength information of the registered network corresponding to a specified SIM card. |
| <!--DelRow-->[getUniqueDeviceId](arkts-radio-getuniquedeviceid-f-sys.md#getUniqueDeviceId-1) | Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned. |
| <!--DelRow-->[getUniqueDeviceId](arkts-radio-getuniquedeviceid-f-sys.md#getUniqueDeviceId-2) | Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned. |
| <!--DelRow-->[getUniqueDeviceId](arkts-radio-getuniquedeviceid-f-sys.md#getUniqueDeviceId-3) | Obtains the unique device ID of a specified card slot of the device. If the device is registered with a 3GPP-compliant network, the international mobile equipment identity (IMEI) is returned. If the device is registered with a 3GPP2-compliant network, the mobile equipment identifier (MEID) is returned. |
| <!--DelRow-->[isManualNetworkScanning](arkts-radio-ismanualnetworkscanning-f-sys.md#isManualNetworkScanning-1) | Determine whether the current manual network scan is in progress. |
| [isNRSupported](arkts-radio-isnrsupported-f.md#isNRSupported-1) | Checks whether the device supports 5G New Radio (NR). |
| [isNRSupported](arkts-radio-isnrsupported-f.md#isNRSupported-2) | Checks whether the device supports 5G New Radio (NR) by according card slot. |
| [isNrSupported](arkts-radio-isnrsupported-f.md#isNrSupported-1) | Checks whether the device supports 5G New Radio (NR). |
| [isNrSupported](arkts-radio-isnrsupported-f.md#isNrSupported-2) | Checks whether the device supports 5G New Radio (NR) by according card slot. |
| [isRadioOn](arkts-radio-isradioon-f.md#isRadioOn-1) | Checks whether the radio service is enabled. |
| [isRadioOn](arkts-radio-isradioon-f.md#isRadioOn-2) | Checks whether the radio service is enabled. |
| [isRadioOn](arkts-radio-isradioon-f.md#isRadioOn-3) | Checks whether the radio service is enabled. |
| <!--DelRow-->[off](arkts-radio-off-f-sys.md#off-1) | Unsubscribe from imsRegStateChange event. |
| <!--DelRow-->[offImsRegStateChange](arkts-radio-offimsregstatechange-f-sys.md#offImsRegStateChange-1) | Unsubscribe from imsRegStateChange event. |
| <!--DelRow-->[on](arkts-radio-on-f-sys.md#on-1) | Called when the IMS registration state of specified IMS service type corresponding to a monitored {@code slotId} updates. |
| <!--DelRow-->[onImsRegStateChange](arkts-radio-onimsregstatechange-f-sys.md#onImsRegStateChange-1) | Called when the IMS registration state of specified IMS service type corresponding to a monitored {@code slotId} updates. |
| <!--DelRow-->[sendUpdateCellLocationRequest](arkts-radio-sendupdatecelllocationrequest-f-sys.md#sendUpdateCellLocationRequest-1) | Actively requests to update location information. |
| <!--DelRow-->[sendUpdateCellLocationRequest](arkts-radio-sendupdatecelllocationrequest-f-sys.md#sendUpdateCellLocationRequest-2) | Actively requests to update location information. |
| <!--DelRow-->[sendUpdateCellLocationRequest](arkts-radio-sendupdatecelllocationrequest-f-sys.md#sendUpdateCellLocationRequest-3) | Actively requests to update location information. |
| <!--DelRow-->[setNROptionMode](arkts-radio-setnroptionmode-f-sys.md#setNROptionMode-1) | Set the NR option mode. |
| <!--DelRow-->[setNROptionMode](arkts-radio-setnroptionmode-f-sys.md#setNROptionMode-2) | Set the NR option mode. |
| <!--DelRow-->[setNetworkCapability](arkts-radio-setnetworkcapability-f-sys.md#setNetworkCapability-1) | Set the type and state for the specified network capability. |
| <!--DelRow-->[setNetworkCapability](arkts-radio-setnetworkcapability-f-sys.md#setNetworkCapability-2) | Set the type and state for the specified network capability. |
| <!--DelRow-->[setNetworkSelectionMode](arkts-radio-setnetworkselectionmode-f-sys.md#setNetworkSelectionMode-1) | Set the current network selection mode. |
| <!--DelRow-->[setNetworkSelectionMode](arkts-radio-setnetworkselectionmode-f-sys.md#setNetworkSelectionMode-2) | Set the current network selection mode. |
| <!--DelRow-->[setPreferredNetwork](arkts-radio-setpreferrednetwork-f-sys.md#setPreferredNetwork-1) | Set the preferred network for the specified SIM card slot. |
| <!--DelRow-->[setPreferredNetwork](arkts-radio-setpreferrednetwork-f-sys.md#setPreferredNetwork-2) | Set the preferred network for the specified SIM card slot. |
| <!--DelRow-->[setPrimarySlotId](arkts-radio-setprimaryslotid-f-sys.md#setPrimarySlotId-1) | Set the index number of the main SIM card slot. |
| <!--DelRow-->[setPrimarySlotId](arkts-radio-setprimaryslotid-f-sys.md#setPrimarySlotId-2) | Set the index number of the main SIM card slot. |
| <!--DelRow-->[startManualNetworkScan](arkts-radio-startmanualnetworkscan-f-sys.md#startManualNetworkScan-1) | start ManualNetworkScan , Real-time report. |
| <!--DelRow-->[stopManualNetworkScan](arkts-radio-stopmanualnetworkscan-f-sys.md#stopManualNetworkScan-1) | Stop ManualNetworkScan. |
| <!--DelRow-->[turnOffRadio](arkts-radio-turnoffradio-f-sys.md#turnOffRadio-1) | Turn off the radio service. |
| <!--DelRow-->[turnOffRadio](arkts-radio-turnoffradio-f-sys.md#turnOffRadio-2) | Turn off the radio service. |
| <!--DelRow-->[turnOffRadio](arkts-radio-turnoffradio-f-sys.md#turnOffRadio-3) | Turn off the radio service. |
| <!--DelRow-->[turnOnRadio](arkts-radio-turnonradio-f-sys.md#turnOnRadio-1) | Turn on the radio service. |
| <!--DelRow-->[turnOnRadio](arkts-radio-turnonradio-f-sys.md#turnOnRadio-2) | Turn on the radio service. |
| <!--DelRow-->[turnOnRadio](arkts-radio-turnonradio-f-sys.md#turnOnRadio-3) | Turn on the radio service. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[CdmaCellInformation](arkts-radio-cdmacellinformation-i-sys.md) | Obtains CDMA cell information. |
| [CellInformation](arkts-radio-cellinformation-i.md) | Obtains current cell information. |
| <!--DelRow-->[GsmCellInformation](arkts-radio-gsmcellinformation-i-sys.md) | Obtains GSM cell information. |
| <!--DelRow-->[ImsRegInfo](arkts-radio-imsreginfo-i-sys.md) | Indicates IMS registration information. |
| <!--DelRow-->[LteCellInformation](arkts-radio-ltecellinformation-i-sys.md) | Obtains LTE cell information. |
| <!--DelRow-->[NetworkInformation](arkts-radio-networkinformation-i-sys.md) | Obtains the network information. |
| [NetworkRadioTech](arkts-radio-networkradiotech-i.md) | Describes the radio access technology (RAT) of registered network. |
| <!--DelRow-->[NetworkSearchRealTimeResult](arkts-radio-networksearchrealtimeresult-i-sys.md) | Indicates the results of manual network scan |
| <!--DelRow-->[NetworkSearchResult](arkts-radio-networksearchresult-i-sys.md) | Obtains the network search results. |
| <!--DelRow-->[NetworkSelectionModeOptions](arkts-radio-networkselectionmodeoptions-i-sys.md) | Obtains the network selection mode option. |
| [NetworkState](arkts-radio-networkstate-i.md) | Describes the network registration state. |
| <!--DelRow-->[NrCellInformation](arkts-radio-nrcellinformation-i-sys.md) | Obtains NR cell information. |
| [SignalInformation](arkts-radio-signalinformation-i.md) | Returns child class objects specific to the network type. |
| <!--DelRow-->[TdscdmaCellInformation](arkts-radio-tdscdmacellinformation-i-sys.md) | Obtains TDSCDMA cell information. |
| <!--DelRow-->[WcdmaCellInformation](arkts-radio-wcdmacellinformation-i-sys.md) | Obtains WCDMA cell information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ImsRegState](arkts-radio-imsregstate-e-sys.md) | Obtains IMS registration status. |
| <!--DelRow-->[ImsRegTech](arkts-radio-imsregtech-e-sys.md) | Indicates IMS registration technology. |
| <!--DelRow-->[ImsServiceType](arkts-radio-imsservicetype-e-sys.md) | Indicates the type of IMS service. |
| <!--DelRow-->[NetworkCapabilityState](arkts-radio-networkcapabilitystate-e-sys.md) | Enum for network capability state. |
| <!--DelRow-->[NetworkCapabilityType](arkts-radio-networkcapabilitytype-e-sys.md) | Enum for network capability type. |
| <!--DelRow-->[NetworkInformationState](arkts-radio-networkinformationstate-e-sys.md) | Obtains network information status. |
| [NetworkSelectionMode](arkts-radio-networkselectionmode-e.md) | Obtains the network selection mode. |
| [NetworkType](arkts-radio-networktype-e.md) | Describes the network type. |
| <!--DelRow-->[NrOptionMode](arkts-radio-nroptionmode-e-sys.md) | Obtains the option mode of NR. |
| <!--DelRow-->[NROptionMode](arkts-radio-nroptionmode-e-sys.md) | Obtains the option mode of NR. |
| [NsaState](arkts-radio-nsastate-e.md) | Describes the nsa state. |
| <!--DelRow-->[PreferredNetworkMode](arkts-radio-preferrednetworkmode-e-sys.md) | Indicates the preferred network. |
| [RadioTechnology](arkts-radio-radiotechnology-e.md) | Describes the radio access technology. |
| [RegState](arkts-radio-regstate-e.md) | Describes the network registration state. |

