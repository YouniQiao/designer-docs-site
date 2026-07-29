# @ohos.userIAM.companionDeviceAuth

The **companionDeviceAuth** module is an important part of the OpenHarmony user identity and access management (UserIAM) system. It is dedicated to companion device authentication management. This module provides the system application with capabilities such as querying and subscribing to companion devices, and managing the service scope.

This module applies to the following scenarios:

- Managing the authentication relationship between a companion device and the primary device.  
- Querying and subscribing to the status changes of a companion device.  
- Managing the service scope supported by a companion device.  
- Implementing continuous authentication.  
- Processing device selection and registration.

**Since:** 23

<!--Device-unnamed-declare namespace companionDeviceAuth--><!--Device-unnamed-declare namespace companionDeviceAuth-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@kit.UserAuthenticationKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getStatusMonitor](arkts-userauthentication-companiondeviceauth-getstatusmonitor-f-sys.md#getstatusmonitor) | Obtains the status monitor. This API is used to obtain the status monitor object of a specified user. The object can be used to query and subscribe to the template status, continuous authentication status, and available device status of the companion device. |
| [registerDeviceSelectCallback](arkts-userauthentication-companiondeviceauth-registerdeviceselectcallback-f-sys.md#registerdeviceselectcallback) | Registers a callback for companion device selection. When the system requires the user to select a companion device, this callback is triggered. The application needs to return the information about the selected device in the callback. Through this callback, the application can implement custom device selection logic, for example,displaying a device selection screen for the user to select a device. |
| [unregisterDeviceSelectCallback](arkts-userauthentication-companiondeviceauth-unregisterdeviceselectcallback-f-sys.md#unregisterdeviceselectcallback) | Unregisters a callback for companion device selection. After the callback is unregistered, the system will no longer invoke the device selection callback registered by the application, and the device selection will fall back to the default system behavior. |
| [updateEnabledBusinessIds](arkts-userauthentication-companiondeviceauth-updateenabledbusinessids-f-sys.md#updateenabledbusinessids) | Updates the service scope supported by the specified companion device template. This API is used to modify the list of service IDs enabled for a registered template, thereby controlling the service scenarios in which the template can be used. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ContinuousAuthParam](arkts-userauthentication-companiondeviceauth-continuousauthparam-i-sys.md) | Defines continuous authentication parameters. They are used to configure parameters related to the subscription to the continuous authentication status, for example, specifying the target template to be subscribed to. |
| [DeviceKey](arkts-userauthentication-companiondeviceauth-devicekey-i-sys.md) | Defines the device service ID. It uniquely identifies a device and its user, including the device ID type, device ID, and user ID. |
| [DeviceSelectResult](arkts-userauthentication-companiondeviceauth-deviceselectresult-i-sys.md) | Returns the result of companion device selection. It is used to return the device information and extended context selected by the user in the device selection callback. |
| [DeviceStatus](arkts-userauthentication-companiondeviceauth-devicestatus-i-sys.md) | Defines the device status information. It describes the current status of the companion device, including the device service ID, user name, model information, device name, online status, and list of supported service IDs. |
| [StatusMonitor](arkts-userauthentication-companiondeviceauth-statusmonitor-i-sys.md) | Status monitor object. It is used to listen for or obtain information such as the template status, continuous authentication status, and available device status. This object can be obtained by calling [getStatusMonitor](arkts-userauthentication-companiondeviceauth-getstatusmonitor-f-sys.md#getstatusmonitor). |
| [TemplateStatus](arkts-userauthentication-companiondeviceauth-templatestatus-i-sys.md) | Describes the complete status information about a registered companion device authentication template, including the template ID, data confirmation status, validity, user ID, time when the template is added, supported services, and associated device status. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [BusinessId](arkts-userauthentication-companiondeviceauth-businessid-e-sys.md) | Enumerates service IDs. A service ID uniquely identifies a service scenario supported by the companion device.The service scenarios supported by different companion devices vary according to the authentication security. For example, executing voice commands without screen unlocking.  The companion device relationships of different service IDs are independent of each other and do not interfere with each other. They can be added, deleted, and authenticated independently.  Currently, the services of the companion device module include the default services of OpenHarmony, screen unlocking, application unlocking, and identity authentication before voice commands are executed on the lock screen.  Adding services has requirements on the scenarios supported by the server device. For example, the multi-screen collaboration service requires that the server device support the agency authentication scenario. |
| [DeviceIdType](arkts-userauthentication-companiondeviceauth-deviceidtype-e-sys.md) | Enumerates device ID types. They are used to define the device service identifier type. System-defined types and vendor-defined types are supported. |
| [SelectPurpose](arkts-userauthentication-companiondeviceauth-selectpurpose-e-sys.md) | Selects the purpose of the companion device. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AvailableDeviceStatusCallback](arkts-userauthentication-companiondeviceauth-availabledevicestatuscallback-t-sys.md) | Defines the callback triggered for receiving notifications of available device status changes. When the list of available devices changes (for example, a new device goes online or a device goes offline), the system notifies the application through this callback. |
| [ContinuousAuthStatusCallback](arkts-userauthentication-companiondeviceauth-continuousauthstatuscallback-t-sys.md) | Defines the callback triggered for receiving notifications of continuous authentication status changes. When the authentication status of a companion device changes, the system applies the current authentication result and authentication reliability level through this callback notification. |
| [DeviceSelectCallback](arkts-userauthentication-companiondeviceauth-deviceselectcallback-t-sys.md) | Defines the callback triggered for the companion device selection. When the system requires the user to select a companion device (for example, when adding a template or performing authentication), this callback is triggered.The application needs to return the information about the selected device. |
| [TemplateStatusCallback](arkts-userauthentication-companiondeviceauth-templatestatuscallback-t-sys.md) | Defines the callback triggered for receiving notifications of template status changes. When the template status changes (for example, the template is added, deleted, or its validity changes), the system notifies the application through this callback. |
<!--DelEnd-->

