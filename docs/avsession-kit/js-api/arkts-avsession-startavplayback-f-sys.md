# startAVPlayback

## startAVPlayback

```TypeScript
function startAVPlayback(bundleName: string, assetId: string): Promise<void>
```

Start an application for media playback.

**Since:** 11

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Specifies the bundleName which to be started. |
| assetId | string | Yes | Specifies the assetId to be started. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. Interface caller is not a system app. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 6600101 | Session service exception. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

avSession.startAVPlayback("com.example.myapplication", "121278").then(() => {
  console.info('Succeeded in starting AV playback.');
});

```

## startAVPlayback

```TypeScript
function startAVPlayback(bundleName: string, assetId: string, info: CommandInfo): Promise<void>
```

Start an application for media playback with command info.

**Since:** 22

**Required permissions:** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Specifies the bundleName which to be started. |
| assetId | string | Yes | Specifies the assetId to be started. |
| info | CommandInfo | Yes | Specifies the specified command information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. Interface caller is not a system app. |
| 6600101 | Session service exception. |

