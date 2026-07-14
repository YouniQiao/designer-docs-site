# soundPool

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [ErrorInfo](arkts-media-errorinfo-i.md) | Describes the error information. |
| [PlayParameters](arkts-media-playparameters-i.md) | Describes the playback parameters of the sound pool. These parameters are used to control the playback volume, number of loops, and priority. |
| [SoundPool](arkts-media-soundpool-i.md) | Implements a sound pool that provides APIs for loading, unloading, playing, and stopping playing system sounds, setting the volume, and setting the number of loops. Before using these APIs, you must call [media.createSoundPool](../../../../reference/apis-media-kit/arkts-apis-media-f.md) to create a SoundPool instance. &gt; **NOTE** &gt; &gt; - When using the SoundPool instance, you are advised to register the following callbacks to proactively obtain &gt; status changes: &gt; &gt; - [on('loadComplete')](arkts-media-soundpool-i.md#on-1): listens for the &gt; event indicating that the resource loading is finished. You are advised to listen for this callback to ensure that &gt; the audio is played after being loaded. &gt; &gt; - &gt; [on('playFinishedWithStreamId')](arkts-media-soundpool-i.md#on-2): &gt; listens for the event indicating that the playback is finished and returns the stream ID of the audio that finishes &gt; playing. &gt; &gt; - [on('playFinished')](arkts-media-soundpool-i.md#on-2): listens &gt; for the event indicating that the playback is finished. &gt; &gt; - [on('error')](arkts-media-soundpool-i.md#on-4): listens for error events. &gt; &gt; - [on('errorOccurred')](arkts-media-soundpool-i.md#on-5): listens for &gt; error events and returns [errorInfo](arkts-media-errorinfo-i.md). &gt; &gt; - Currently, SoundPool does not support audio focus policies such as background playback and audio interruption, or &gt; skipping the silent frames at the beginning and end of an audio file. For details about low-latency playback using &gt; SoundPool, see &gt; [Using SoundPool to Play Short Sounds (ArkTS)](../../../../media/media/using-soundpool-for-playback.md). |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [PlayParameters](arkts-media-playparameters-i-sys.md) | Describes the playback parameters of the sound pool. These parameters are used to control the playback volume, number of loops, and priority. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ErrorType](arkts-media-errortype-e.md) | Enumerates the error types (used to distinguish error stages). |

