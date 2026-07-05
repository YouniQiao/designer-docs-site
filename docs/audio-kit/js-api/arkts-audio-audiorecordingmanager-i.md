# AudioRecordingManager

Provides recording strategy management, including collaborative recording and recording control capabilities.

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## enableSystemRecordController

```TypeScript
enableSystemRecordController(show: boolean, config: SystemRecordControllerConfig): Promise<void>
```

Enables or disables the system recording controller panel. The application can call this API to pull up the recording controller panel before starting the recording stream, allowing the user to finish selecting the recording device or audio effect parameters. The recording service can then be started to avoid inconsistent audio effects caused by switching during the recording process. The application must be in the foreground to enable the panel; the enable operation does not take effect if the application is in the background. Disabling the panel is not restricted by the application's foreground or background status. The API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| show | boolean | Yes | A boolean value indicating whether to show (true) or hide (false)  the system recording controller panel. |
| config | SystemRecordControllerConfig | Yes | Configuration for the system recording controller panel. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio service error occurs like service died. |

## offSystemRecordControllerEnabledChange

```TypeScript
offSystemRecordControllerEnabledChange(callback?: Callback<SystemRecordControllerChangeInfo>): void
```

Unsubscribes from the system recording controller panel enabled state change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SystemRecordControllerChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio service error occurs like service died. |

## onSystemRecordControllerEnabledChange

```TypeScript
onSystemRecordControllerEnabledChange(callback: Callback<SystemRecordControllerChangeInfo>): void
```

Subscribes to the system recording controller panel enabled state change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;SystemRecordControllerChangeInfo> | Yes | Callback used to listen  whether the system recording controller panel enabled state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800102 | Memory allocation failed. |
| 6800301 | Audio service error occurs like service died. |

