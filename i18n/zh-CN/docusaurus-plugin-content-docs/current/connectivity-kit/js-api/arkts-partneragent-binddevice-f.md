# bindDevice

## bindDevice

```TypeScript
function bindDevice(deviceAddress: PartnerDeviceAddress, deviceCapability: DeviceCapability,
    businessCapability: BusinessCapability, partnerAgentExtensionAbilityName: string): Promise<void>
```

Bind the partner device. After successfully binding the device, if the device meets the discovery requirements, the {@link PartnerAgentExtensionAbility} of the application will be launched. - If the {@link DeviceCapability.supportBR} in the capability variable is set to true, the application's ability will be launched when the device is connected via Bluetooth. - If the {@link DeviceCapability.supportBleAdvertiser} in the capability variable is set to true, the application's ability will be launched when the device is detected via Bluetooth scanning. Note: The device must be paired first.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | 是 | The address of partner device. |
| deviceCapability | DeviceCapability | 是 | The capability of partner device. |
| businessCapability | BusinessCapability | 是 | The business capability of application. |
| partnerAgentExtensionAbilityName | string | 是 | The name of PartnerAgentExtensionAbility. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900003 | The device is not paired. |
| 34900004 | The device has already been bound to the PartnerAgentExtensionAbility. |
| 34900005 | Bluetooth disabled. |
| 34900099 | Internal error. |

