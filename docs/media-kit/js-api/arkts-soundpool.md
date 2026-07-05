# soundPool

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [ErrorInfo](arkts-errorinfo-i.md) | 错误信息。 |
| [PlayParameters](arkts-playparameters-i.md) | 表示音频池播放参数设置。 通过设置播放相关参数，来控制播放的音量，循环次数，播放优先级等参数。 |
| [SoundPool](arkts-soundpool-i.md) | 音频池提供了系统声音的加载、播放、音量设置、循环设置、停止播放和资源卸载等功能，在调用SoundPool的接口前，需要先通过 [media.createSoundPool](docroot://reference/apis-media-kit/arkts-apis-media-f.md) 创建实例。 > **说明：** > > - 在使用SoundPool实例的方法时，建议开发者注册相关回调，主动获取当前状态变化。 > > - [on('loadComplete')]{@link SoundPool.on(type: 'loadComplete', callback: Callback<int>)}：监听资源加载完成。建议开发者监听此回调以确 > 保音频在加载完成后进行播放。 > > - > [on('playFinishedWithStreamId')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)}：监听播 > 放完成，同时返回播放结束的音频的streamId。 > > - [on('playFinished')]{@link SoundPool.on(type: 'playFinishedWithStreamId', callback: Callback<int>)}：监听播放完成。 > > - [on('error')]{@link SoundPool.on(type: 'error', callback: ErrorCallback)}：监听错误事件。 > > - [on('errorOccurred')]{@link SoundPool.on(type:'errorOccurred', callback:Callback<ErrorInfo>)}：监听错误事件，同时返回 > [errorInfo]{@link ErrorInfo}。 > > - SoundPool目前不支持后台播放、设置音频打断等音频焦点策略和跳过音频头尾的静音帧。SoundPool低时延播放可参考 > [使用SoundPool播放短音频(ArkTS)](docroot://media/media/using-soundpool-for-playback.md)。 |

### Enums

| Name | Description |
| --- | --- |
| [ErrorType](arkts-errortype-e.md) | 枚举，错误类型（用于区分错误发生阶段）。 |

