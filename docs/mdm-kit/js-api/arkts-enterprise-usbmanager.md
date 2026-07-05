# @ohos.enterprise.usbManager

本模块提供USB管理能力。 > **说明**： > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。 > > 全局通用限制类策略由restrictions统一提供，若要全局禁用USB，请参考 > [@ohos.enterprise.restrictions（限制类策略）]{@link @ohos.enterprise.restrictions:restrictions}。

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedUsbDevices](arkts-usbmanager-addallowedusbdevices-f.md#addAllowedUsbDevices-1) | 添加USB设备可用名单。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB或者USB转串口能力。 2. 已经通过[setUsbStorageDeviceAccessPolicy]{@link usbManager.setUsbStorageDeviceAccessPolicy}接口设置了USB存储设备访问策略为禁用。 3. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口添加了禁止使用的USB设备类型。 |
| [addDisallowedUsbDevices](arkts-usbmanager-adddisallowedusbdevices-f.md#addDisallowedUsbDevices-1) | 添加禁止使用的USB设备类型。 以下情况下，调用本接口会报策略冲突： 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB能力。 2. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}接口禁用了某用户USB存储设备写入能力。 |
| <!--DelRow-->[disableUsb](arkts-usbmanager-disableusb-f-sys.md#disableUsb-1) | 设置禁用或启用USB。 |
| [getAllowedUsbDevices](arkts-usbmanager-getallowedusbdevices-f.md#getAllowedUsbDevices-1) | 获取USB设备可用名单。 |
| [getDisallowedUsbDevices](arkts-usbmanager-getdisallowedusbdevices-f.md#getDisallowedUsbDevices-1) | 获取禁止使用的USB设备类型。 |
| [getUsbStorageDeviceAccessPolicy](arkts-usbmanager-getusbstoragedeviceaccesspolicy-f.md#getUsbStorageDeviceAccessPolicy-1) | 获取USB存储设备访问策略。 |
| <!--DelRow-->[isUsbDisabled](arkts-usbmanager-isusbdisabled-f-sys.md#isUsbDisabled-1) | 查询USB是否禁用。 |
| [removeAllowedUsbDevices](arkts-usbmanager-removeallowedusbdevices-f.md#removeAllowedUsbDevices-1) | 移除USB设备可用名单。 |
| [removeDisallowedUsbDevices](arkts-usbmanager-removedisallowedusbdevices-f.md#removeDisallowedUsbDevices-1) | 移除禁止使用的USB设备类型。 |
| <!--DelRow-->[setUsbPolicy](arkts-usbmanager-setusbpolicy-f-sys.md#setUsbPolicy-1) | 设置USB的读写策略。使用callback异步回调。 |
| <!--DelRow-->[setUsbPolicy](arkts-usbmanager-setusbpolicy-f-sys.md#setUsbPolicy-2) | 设置USB的读写策略。使用Promise异步回调。 |
| [setUsbStorageDeviceAccessPolicy](arkts-usbmanager-setusbstoragedeviceaccesspolicy-f.md#setUsbStorageDeviceAccessPolicy-1) | 设置USB存储设备访问策略。 > **说明**： > > 在调用接口前，确保已暂停USB存储设备的读写操作，保证操作的稳定性和数据的完整性，否则可能出现不可预期的异常。 以下情况下，通过本接口设置USB存储设备访问策略为可读可写/只读，会报策略冲突： 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB能力。 2. 已经通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口将存储类型的USB设备添加为禁止使用的USB设备类型。 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}接口禁用了某用户USB存储设备写入能力。 以下情况下，通过本接口设置USB存储设备访问策略为禁用，会报策略冲突： 1. 已经通过[setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}接口禁用了设备USB能力。 2. 已经通过[addAllowedUsbDevices]{@link usbManager.addAllowedUsbDevices}接口添加了USB设备可用名单。 3. 已经通过[setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}接口禁用了某用户USB存储设备写入能力。 通过本接口设置，或者通过[addDisallowedUsbDevices]{@link usbManager.addDisallowedUsbDevices}接口添加存储类型的USB设备，均可禁用USB存储设备。推荐使用后者。 |

### Interfaces

| Name | Description |
| --- | --- |
| [UsbDeviceId](arkts-usbmanager-usbdeviceid-i.md) | USB设备ID信息。 |
| [UsbDeviceType](arkts-usbmanager-usbdevicetype-i.md) | USB设备类型信息。 |

### Enums

| Name | Description |
| --- | --- |
| [Descriptor](arkts-usbmanager-descriptor-e.md) | USB描述符的枚举。 |
| [UsbPolicy](arkts-usbmanager-usbpolicy-e.md) | USB读写策略的枚举。 |

