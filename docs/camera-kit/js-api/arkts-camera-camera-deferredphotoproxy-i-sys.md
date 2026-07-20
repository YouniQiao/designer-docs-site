# DeferredPhotoProxy (System API)

A class object that functions as a thumbnail proxy.

**Since:** 11

<!--Device-camera-interface DeferredPhotoProxy--><!--Device-camera-interface DeferredPhotoProxy-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## getThumbnail

```TypeScript
getThumbnail(): Promise<image.PixelMap>
```

Obtains the PixelMap of a thumbnail. This API uses a promise to return the result.

**Since:** 11

<!--Device-DeferredPhotoProxy-getThumbnail(): Promise<image.PixelMap>--><!--Device-DeferredPhotoProxy-getThumbnail(): Promise<image.PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<image.PixelMap> | PixelMap of the thumbnail. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
import { image } from '@kit.ImageKit';

function getThumbnail(proxyObj: camera.DeferredPhotoProxy): void {
  proxyObj.getThumbnail().then((thumbnail: image.PixelMap) => {
    AppStorage.setOrCreate('proxyThumbnail', thumbnail);
  });
}

```

## release

```TypeScript
release(): Promise<void>
```

Releases depth data output resources. This API uses a promise to return the result.

**Since:** 11

<!--Device-DeferredPhotoProxy-release(): Promise<void>--><!--Device-DeferredPhotoProxy-release(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System Application. |

**Example**

```TypeScript
async function releaseDeferredPhotoProxy(proxyObj: camera.DeferredPhotoProxy): Promise<void> {
  await proxyObj.release();
}

```

