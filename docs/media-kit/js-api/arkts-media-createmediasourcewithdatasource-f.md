# createMediaSourceWithDataSource

## createMediaSourceWithDataSource

```TypeScript
function createMediaSourceWithDataSource(dataSrc: AVDataSrcDescriptor): MediaSource | undefined
```

通过自定义数据源创建媒体源。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSrc | AVDataSrcDescriptor | Yes | 流式媒体资源描述符。 |

**Return value:**

| Type | Description |
| --- | --- |
| MediaSource | 返回MediaSource，用于媒体资源设置。 |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { fileIo as fs, ReadOptions } from '@kit.CoreFileKit';

let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let fileDescriptor = await context.resourceManager.getRawFd('xxx.mp4');
let file = fs.openSync("xxx.mp4");
let dataSrc: media.AVDataSrcDescriptor = {
  fileSize: fileDescriptor.length,
  callback: (buf: ArrayBuffer, length: number, pos?: number) => {
    let readLen = 0;
    if (pos) {
      let option: ReadOptions = {
        offset: pos,
        length: length,
      };
      readLen = fs.readSync(file.fd, buf, option);
    }
    return readLen > 0 ? readLen : -1;
  }
}
let mediaSource : media.MediaSource | undefined =  media.createMediaSourceWithDataSource(dataSrc);

```

