# AVRecorderState

```TypeScript
type AVRecorderState = 'idle' | 'prepared' | 'started' | 'paused' | 'stopped' | 'released' | 'error'
```

音视频录制的状态机。可通过state属性获取当前状态。

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Multimedia.Media.AVRecorder

| 类型 | 说明 |
| --- | --- |
| 'idle' | The AVRecorder enters this state after it is just created or the  [AVRecorder.reset()]{ |
| 'prepared' | The AVRecorder enters this state when the parameters are set. In this state, you can  call [AVRecorder.start()]{ |
| 'started' | The AVRecorder enters this state when the recording starts. In this state, you can call  [AVRecorder.pause()]{ |
| 'paused' | The AVRecorder enters this state when the recording is paused. In this state, you can  call [AVRecorder.resume()]{ |
| 'stopped' | The AVRecorder enters this state when the recording stops. In this state, you can call   [AVRecorder.prepare()]{ |
| 'released' | The AVRecorder enters this state when the recording resources are released. In this  state, no operation can be performed. In any other state, you can call  [AVRecorder.release()]{ |
| 'error' | The AVRecorder enters this state when an irreversible error occurs in the AVRecorder  instance. In this state, the   [AVRecorder.on('error') event]{ |

