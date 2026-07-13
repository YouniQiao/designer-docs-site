# @ohos.FusionConnectivity.partnerAgent

Provides APIs for managing partner agents.

**Since:** 23

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## Modules to Import

```TypeScript
import { partnerAgent } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [bindDevice](arkts-connectivity-binddevice-f.md#binddevice-1) | Bind the partner device.After successfully binding the device, if the device meets the discovery requirements,the {@link PartnerAgentExtensionAbility} of the application will be launched.- If the {@link DeviceCapability.supportBR} in the capability variable is set to true, the application's ability will be launched when the device is connected via Bluetooth.- If the {@link DeviceCapability.supportBleAdvertiser} in the capability variable is set to true, the application's ability will be launched when the device is detected via Bluetooth scanning.Note: The device must be paired first. |
| [getBoundDevices](arkts-connectivity-getbounddevices-f.md#getbounddevices-1) | Gets the list of addresses of the bound partner device for this application. |
| [isDeviceBound](arkts-connectivity-isdevicebound-f.md#isdevicebound-1) | Checks whether a device is bound to this application. |
| [isDeviceControlEnabled](arkts-connectivity-isdevicecontrolenabled-f.md#isdevicecontrolenabled-1) | Checks whether device control is enabled. |
| [isPartnerAgentSupported](arkts-connectivity-ispartneragentsupported-f.md#ispartneragentsupported-1) | Checks whether the current device supports the partner agent feature. |
| [unbindDevice](arkts-connectivity-unbinddevice-f.md#unbinddevice-1) | Unbinds a partner device. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disableDeviceControl](arkts-connectivity-disabledevicecontrol-f-sys.md#disabledevicecontrol-1) | Disables device control for a bound device. |
| [enableDeviceControl](arkts-connectivity-enabledevicecontrol-f-sys.md#enabledevicecontrol-1) | Enables device control for a bound device. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BusinessCapability](arkts-connectivity-businesscapability-i.md) | Describes the business capabilities of the application. |
| [DeviceCapability](arkts-connectivity-devicecapability-i.md) | Describes the capability of a partner device. |
| [PartnerDeviceAddress](arkts-connectivity-partnerdeviceaddress-i.md) | Describes the partner device address. |

### Enums

| Name | Description |
| --- | --- |
| [PartnerAgentExtensionAbilityDestroyReason](arkts-connectivity-partneragentextensionabilitydestroyreason-e.md) | The enum of reasons for destroying partner agent extension ability. |

