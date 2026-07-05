# getSkillInfoForSelf

## getSkillInfoForSelf

```TypeScript
function getSkillInfoForSelf(moduleName: string, skillName: string, flags: int): Promise<SkillInfo>
```

Obtains SkillInfo of the calling application based on moduleName and skillName.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Indicates the module name of the skill. |
| skillName | string | Yes | Indicates the name of the skill. |
| flags | int | Yes | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo object that will be returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SkillInfo> | Returns the SkillInfo object of the specified skill. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17700002 | The specified module is not found. |
| 17700093 | The specified skillName is not found. |

