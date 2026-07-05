# createAVAdsController

## createAVAdsController

```TypeScript
function createAVAdsController(player: AVPlayer): Promise<AVAdsController | undefined>
```

Create an ad playback controller associated with the player instance.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| player | AVPlayer | 是 | Created player instance. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AVAdsController \| undefined> | If success, an Controller is returned. Otherwise returns null. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | The player object corresponding to player does not exist or is invalid. |

