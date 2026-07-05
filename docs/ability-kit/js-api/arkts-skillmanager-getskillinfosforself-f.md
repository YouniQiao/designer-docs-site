# getSkillInfosForSelf

## getSkillInfosForSelf

```TypeScript
function getSkillInfosForSelf(flags: int): Promise<Array<SkillInfo>>
```

Obtains all SkillInfo objects of the calling application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flags | int | Yes | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo objects that will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SkillInfo>> | Returns the list of SkillInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700101 | Bundle manager service is exception. Possible causes:  1. Failed to connect to the system service.  2. IPC data transmission failed.  3. Failed to obtain the object constructor. |

