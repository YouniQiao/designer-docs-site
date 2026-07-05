# createAVMusicTemplate

## createAVMusicTemplate

```TypeScript
function createAVMusicTemplate(accessType: AVMusicTemplateType): AVMusicTemplate
```

Create an AVMusicTemplate instance.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| accessType | AVMusicTemplateType | 是 | type of access, default is 'smartCar' |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| AVMusicTemplate | an AVMusicTemplate instance |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported.function createAVMusicTemplate  can not work correctly due to limited device capabilities. |
| 35000001 | Failed to create the AVMusicTemplate. |

