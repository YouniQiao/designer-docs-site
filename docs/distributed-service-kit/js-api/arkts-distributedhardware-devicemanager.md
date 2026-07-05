# @ohos.distributedHardware.deviceManager

The APIs of this module are deprecated. You are advised to use [@ohos.distributedDeviceManager](arkts-distributeddevicemanager.md#distributeddevicemanager). The **deviceManager** module provides APIs for distributed device management. System applications can call the APIs to do the following: - Subscribe to or unsubscribe from device state changes. - Discover devices nearby. - Authenticate or deauthenticate a device. - Query the trusted device list. - Query local device information, including the device name, type, and ID. - Publishes device information for discovery purposes.

**Since:** 7

**Deprecated since:** 11

**Substitutes:** [distributedDeviceManager:distributedDeviceManager](arkts-distributeddevicemanager.md#distributeddevicemanager)

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## Modules to Import

```TypeScript
import { deviceManager } from '@ohos.distributedHardware.deviceManager';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createDeviceManager](arkts-distributedservice-createdevicemanager-f-sys.md#createdevicemanager-1) | Creates a **DeviceManager** instance. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AuthInfo](arkts-distributedservice-authinfo-i-sys.md) | Defines authentication information. |
| [AuthParam](arkts-distributedservice-authparam-i-sys.md) | Defines the authentication parameters. |
| [DeviceInfo](arkts-distributedservice-deviceinfo-i-sys.md) | Defines device information. |
| [DeviceManager](arkts-distributedservice-devicemanager-i-sys.md) | Provides APIs to obtain information about trusted devices and local devices. Before calling any API in **DeviceManager**, you must use **createDeviceManager** to create a **DeviceManager** instance, for example, **dmInstance**. |
| [PublishInfo](arkts-distributedservice-publishinfo-i-sys.md) | Defines published device information. |
| [SubscribeInfo](arkts-distributedservice-subscribeinfo-i-sys.md) | Defines subscription information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuthForm](arkts-distributedservice-authform-e-sys.md) | Enumerates the device authentication types. |
| [DeviceStateChangeAction](arkts-distributedservice-devicestatechangeaction-e-sys.md) | Enumerates the device states. |
| [DeviceType](arkts-distributedservice-devicetype-e-sys.md) | Enumerates the device types. |
| [DiscoverMode](arkts-distributedservice-discovermode-e-sys.md) | Enumerates the device discovery modes. |
| [ExchangeFreq](arkts-distributedservice-exchangefreq-e-sys.md) | Enumerates the device discovery frequencies. |
| [ExchangeMedium](arkts-distributedservice-exchangemedium-e-sys.md) | Enumerates the media used for device discovery. |
| [SubscribeCap](arkts-distributedservice-subscribecap-e-sys.md) | Enumerates the discovery capabilities. |
<!--DelEnd-->

