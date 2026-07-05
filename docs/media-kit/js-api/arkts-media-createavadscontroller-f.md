# createAVAdsController

## createAVAdsController

```TypeScript
function createAVAdsController(player: AVPlayer): Promise<AVAdsController | undefined>
```

Create an ad playback controller associated with the player instance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| player | AVPlayer | Yes | Created player instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AVAdsController \| undefined> | If success, an Controller is returned. Otherwise returns null. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400108 | The player object corresponding to player does not exist or is invalid. |

