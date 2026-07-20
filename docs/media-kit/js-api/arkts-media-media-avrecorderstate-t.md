# AVRecorderState

```TypeScript
type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error'
```

Enumerates the AVRecorder states. You can obtain the state through the **state** property.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-media-type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error'--><!--Device-media-type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error'-End-->

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

| Type | Description |
| --- | --- |
| 'idle' | The AVRecorder enters this state after it is just created or the[AVRecorder.reset()]{ |
| 'prepared' | The AVRecorder enters this state when the parameters are set. In this state, you cancall [AVRecorder.start()]{ |
| 'started' | The AVRecorder enters this state when the recording starts. In this state, you can call[AVRecorder.pause()]{ |
| 'paused' | The AVRecorder enters this state when the recording is paused. In this state, you cancall [AVRecorder.resume()]{ |
| 'stopped' | The AVRecorder enters this state when the recording stops. In this state, you can call[AVRecorder.prepare()]{ |
| 'released' | The AVRecorder enters this state when the recording resources are released. In thisstate, no operation can be performed. In any other state, you can call[AVRecorder.release()]{ |
| 'error' | The AVRecorder enters this state when an irreversible error occurs in the AVRecorderinstance. In this state, the[AVRecorder.on('error') event]{ |

