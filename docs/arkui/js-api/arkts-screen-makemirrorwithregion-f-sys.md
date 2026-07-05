# makeMirrorWithRegion

## makeMirrorWithRegion

```TypeScript
function makeMirrorWithRegion(mainScreen: long, mirrorScreen: Array<long>, mainScreenRegion: Rect): Promise<long>
```

将屏幕的某一矩形区域设置为镜像模式，使用Promise异步回调。调用该接口后，不建议再进行屏幕的旋转/折叠，否则可能导致镜像内容异常。

**Since:** 19

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mainScreen | long | Yes | 主屏幕ID，该参数仅支持正整数输入。 |
| mirrorScreen | Array&lt;long> | Yes | 镜像屏幕ID集合。其中ID应为正整数。 |
| mainScreenRegion | Rect | Yes | 主屏创建镜像的矩形区域。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象。返回镜像屏幕的群组id，其中id为正整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1400001 | Invalid display or screen. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Obtain the screen ID using getAllScreens().
let mainScreenId: number = 0; // Main screen ID.
let mirrorScreenIds: Array<number> = [1, 2, 3]; // ID array of mirrored screens.
// Rectangle on the main screen to be mirrored.
let mainScreenRegion: screen.Rect = {
  left : 0,
  top : 0,
  width : 1920,
  height : 1080
};
// Set a rectangle on the screen to mirror mode.
screen.makeMirrorWithRegion(mainScreenId, mirrorScreenIds, mainScreenRegion).then((data: number) => {
  console.info(`Succeeded in setting screen mirroring. Data: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set screen area mirroring. Code: ${err.code}, message: ${err.message}`);
});

```

