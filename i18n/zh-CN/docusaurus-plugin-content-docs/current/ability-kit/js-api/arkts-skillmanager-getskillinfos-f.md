# getSkillInfos

## getSkillInfos

```TypeScript
function getSkillInfos(bundleName: string, flags: int, userId?: int): Promise<Array<SkillInfo>>
```

Obtains all SkillInfo of a specified application based on bundleName. To query information for other local accounts, the permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS must additionally be granted.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MANAGE_SKILL_PRIVILEGE or ohos.permission.MANAGE_SKILL

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Indicates the bundle name of the application. |
| flags | int | 是 | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo objects that will be returned. |
| userId | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;SkillInfo>> | Returns the list of SkillInfo objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 17700001 | The specified bundleName is not found. |
| 17700004 | The specified user ID is not found. |

