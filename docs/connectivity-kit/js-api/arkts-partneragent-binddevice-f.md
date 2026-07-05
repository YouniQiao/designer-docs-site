# bindDevice

## bindDevice

```TypeScript
function bindDevice(deviceAddress: PartnerDeviceAddress, deviceCapability: DeviceCapability,
    businessCapability: BusinessCapability, partnerAgentExtensionAbilityName: string): Promise<void>
```

Bind the partner device. After successfully binding the device, if the device meets the discovery requirements, the {@link PartnerAgentExtensionAbility} of the application will be launched. - If the {@link DeviceCapability.supportBR} in the capability variable is set to true, the application's ability will be launched when the device is connected via Bluetooth. - If the {@link DeviceCapability.supportBleAdvertiser} in the capability variable is set to true, the application's ability will be launched when the device is detected via Bluetooth scanning. Note: The device must be paired first.

**Since:** 23

**Required permissions:** 

 ohos.permission.ACCESS_BLUETOOTH

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | Yes | The address of partner device. |
| deviceCapability | DeviceCapability | Yes | The capability of partner device. |
| businessCapability | BusinessCapability | Yes | The business capability of application. |
| partnerAgentExtensionAbilityName | string | Yes | The name of PartnerAgentExtensionAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900003 | The device is not paired. |
| 34900004 | The device has already been bound to the PartnerAgentExtensionAbility. |
| 34900005 | Bluetooth disabled. |
| 34900099 | Internal error. |

