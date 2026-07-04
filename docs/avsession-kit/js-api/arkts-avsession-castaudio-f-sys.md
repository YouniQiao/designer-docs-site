# castAudio (System API)

## Modules to Import

```TypeScript
import { avSession } from '@ohos.multimedia.avsession';
```

## castAudio

```TypeScript
function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>, callback: AsyncCallback<void>): void
```

Cast Audio to the remote devices or cast back local device

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | SessionToken \| 'all' | Yes | Specifies the sessionId which to send to remote. |
| audioDevices | Array&lt;audio.AudioDeviceDescriptor&gt; | Yes | Specifies the audio devices to cast. |
| callback | AsyncCallback&lt;void&gt; | Yes | The asyncCallback triggered when the command is executed successfully'all' means cast all the media audio of this device to remote. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600104](../errorcode-avsession.md#6600104-remote-session-connection-failure) | The remote session connection failed. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioManager = audio.getAudioManager();
let audioRoutingManager = audioManager.getRoutingManager();
let audioDevices: audio.AudioDeviceDescriptors | undefined = undefined;
audioRoutingManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG).then((data) => {
  audioDevices = data;
  console.info('Promise returned to indicate that the device list is obtained.');
  if (audioDevices !== undefined) {
    avSession.castAudio('all', audioDevices as audio.AudioDeviceDescriptors, () => {
        console.info('Succeeded in casting audio.');
    });
  }
});

```


## castAudio

```TypeScript
function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>): Promise<void>
```

Cast Audio to the remote devices or cast back local device

**Since:** 9

**Required permissions:** ohos.permission.MANAGE_MEDIA_RESOURCES

**System capability:** SystemCapability.Multimedia.AVSession.Manager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| session | SessionToken \| 'all' | Yes | Specifies the sessionId which to send to remote. |
| audioDevices | Array&lt;audio.AudioDeviceDescriptor&gt; | Yes | Specifies the audio devices to cast. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | void promise when executed successfully'all' means cast all the media audio of this device to remote. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600104](../errorcode-avsession.md#6600104-remote-session-connection-failure) | The remote session connection failed. |

**Example**

```TypeScript
import { audio } from '@kit.AudioKit';

let audioManager = audio.getAudioManager();
let audioRoutingManager = audioManager.getRoutingManager();
let audioDevices: audio.AudioDeviceDescriptors | undefined = undefined;
audioRoutingManager.getDevices(audio.DeviceFlag.OUTPUT_DEVICES_FLAG).then((data) => {
  audioDevices = data;
  console.info('Promise returned to indicate that the device list is obtained.');
});

if (audioDevices !== undefined) {
  avSession.castAudio('all', audioDevices as audio.AudioDeviceDescriptors).then(() => {
    console.info('Succeeded in creating controller.');
  });
}

```

