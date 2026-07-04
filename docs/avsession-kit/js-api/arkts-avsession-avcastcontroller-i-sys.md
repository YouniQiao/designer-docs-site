# AVCastController

AVCastController definition used to implement a remote control when a cast is connected

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

## Modules to Import

```TypeScript
import { avSession } from '@ohos.multimedia.avsession';
```

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string, callback: AsyncCallback<void>): void
```

Set a surface instance to display playing view, used at sink side.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id, video player will use this id get a surface instance. |
| callback | AsyncCallback&lt;void&gt; | Yes | A callback instance used to return when set surface completed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600109](../errorcode-avsession.md#6600109-remote-session-does-not-exist) | The remote connection is not established |

**Example**

```TypeScript
import { media } from '@kit.MediaKit';

let surfaceID: string = '';
media.createAVRecorder().then((avRecorder) => {
  avRecorder.getInputSurface((surfaceId: string) => {
    console.info('Succeeded in getting input surface.');
    surfaceID = surfaceId;
    if (surfaceID) {
      avCastController.setDisplaySurface(surfaceID, () => {
          console.info('Succeeded in setting display surface.');
      });
    }
  });
})

```

## setDisplaySurface

```TypeScript
setDisplaySurface(surfaceId: string): Promise<void>
```

Set a surface instance to display playing view, used at sink side.

**Since:** 10

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| surfaceId | string | Yes | surface id, video player will use this id get a surface instance. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600109](../errorcode-avsession.md#6600109-remote-session-does-not-exist) | The remote connection is not established |

**Example**

```TypeScript
import { media } from '@kit.MediaKit';

let surfaceID: string = '';
media.createAVRecorder().then((avRecorder) => {
  avRecorder.getInputSurface((surfaceId: string) => {
    console.info('Succeeded in getting input surface.');
    surfaceID = surfaceId;
    if (surfaceID) {
      avCastController.setDisplaySurface(surfaceID).then(() => {
        console.info('Succeeded in setting display surface.');
      });
    }
  });
})

```

