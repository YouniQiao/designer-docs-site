# @ohos.userIAM.companionDeviceAuth

The **companionDeviceAuth** module provides capabilities such as companion device query, subscription, and service scope management for system applications. A companion device is an identity authentication credential added by a user on the main device. If the conditions are met, the companion device can interact with the main device to authenticate the user identity. The companion device can be applied in such scenarios as a watch as a companion device to unlock a mobile phone or a headset as a companion device to execute voice commands without unlocking the mobile phone.

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@ohos.userIAM.companionDeviceAuth';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getStatusMonitor](arkts-userauthentication-getstatusmonitor-f-sys.md#getstatusmonitor-1) | Obtains the status listener, which is used to query and subscribe to companion template information. |
| [registerDeviceSelectCallback](arkts-userauthentication-registerdeviceselectcallback-f-sys.md#registerdeviceselectcallback-1) | Registers the callback for companion device selection. |
| [unregisterDeviceSelectCallback](arkts-userauthentication-unregisterdeviceselectcallback-f-sys.md#unregisterdeviceselectcallback-1) | Unregisters the callback for companion device selection. |
| [updateEnabledBusinessIds](arkts-userauthentication-updateenabledbusinessids-f-sys.md#updateenabledbusinessids-1) | Updates the service scope supported by the specified companion device template. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ContinuousAuthParam](arkts-userauthentication-continuousauthparam-i-sys.md) | Defines the continuous authentication parameter. |
| [DeviceKey](arkts-userauthentication-devicekey-i-sys.md) | Defines the device key. |
| [DeviceSelectResult](arkts-userauthentication-deviceselectresult-i-sys.md) | Returns the result of companion device selection. |
| [DeviceStatus](arkts-userauthentication-devicestatus-i-sys.md) | Defines the device status information. |
| [StatusMonitor](arkts-userauthentication-statusmonitor-i-sys.md) | Defines the object for listening to or obtaining the template or continuous authentication status. |
| [TemplateStatus](arkts-userauthentication-templatestatus-i-sys.md) | Provides the template status maintained by the **companionDeviceAuth** module. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BusinessId](arkts-userauthentication-businessid-e-sys.md) | A service ID uniquely identifies a service scenario supported by the companion device. The supported service scenarios vary with the authentication security of companion devices. For example, a smart watch as a companion device can unlock the screen, unlock the application, and execute voice commands on the lock screen, while a headset as a companion device can only execute voice commands on the lock screen. The companion device relationships of different service IDs are independent of each other and do not interfere with each other. They can be added, deleted, and authenticated independently. Currently, the services of the companion device module include the default services of OpenHarmony, screen unlocking, application unlocking, and identity authentication before voice commands are executed on the lock screen. Adding services has requirements on the scenarios supported by the server device. For example, the multi-screen collaboration service requires that the server device support the agency authentication scenario. |
| [DeviceIdType](arkts-userauthentication-deviceidtype-e-sys.md) | Enumerates device ID types. |
| [SelectPurpose](arkts-userauthentication-selectpurpose-e-sys.md) | Selects the purpose of the companion device. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AvailableDeviceStatusCallback](arkts-userauthentication-availabledevicestatuscallback-t-sys.md) | Defines the callback used to receive the changes of the list of devices that can be added. |
| [ContinuousAuthStatusCallback](arkts-userauthentication-continuousauthstatuscallback-t-sys.md) | Defines the callback used to receive the continuous authentication status. |
| [DeviceSelectCallback](arkts-userauthentication-deviceselectcallback-t-sys.md) | Defines the callback of companion device selection. |
| [TemplateStatusCallback](arkts-userauthentication-templatestatuscallback-t-sys.md) | Defines the callback used to receive the template status. |
<!--DelEnd-->

