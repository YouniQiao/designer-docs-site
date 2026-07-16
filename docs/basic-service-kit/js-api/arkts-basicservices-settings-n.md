# settings

This module provides settings data access abilities.

**Since:** 18

**System capability:** SystemCapability.Applications.Settings.Core

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [domainName](arkts-basicservices-domainname-n.md) | Provide domain name for query. |
| [date](arkts-basicservices-date-n.md) | Provides methods for setting time and date formats. |
| [display](arkts-basicservices-display-n.md) | Provides methods for setting the display effect, including the font size, screen brightness, screen rotation,animation factor, and display color. |
| [general](arkts-basicservices-general-n.md) | Provides methods for setting general information about devices, including the device name, startup wizard,airplane mode, debugging information, accessibility feature switch, and touch exploration status. |
| [input](arkts-basicservices-input-n.md) | Provides methods for setting information about input methods, including automatic capitalization, automaticpunctuation, autocorrect, password presentation, input method engine, and input method subtypes. |
| [network](arkts-basicservices-network-n.md) | Provides methods for setting network information, including the data roaming status, HTTP proxy configurations,and preferred networks. |
| [phone](arkts-basicservices-phone-n.md) | Provides methods for setting the answering mode of incoming and outgoing calls. |
| [sound](arkts-basicservices-sound-n.md) | Provides methods for setting the sound effect, including the ringtone, dial tone, alarm sound, notification tone,and haptic feedback. |
| [TTS](arkts-basicservices-tts-n.md) | Provides methods for setting information about text-to-speech (TTS) conversion, including the pitch, speech rate,engine, and plug-ins. |
| [wireless](arkts-basicservices-wireless-n.md) | Provides methods for setting radio network information, including information about Bluetooth, Wi-Fi, Near FieldCommunication (NFC), and the airplane mode. |

### Functions

| Name | Description |
| --- | --- |
| [getURI](arkts-basicservices-geturi-f.md#geturi-1) | Constructs a URI for a specific name-value pair for monitoring data of the ability that uses the Datatemplate. |
| [getURI](arkts-basicservices-geturi-f.md#geturi-2) | Constructs a URI for a specific name-value pair for monitoring data of the ability that uses the Datatemplate. |
| [getValue](arkts-basicservices-getvalue-f.md#getvalue-1) | Obtains the value of a specified character string in the database. |
| [getValue](arkts-basicservices-getvalue-f.md#getvalue-2) | Obtains the value of a specified character string in the database. |
| [getValue](arkts-basicservices-getvalue-f.md#getvalue-3) | Get value from settingsdata |
| [getValue](arkts-basicservices-getvalue-f.md#getvalue-4) | Get value from settingsdata |
| [getValue](arkts-basicservices-getvalue-f.md#getvalue-5) | Get value from settingsdata[USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [setValue](arkts-basicservices-setvalue-f.md#setvalue-3) | Set settingsdata value. |
| [setValue](arkts-basicservices-setvalue-f.md#setvalue-4) | Set settingsdata value. |
| [setValue](arkts-basicservices-setvalue-f.md#setvalue-5) | Set settingsdata value.[DEVICE_SHARED, USER_PROPERTY] domain need ohos.permission.MANAGE_SETTINGS permission.[USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [enableAirplaneMode](arkts-basicservices-enableairplanemode-f.md#enableairplanemode-1) | Enables or disables airplane mode. |
| [enableAirplaneMode](arkts-basicservices-enableairplanemode-f.md#enableairplanemode-2) | Enables or disables airplane mode. |
| [canShowFloating](arkts-basicservices-canshowfloating-f.md#canshowfloating-1) | Checks whether a specified application can show as a floating window. |
| [canShowFloating](arkts-basicservices-canshowfloating-f.md#canshowfloating-2) | Checks whether a specified application can show as a floating window. |
| [getUriSync](arkts-basicservices-geturisync-f.md#geturisync-1) | Get settingsdata uri (synchronous method) |
| [getValueSync](arkts-basicservices-getvaluesync-f.md#getvaluesync-1) | Get value from settingsdata(synchronous method) |
| [getValueSync](arkts-basicservices-getvaluesync-f.md#getvaluesync-2) | Get value from settingsdata(synchronous method) |
| [getValueSync](arkts-basicservices-getvaluesync-f.md#getvaluesync-3) | Get value from settingsdata(synchronous method).[USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [setValueSync](arkts-basicservices-setvaluesync-f.md#setvaluesync-1) | Set settingsdata value(synchronous method) |
| [setValueSync](arkts-basicservices-setvaluesync-f.md#setvaluesync-2) | Set settingsdata value(synchronous method) |
| [setValueSync](arkts-basicservices-setvaluesync-f.md#setvaluesync-3) | Set settingsdata value(synchronous method).[DEVICE_SHARED, USER_PROPERTY] domain need ohos.permission.MANAGE_SETTINGS permission.[USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [registerKeyObserver](arkts-basicservices-registerkeyobserver-f.md#registerkeyobserver-1) | Monitor registration key(synchronous method)[USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [unregisterKeyObserver](arkts-basicservices-unregisterkeyobserver-f.md#unregisterkeyobserver-1) | Monitor unregister key(synchronous method)[USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [openNetworkManagerSettings](arkts-basicservices-opennetworkmanagersettings-f.md#opennetworkmanagersettings-1) | Open the network manager settings page. |
| [openInputMethodSettings](arkts-basicservices-openinputmethodsettings-f.md#openinputmethodsettings-1) | Open the input method settings page. |
| [openInputMethodDetail](arkts-basicservices-openinputmethoddetail-f.md#openinputmethoddetail-1) | Open the input method detail page. |
| [openMobileNetworkSettingsPage](arkts-basicservices-openmobilenetworksettingspage-f.md#openmobilenetworksettingspage-1) | Open the mobile network settings page. |
| [openDisplaySettingsPage](arkts-basicservices-opendisplaysettingspage-f.md#opendisplaysettingspage-1) | Open the display settings page. |
| [openScreenRefreshRateSettingsPage](arkts-basicservices-openscreenrefreshratesettingspage-f.md#openscreenrefreshratesettingspage-1) | Open the screen refresh rate settings page. |
| [openSoundSettingsPage](arkts-basicservices-opensoundsettingspage-f.md#opensoundsettingspage-1) | Open the sound settings page. |
| [openBiometricsSettingsPage](arkts-basicservices-openbiometricssettingspage-f.md#openbiometricssettingspage-1) | Open the biometrics and password settings page. |
| [openAboutDeviceSettingsPage](arkts-basicservices-openaboutdevicesettingspage-f.md#openaboutdevicesettingspage-1) | Open the about device settings page. |
| [openNfcSettingsPage](arkts-basicservices-opennfcsettingspage-f.md#opennfcsettingspage-1) | Open the NFC settings page. |
| [openAppDetailSettingsPage](arkts-basicservices-openappdetailsettingspage-f.md#openappdetailsettingspage-1) | Open the app detail settings page. |
| [openDoubleClickSettingsPage](arkts-basicservices-opendoubleclicksettingspage-f.md#opendoubleclicksettingspage-1) | 1. Opens the settings page for double-pressing the Down key.2. This API is used to set the default application started by double-pressing the Down key. |
| [isDoubleClickAppForSelf](arkts-basicservices-isdoubleclickappforself-f.md#isdoubleclickappforself-1) | 1. Checks whether the application started by double-pressing the Down key is the application itself.2. This API is triggered to check whether double-pressing the Down key starts the application itself. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [setValue](arkts-basicservices-setvalue-f-sys.md#setvalue-1) | Saves a character string name and its value to the database. |
| [setValue](arkts-basicservices-setvalue-f-sys.md#setvalue-2) | Saves a character string name and its value to the database. |
<!--DelEnd-->

