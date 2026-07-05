# QueryMediaTabContentEvent

```TypeScript
type QueryMediaTabContentEvent = (tabId: string) => Promise<MediaTabContent>
```

The query media tab content event.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.AVSession.AVMusicTemplate

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tabId | string | 是 | tab id |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;MediaTabContent> | (MediaTabContent) returned through promise |

