# createMediaSourceWithFd

## createMediaSourceWithFd

```TypeScript
function createMediaSourceWithFd(fdSrc: AVFileDescriptor): MediaSource | undefined
```

通过文件描述符创建媒体源。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fdSrc | AVFileDescriptor | Yes | 媒体文件描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| MediaSource | 返回MediaSource，用于媒体资源设置。 |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let fdSrc = await context.resourceManager.getRawFd('xxx.mp4');
let mediaSource : media.MediaSource | undefined = media.createMediaSourceWithFd(fdSrc);

```

