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
| [domainName](arkts-settings-domainname-n.md) | Provide domain name for query. |
| [date](arkts-settings-date-n.md) | Provides methods for setting time and date formats. |
| [display](arkts-settings-display-n.md) | Provides methods for setting the display effect, including the font size, screen brightness, screen rotation, animation factor, and display color. |
| [general](arkts-settings-general-n.md) | Provides methods for setting general information about devices, including the device name, startup wizard, airplane mode, debugging information, accessibility feature switch, and touch exploration status. |
| [input](arkts-settings-input-n.md) | Provides methods for setting information about input methods, including automatic capitalization, automatic punctuation, autocorrect, password presentation, input method engine, and input method subtypes. |
| [network](arkts-settings-network-n.md) | Provides methods for setting network information, including the data roaming status, HTTP proxy configurations, and preferred networks. |
| [phone](arkts-settings-phone-n.md) | Provides methods for setting the answering mode of incoming and outgoing calls. |
| [sound](arkts-settings-sound-n.md) | Provides methods for setting the sound effect, including the ringtone, dial tone, alarm sound, notification tone, and haptic feedback. |
| [TTS](arkts-settings-tts-n.md) | Provides methods for setting information about text-to-speech (TTS) conversion, including the pitch, speech rate, engine, and plug-ins. |
| [wireless](arkts-settings-wireless-n.md) | Provides methods for setting radio network information, including information about Bluetooth, Wi-Fi, Near Field Communication (NFC), and the airplane mode. |

### Functions

| Name | Description |
| --- | --- |
| [canShowFloating](arkts-settings-canshowfloating-f.md#canShowFloating-1) | Checks whether a specified application can show as a floating window. |
| [canShowFloating](arkts-settings-canshowfloating-f.md#canShowFloating-2) | Checks whether a specified application can show as a floating window. |
| [enableAirplaneMode](arkts-settings-enableairplanemode-f.md#enableAirplaneMode-1) | Enables or disables airplane mode. |
| [enableAirplaneMode](arkts-settings-enableairplanemode-f.md#enableAirplaneMode-2) | Enables or disables airplane mode. |
| [getURI](arkts-settings-geturi-f.md#getURI-1) | Constructs a URI for a specific name-value pair for monitoring data of the ability that uses the Data template. |
| [getURI](arkts-settings-geturi-f.md#getURI-2) | Constructs a URI for a specific name-value pair for monitoring data of the ability that uses the Data template. |
| [getUriSync](arkts-settings-geturisync-f.md#getUriSync-1) | Get settingsdata uri (synchronous method) |
| [getValue](arkts-settings-getvalue-f.md#getValue-1) | Obtains the value of a specified character string in the database. |
| [getValue](arkts-settings-getvalue-f.md#getValue-2) | Obtains the value of a specified character string in the database. |
| [getValue](arkts-settings-getvalue-f.md#getValue-3) | Get value from settingsdata |
| [getValue](arkts-settings-getvalue-f.md#getValue-4) | Get value from settingsdata |
| [getValue](arkts-settings-getvalue-f.md#getValue-5) | Get value from settingsdata [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [getValueSync](arkts-settings-getvaluesync-f.md#getValueSync-1) | Get value from settingsdata(synchronous method) |
| [getValueSync](arkts-settings-getvaluesync-f.md#getValueSync-2) | Get value from settingsdata(synchronous method) |
| [getValueSync](arkts-settings-getvaluesync-f.md#getValueSync-3) | Get value from settingsdata(synchronous method). [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [isDoubleClickAppForSelf](arkts-settings-isdoubleclickappforself-f.md#isDoubleClickAppForSelf-1) | 1. Checks whether the application started by double-pressing the Down key is the application itself. 2. This API is triggered to check whether double-pressing the Down key starts the application itself. |
| [openAboutDeviceSettingsPage](arkts-settings-openaboutdevicesettingspage-f.md#openAboutDeviceSettingsPage-1) | Open the about device settings page. |
| [openAppDetailSettingsPage](arkts-settings-openappdetailsettingspage-f.md#openAppDetailSettingsPage-1) | Open the app detail settings page. |
| [openBiometricsSettingsPage](arkts-settings-openbiometricssettingspage-f.md#openBiometricsSettingsPage-1) | Open the biometrics and password settings page. |
| [openDisplaySettingsPage](arkts-settings-opendisplaysettingspage-f.md#openDisplaySettingsPage-1) | Open the display settings page. |
| [openDoubleClickSettingsPage](arkts-settings-opendoubleclicksettingspage-f.md#openDoubleClickSettingsPage-1) | 1. Opens the settings page for double-pressing the Down key. 2. This API is used to set the default application started by double-pressing the Down key. |
| [openInputMethodDetail](arkts-settings-openinputmethoddetail-f.md#openInputMethodDetail-1) | Open the input method detail page. |
| [openInputMethodSettings](arkts-settings-openinputmethodsettings-f.md#openInputMethodSettings-1) | Open the input method settings page. |
| [openMobileNetworkSettingsPage](arkts-settings-openmobilenetworksettingspage-f.md#openMobileNetworkSettingsPage-1) | Open the mobile network settings page. |
| [openNetworkManagerSettings](arkts-settings-opennetworkmanagersettings-f.md#openNetworkManagerSettings-1) | Open the network manager settings page. |
| [openNfcSettingsPage](arkts-settings-opennfcsettingspage-f.md#openNfcSettingsPage-1) | Open the NFC settings page. |
| [openScreenRefreshRateSettingsPage](arkts-settings-openscreenrefreshratesettingspage-f.md#openScreenRefreshRateSettingsPage-1) | Open the screen refresh rate settings page. |
| [openSoundSettingsPage](arkts-settings-opensoundsettingspage-f.md#openSoundSettingsPage-1) | Open the sound settings page. |
| [registerKeyObserver](arkts-settings-registerkeyobserver-f.md#registerKeyObserver-1) | Monitor registration key(synchronous method) [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [setValue](arkts-settings-setvalue-f.md#setValue-1) | Set settingsdata value. |
| [setValue](arkts-settings-setvalue-f.md#setValue-2) | Set settingsdata value. |
| [setValue](arkts-settings-setvalue-f.md#setValue-3) | Set settingsdata value. [DEVICE_SHARED, USER_PROPERTY] domain need ohos.permission.MANAGE_SETTINGS permission. [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| <!--DelRow-->[setValue](arkts-settings-setvalue-f-sys.md#setValue-1) | Saves a character string name and its value to the database. |
| <!--DelRow-->[setValue](arkts-settings-setvalue-f-sys.md#setValue-2) | Saves a character string name and its value to the database. |
| [setValueSync](arkts-settings-setvaluesync-f.md#setValueSync-1) | Set settingsdata value(synchronous method) |
| [setValueSync](arkts-settings-setvaluesync-f.md#setValueSync-2) | Set settingsdata value(synchronous method) |
| [setValueSync](arkts-settings-setvaluesync-f.md#setValueSync-3) | Set settingsdata value(synchronous method). [DEVICE_SHARED, USER_PROPERTY] domain need ohos.permission.MANAGE_SETTINGS permission. [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |
| [unregisterKeyObserver](arkts-settings-unregisterkeyobserver-f.md#unregisterKeyObserver-1) | Monitor unregister key(synchronous method) [USER_SECURE] domain need ohos.permission.MANAGE_SECURE_SETTINGS permission. |

