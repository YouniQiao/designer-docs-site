# @ohos.FusionConnectivity.partnerAgent

Provides APIs for managing partner agents.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## 导入模块

```TypeScript
import { partnerAgent } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [bindDevice](arkts-partneragent-binddevice-f.md#bindDevice-1) | Bind the partner device. After successfully binding the device, if the device meets the discovery requirements, the {@link PartnerAgentExtensionAbility} of the application will be launched. - If the {@link DeviceCapability.supportBR} in the capability variable is set to true, the application's ability will be launched when the device is connected via Bluetooth. - If the {@link DeviceCapability.supportBleAdvertiser} in the capability variable is set to true, the application's ability will be launched when the device is detected via Bluetooth scanning. Note: The device must be paired first. |
| <!--DelRow-->[disableDeviceControl](arkts-partneragent-disabledevicecontrol-f-sys.md#disableDeviceControl-1) | Disables device control for a bound device. |
| <!--DelRow-->[enableDeviceControl](arkts-partneragent-enabledevicecontrol-f-sys.md#enableDeviceControl-1) | Enables device control for a bound device. |
| [getBoundDevices](arkts-partneragent-getbounddevices-f.md#getBoundDevices-1) | Gets the list of addresses of the bound partner device for this application. |
| [isDeviceBound](arkts-partneragent-isdevicebound-f.md#isDeviceBound-1) | Checks whether a device is bound to this application. |
| [isDeviceControlEnabled](arkts-partneragent-isdevicecontrolenabled-f.md#isDeviceControlEnabled-1) | Checks whether device control is enabled. |
| [isPartnerAgentSupported](arkts-partneragent-ispartneragentsupported-f.md#isPartnerAgentSupported-1) | Checks whether the current device supports the partner agent feature. |
| [unbindDevice](arkts-partneragent-unbinddevice-f.md#unbindDevice-1) | Unbinds a partner device. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [BusinessCapability](arkts-partneragent-businesscapability-i.md) | Describes the business capabilities of the application. |
| [DeviceCapability](arkts-partneragent-devicecapability-i.md) | Describes the capability of a partner device. |
| [PartnerDeviceAddress](arkts-partneragent-partnerdeviceaddress-i.md) | Describes the partner device address. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PartnerAgentExtensionAbilityDestroyReason](arkts-partneragent-partneragentextensionabilitydestroyreason-e.md) | The enum of reasons for destroying partner agent extension ability. |

