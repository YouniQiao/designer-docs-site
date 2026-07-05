# onAVMusicTemplateCreate

## onAVMusicTemplateCreate

```TypeScript
function onAVMusicTemplateCreate(callback: Callback<AVMusicTemplateDescriptor>): void
```

Register session create event

**起始版本：** 23

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;AVMusicTemplateDescriptor> | 是 | Used to handle 'sessionCreate' command |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verify failed. |
| 202 | Not System App. |
| 801 | Capability not supported.function onAVMusicTemplateCreate  can not work correctly due to limited device capabilities. |

