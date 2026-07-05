# getSkillInfosForSelf

## getSkillInfosForSelf

```TypeScript
function getSkillInfosForSelf(flags: int): Promise<Array<SkillInfo>>
```

Obtains all SkillInfo objects of the calling application.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flags | int | 是 | {@link SkillInfoFlag} - Indicates the flag used to specify information  contained in the SkillInfo objects that will be returned. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;SkillInfo>> | Returns the list of SkillInfo objects. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 17700101 | Bundle manager service is exception. Possible causes:  1. Failed to connect to the system service.  2. IPC data transmission failed.  3. Failed to obtain the object constructor. |

