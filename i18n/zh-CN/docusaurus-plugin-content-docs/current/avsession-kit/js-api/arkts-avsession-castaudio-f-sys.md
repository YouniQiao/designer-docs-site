# castAudio

## castAudio

```TypeScript
function castAudio(session: SessionToken | 'all', audioDevices: Array<audio.AudioDeviceDescriptor>, callback: AsyncCallback<void>): void
```

Cast Audio to the remote devices or cast back local device

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| session | SessionToken \| 'all' | 是 | Specifies the sessionId which to send to remote. |
| audioDevices | Array&lt;audio.AudioDeviceDescriptor> | 是 | Specifies the audio devices to cast. |
| callback | AsyncCallback&lt;void> | 是 | The asyncCallback triggered when the command is executed successfully  'all' means cast all the media audio of this device to remote. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600104 | The remote session connection failed. |

**示例：**

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

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MEDIA_RESOURCES

**系统能力：** SystemCapability.Multimedia.AVSession.Manager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| session | SessionToken \| 'all' | 是 | Specifies the sessionId which to send to remote. |
| audioDevices | Array&lt;audio.AudioDeviceDescriptor> | 是 | Specifies the audio devices to cast. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | void promise when executed successfully  'all' means cast all the media audio of this device to remote. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | permission denied |
| 202 | Not System App. |
| 401 | parameter check failed. 1.Mandatory parameters are left unspecified.  2.Parameter verification failed. |
| 6600101 | Session service exception. |
| 6600102 | The session does not exist. |
| 6600104 | The remote session connection failed. |

**示例：**

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

