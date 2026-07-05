# getSkillInfo

## getSkillInfo

```TypeScript
function getSkillInfo(bundleName: string, moduleName: string, skillName: string,
    flags: int, userId?: int): Promise<SkillInfo>
```

Obtains SkillInfo of a specified application based on bundleName, moduleName and skillName. To query information for other local accounts, the permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS must additionally be granted.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_SKILL_PRIVILEGE or ohos.permission.MANAGE_SKILL

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Indicates the bundle name of the application. |
| moduleName | string | Yes | Indicates the module name of the skill. |
| skillName | string | Yes | Indicates the name of the skill. |
| flags | int | Yes | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo object that will be returned. |
| userId | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SkillInfo> | Returns the SkillInfo object of the specified skill. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 17700001 | The specified bundleName is not found. |
| 17700002 | The specified module is not found. |
| 17700004 | The specified user ID is not found. |
| 17700093 | The specified skillName is not found. |

