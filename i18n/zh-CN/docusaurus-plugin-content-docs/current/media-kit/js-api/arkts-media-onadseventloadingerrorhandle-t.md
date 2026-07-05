# OnAdsEventLoadingErrorHandle

```TypeScript
type OnAdsEventLoadingErrorHandle = (adsId: string, reason: BusinessError) => void
```

Describes the callback function for the ad media resource loading error event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| adsId | string | 是 | ID of the advertisement resource that fails to be loaded. |
| reason | BusinessError | 是 | Indicates the reason of the loading failure. |

