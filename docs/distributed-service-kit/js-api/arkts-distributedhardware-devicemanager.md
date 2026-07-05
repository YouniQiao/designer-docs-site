# @ohos.distributedHardware.deviceManager

本模块能力已更新至新模块。建议使用新模块的接口进行开发，参见 [@ohos.distributedDeviceManager]{@link @ohos.distributedDeviceManager:distributedDeviceManager}。 本模块提供分布式设备管理能力。 系统应用可调用接口实现如下功能： - 注册和解除注册设备上下线变化监听。 - 发现周边不可信设备。 - 认证和取消认证设备。 - 查询可信设备列表。 - 查询本地设备信息，包括设备名称，设备类型和设备标识。 - 发布设备发现。

**Since:** 7

**Deprecated since:** 11

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager

**System capability:** SystemCapability.DistributedHardware.DeviceManager

## Modules to Import

```TypeScript
import { deviceManager } from '@kit.DistributedServiceKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[createDeviceManager](arkts-devicemanager-createdevicemanager-f-sys.md#createDeviceManager-1) | 创建一个设备管理器实例。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[AuthInfo](arkts-devicemanager-authinfo-i-sys.md) | 认证信息。 |
| <!--DelRow-->[AuthParam](arkts-devicemanager-authparam-i-sys.md) | 认证参数。 |
| <!--DelRow-->[DeviceInfo](arkts-devicemanager-deviceinfo-i-sys.md) | 设备信息。 |
| [DeviceManager](arkts-devicemanager-devicemanager-i.md) | 设备管理实例，用于获取可信设备和本地设备的相关信息。在调用DeviceManager的方法前，需要先通过createDeviceManager构建一个DeviceManager实例dmInstance。 |
| <!--DelRow-->[PublishInfo](arkts-devicemanager-publishinfo-i-sys.md) | 发布设备参数 |
| <!--DelRow-->[SubscribeInfo](arkts-devicemanager-subscribeinfo-i-sys.md) | 发现信息。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[AuthForm](arkts-devicemanager-authform-e-sys.md) | 表示设备认证类型的枚举类。 |
| <!--DelRow-->[DeviceStateChangeAction](arkts-devicemanager-devicestatechangeaction-e-sys.md) | 表示设备状态变化的枚举。 |
| <!--DelRow-->[DeviceType](arkts-devicemanager-devicetype-e-sys.md) | 表示设备类型的枚举类。 |
| <!--DelRow-->[DiscoverMode](arkts-devicemanager-discovermode-e-sys.md) | 表示发现模式的枚举。 |
| <!--DelRow-->[ExchangeFreq](arkts-devicemanager-exchangefreq-e-sys.md) | 表示发现频率的枚举。 |
| <!--DelRow-->[ExchangeMedium](arkts-devicemanager-exchangemedium-e-sys.md) | 表示发现类型的枚举。 |
| <!--DelRow-->[SubscribeCap](arkts-devicemanager-subscribecap-e-sys.md) | 表示发现能力的枚举。 |

