# createAVMusicTemplateController

## createAVMusicTemplateController

```TypeScript
function createAVMusicTemplateController(sessionId: string): AVMusicTemplateController
```

Create AVMusicTemplate controller instance.

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sessionId | string | 是 | sessionId of the AVMusicTemplate instance |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AVMusicTemplateController | a controller instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verify failed. |
| 202 | Not System App. |
| 801 | Capability not supported.function createAVMusicTemplateController  can not work correctly due to limited device capabilities. |
| 35000002 | Failed to create the AVMusicTemplate controller. |
| 35000005 | AVMusicTemplate does not exist. |

