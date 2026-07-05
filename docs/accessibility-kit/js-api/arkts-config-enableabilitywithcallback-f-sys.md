# enableAbilityWithCallback

## enableAbilityWithCallback

```TypeScript
function enableAbilityWithCallback(
    name: string,
    capability: Array<accessibility.Capability>,
    connectCallback: ConnectCallback
  ): Promise<void>
```

Enables the auxiliary extension ability and specifies [ConnectCallback](arkts-config-connectcallback-i-sys.md#ConnectCallback) to be invoked when the state of an auxiliary extension ability changes. This API uses a promise to return the result.

**Since:** 23

**Required permissions:** 

 ohos.permission.WRITE_ACCESSIBILITY_CONFIG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the accessibility extension ability, in the format of 'bundleName/abilityName'. |
| capability | Array&lt;accessibility.Capability> | Yes | Capabilities of the auxiliary extension ability. |
| connectCallback | ConnectCallback | Yes | Callback to be invoked when the state of an auxiliary extension  ability changes. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 9300001 | Invalid bundle name or ability name. |
| 9300002 | Target ability already enabled. |

