# DownloadMediaEntityEvent

```TypeScript
type DownloadMediaEntityEvent = (controlType: DownloadControlType, mediaEntity: MediaEntity) => Promise<OperResult>
```

The download media entity event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| controlType | DownloadControlType | 是 | control type |
| mediaEntity | MediaEntity | 是 | media entity |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;OperResult> | (OperResult) returned through promise |

