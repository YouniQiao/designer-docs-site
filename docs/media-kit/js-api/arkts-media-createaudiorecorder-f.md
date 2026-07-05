# createAudioRecorder

## createAudioRecorder

```TypeScript
function createAudioRecorder(): AudioRecorder
```

创建音频录制的实例来控制音频的录制。一台设备只允许创建一个录制实例。 > **说明：** > > 从API version 6开始支持，从API version 9开始废弃，建议使用 > [createAVRecorder]media.createAVRecorder(callback: AsyncCallback<AVRecorder>)替代。

**Since:** 6

**Deprecated since:** 9

**Substitute:** media.createAVRecorder(callback:

**System capability:** SystemCapability.Multimedia.Media.AudioRecorder

**Return value:**

| Type | Description |
| --- | --- |
| AudioRecorder | 返回AudioRecorder类实例，失败时返回null。可用于录制音频媒体。 |

**Example**

```TypeScript
let audioRecorder: media.AudioRecorder = media.createAudioRecorder();

```

