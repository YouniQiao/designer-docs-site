# OnAdsEventAdsStartedHandle

```TypeScript
type OnAdsEventAdsStartedHandle = (adsId: string, duration: int) => void
```

Describes the callback function of the ad content playback start event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| adsId | string | 是 | ID of the ad resource that is being played. |
| duration | int | 是 | Playing duration of the advertisement, in milliseconds.  The value should be an integer. |

