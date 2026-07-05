# getSkillInfoForSelf

## getSkillInfoForSelf

```TypeScript
function getSkillInfoForSelf(moduleName: string, skillName: string, flags: int): Promise<SkillInfo>
```

Obtains SkillInfo of the calling application based on moduleName and skillName.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| moduleName | string | 是 | Indicates the module name of the skill. |
| skillName | string | 是 | Indicates the name of the skill. |
| flags | int | 是 | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo object that will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SkillInfo> | Returns the SkillInfo object of the specified skill. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17700002 | The specified module is not found. |
| 17700093 | The specified skillName is not found. |

