# stopVpnExtensionAbility

## stopVpnExtensionAbility

```TypeScript
function stopVpnExtensionAbility(want: Want): Promise<void>
```

Stops a service within the same application.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want info to start. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | If the input parameter is not valid parameter. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000006 | Cross-user operations are not allowed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

