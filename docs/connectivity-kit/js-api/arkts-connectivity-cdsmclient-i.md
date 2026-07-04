# CdsmClient

Manages a CDSM client instance. Before invoking any CDSM client method, you must use {@link createCdsmClient} to create a CDSM client instance.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## getCdsmInfo

```TypeScript
getCdsmInfo(): CdsmInfo
```

Gets the coordinated devices set information.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| CdsmInfo | Returns the coordinated devices set information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## offCdsmInfoChange

```TypeScript
offCdsmInfoChange(callback?: Callback<CdsmInfo>): void
```

Unsubscribes from coordinated devices set information change event. If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned. Otherwise, a random device address is returned.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CdsmInfo&gt; | No | Callback used to listen for the coordinated devices set information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

## onCdsmInfoChange

```TypeScript
onCdsmInfoChange(callback: Callback<CdsmInfo>): void
```

Subscribes to coordinated devices set information change event. If the user has the ohos.permission.GET_NEARLINK_PEER_MAC permission, the real device address is returned. Otherwise, a random device address is returned.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CdsmInfo&gt; | Yes | Callback used to listen for the coordinated devices set information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

