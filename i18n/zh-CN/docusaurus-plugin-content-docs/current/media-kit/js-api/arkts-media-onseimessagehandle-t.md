# OnSeiMessageHandle

```TypeScript
type OnSeiMessageHandle = (messages: Array<SeiMessage>, playbackPosition?: int) => void
```

获取SEI信息，使用场景：订阅SEI信息事件，回调返回SEI详细信息。

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| messages | Array&lt;SeiMessage> | 是 | SEI信息。 |
| playbackPosition | int | 否 |  |

