# getAllSkillInfos

## getAllSkillInfos

```TypeScript
function getAllSkillInfos(flags: int, userId?: int): Promise<Array<SkillInfo>>
```

Obtains all SkillInfo objects installed on the device. To query information for other local accounts, the permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS must additionally be granted.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_SKILL_PRIVILEGE or ohos.permission.MANAGE_SKILL

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flags | int | Yes | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo objects that will be returned. |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SkillInfo>> | Returns the list of SkillInfo objects. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 17700004 | The specified user ID is not found. |

