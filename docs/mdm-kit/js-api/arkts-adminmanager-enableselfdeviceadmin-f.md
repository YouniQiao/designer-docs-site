# enableSelfDeviceAdmin

## enableSelfDeviceAdmin

```TypeScript
function enableSelfDeviceAdmin(admin: Want, credential: string): Promise<void>
```

在企业设备中，MDM应用没有预置激活的场景下，MDM应用可以通过该接口实现自激活。该接口仅支持激活MDM应用自身，不支持激活其他MDM应用；支持的激活类型包括超级设备管理应用和普通设备管理应用。 <!--RP1--><!--RP1End-->

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_ACTIVATE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| credential | string | Yes | 激活凭证。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the enableSelfDeviceAdmin. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200003 | The administrator ability component is invalid. |
| 9200004 | Failed to activate the administrator application of the device. |
| 9200012 | Parameter verification failed. |
| 9200017 | The self-activation credential of the enterprise device administrator  is invalid. |
| 9200018 | This device is not an enterprise device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

