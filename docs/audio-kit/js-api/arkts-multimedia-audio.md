# @ohos.multimedia.audio

The module provides basic audio control capabilities, including volume adjustment, device management, data capture,
and rendering.

This module provides the following common audio-related functions:

- [AudioManager](arkts-multimedia-audio.md): audio manager.
- [AudioRenderer](arkts-multimedia-audio.md): audio renderer, used to play Pulse Code Modulation (PCM) audio
data.
- [AudioCapturer](arkts-multimedia-audio.md): audio capturer, used to record PCM audio data.

**Since:** 7

**System capability:** 
- API version 12 and later: SystemCapability.Multimedia.Audio.Core

## Modules to Import

```TypeScript
import { audio } from '@kit.AudioKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createaudiocapturer-1) | Creates an AudioCapturer instance. This API uses an asynchronous callback to return the result. |
| [createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createaudiocapturer-2) | Creates an AudioCapturer instance. This API uses a promise to return the result. |
| [createAudioLoopback](arkts-audio-createaudioloopback-f.md#createaudioloopback-1) | Creates an <b>AudioLoopback</b> instance, which provides low-latency in-earmonitoring using a fast capturer and renderer. |
| [createAudioRenderer](arkts-audio-createaudiorenderer-f.md#createaudiorenderer-1) | Obtains an {@link AudioRenderer} instance.This method uses a promise to return the renderer instance.The AudioRenderer instance is used to play streaming audio data.When using AudioRenderer apis, there are many instructions for applicationto achieve better performance and lower power consumption:In music or audiobook background playback situation, you can have low powerconsumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.Application developer should also be careful when app goes to background, please check if your audio playbackis still needed, see **Audio Resources** in best practices document.And avoiding to send silence audio data continuously to waste system resources, otherwise system will takecontrol measures when this behavior is detected, see **Audio Playback** in best practices document.If you want to use AudioRenderer api to implement a music playback application, there are also many interactivescenes to consider, see **Developing an Audio Application** in best practices document. |
| [createAudioRenderer](arkts-audio-createaudiorenderer-f.md#createaudiorenderer-2) | Obtains an {@link AudioRenderer} instance.This method uses a promise to return the renderer instance.The AudioRenderer instance is used to play streaming audio data.When using AudioRenderer apis, there are many instructions for applicationto achieve better performance and lower power consumption:In music or audiobook background playback situation, you can have low powerconsumption by following this best practices document **Low-Power Rules in Music Playback Scenarios**.And for navigation situation, you can follow **Low-Power Rules in Navigation and Positioning Scenarios**.Application developer should also be careful when app goes to background, please check if your audio playbackis still needed, see **Audio Resources** in best practices document.And avoiding to send silence audio data continuously to waste system resources, otherwise system will takecontrol measures when this behavior is detected, see **Audio Playback** in best practices document.If you want to use AudioRenderer api to implement a music playback application, there are also many interactivescenes to consider, see **Developing an Audio Application** in best practices document. |
| [getAudioManager](arkts-audio-getaudiomanager-f.md#getaudiomanager-1) | Obtains an AudioManager instance. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createAsrProcessingController](arkts-audio-createasrprocessingcontroller-f-sys.md#createasrprocessingcontroller-1) | Create ASR processing controller on one audio capturer. |
| [createGlobalAudioLoopback](arkts-audio-createglobalaudioloopback-f-sys.md#createglobalaudioloopback-1) | Creates a global audio loopback instance, which provides low-latency in-ear monitor function.Hardware audio loopback can only be created in supported platform, application can use{@link AudioStreamManager#isAudioLoopbackSupported} to check first.There should be only one main instance that own the global loopback in the system, the othersare controllers. A controller can manage the global loopback by sending commands to the maininstance, and listen status change from it. |
| [createMicInAudioCapturer](arkts-audio-createmicinaudiocapturer-f-sys.md#createmicinaudiocapturer-1) | Obtains a special {@link #AudioCapturer} instance. This method uses a promise to return the capturer instance.This capture can be used to record both Mic-In audio data and echo reference signal, for application toprocess algorithm.Mic-In audio data and echo reference signal will be put in one buffer or multiple buffers according toconfiguration set by application.Capturer is also not allowed to be created when application is in background. |
| [createTonePlayer](arkts-audio-createtoneplayer-f-sys.md#createtoneplayer-1) | Obtains a {@link TonePlayer} instance. This method uses an asynchronous callback to return the renderer instance. |
| [createTonePlayer](arkts-audio-createtoneplayer-f-sys.md#createtoneplayer-2) | Obtains a {@link TonePlayer} instance. This method uses a promise to return the renderer instance. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AudioCapturer](arkts-audio-audiocapturer-i.md) | This interface provides APIs for audio capture.Before calling any API in AudioCapturer, you must use[createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createaudiocapturer-1)to create an AudioCapturer instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 8. |
| [AudioCapturerChangeInfo](arkts-audio-audiocapturerchangeinfo-i.md) | Describes the audio capturer change event. |
| [AudioCapturerInfo](arkts-audio-audiocapturerinfo-i.md) | Describes audio capturer information. |
| [AudioCapturerOptions](arkts-audio-audiocaptureroptions-i.md) | Describes audio capturer configurations. |
| [AudioDebuggingManager](arkts-audio-audiodebuggingmanager-i.md) | Provides audio debug management capabilities. |
| [AudioDeviceDescriptor](arkts-audio-audiodevicedescriptor-i.md) | Describes an audio device. |
| [AudioDeviceEnhanceManager](arkts-audio-audiodeviceenhancemanager-i.md) | Provides enhanced audio device management capabilities. |
| [AudioDevicePair](arkts-audio-audiodevicepair-i.md) | Describes an audio device pair including both input and output devices. |
| [AudioInterrupt](arkts-audio-audiointerrupt-i.md) | Describes input parameters of audio interruption events. |
| [AudioLoopback](arkts-audio-audioloopback-i.md) | This interface provides APIs for audio monitoring.Before calling any API in AudioLoopback, you must use[audio.createAudioLoopback](arkts-audio-createaudioloopback-f.md#createaudioloopback-1) tocreate an AudioLoopback instance.When audio loopback is enabled, the system creates a low-latency renderer and capturer to implement low-latency in-ear monitoring. The audio captured is routed back to the renderer through an internal path. The renderer followsthe audio focus strategy for [STREAM_USAGE_MUSIC](arkts-audio-streamusage-e.md), whereas thecapturer follows the strategy for [SOURCE_TYPE_MIC](arkts-audio-sourcetype-e.md).The system automatically chooses the input and output devices. If these devices do not support low latency, audioloopback does not work. If another audio stream takes over the audio focus or if the input or output device changesto the one that does not support low latency, the system disables audio loopback automatically.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 20. |
| [AudioManager](arkts-audio-audiomanager-i.md) | This interface implements audio volume and device management.Before calling any API in AudioManager, you must use[getAudioManager](arkts-audio-getaudiomanager-f.md#getaudiomanager-1) to obtain an AudioManager instance. |
| [AudioPlaybackCaptureConfig](arkts-audio-audioplaybackcaptureconfig-i.md) | Defines configuration for capturing played audio. |
| [AudioRecordingManager](arkts-audio-audiorecordingmanager-i.md) | Provides recording strategy management, including collaborative recordingand recording control capabilities. |
| [AudioRenderer](arkts-audio-audiorenderer-i.md) | This interface provides APIs for audio rendering.Before calling any API in AudioRenderer, you must use[createAudioRenderer](arkts-audio-createaudiorenderer-f.md#createaudiorenderer-1)to create an AudioRenderer instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 8. |
| [AudioRendererChangeInfo](arkts-audio-audiorendererchangeinfo-i.md) | Describes the audio renderer change event. |
| [AudioRendererInfo](arkts-audio-audiorendererinfo-i.md) | Describes audio renderer information. |
| [AudioRendererOptions](arkts-audio-audiorendereroptions-i.md) | Describes audio renderer configurations. |
| [AudioRoutingManager](arkts-audio-audioroutingmanager-i.md) | This interface implements audio routing management.Before calling any API in AudioRoutingManager, you must use[getRoutingManager](arkts-audio-audiomanager-i.md#getroutingmanager-1) to obtain anAudioRoutingManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [AudioSessionDeactivatedEvent](arkts-audio-audiosessiondeactivatedevent-i.md) | Describes the event indicating that an audio session is deactivated. |
| [AudioSessionManager](arkts-audio-audiosessionmanager-i.md) | This interface implements audio session management.Before calling any API in AudioSessionManager, you must use[getSessionManager](arkts-audio-audiomanager-i.md#getsessionmanager-1) to obtain anAudioSessionManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 12. |
| [AudioSessionStateChangedEvent](arkts-audio-audiosessionstatechangedevent-i.md) | Describes the event indicating that the audio session state changes. |
| [AudioSessionStrategy](arkts-audio-audiosessionstrategy-i.md) | Describes an audio session strategy. |
| [AudioSpatializationManager](arkts-audio-audiospatializationmanager-i.md) | Implements audio spatialization management. |
| [AudioStreamDeviceChangeInfo](arkts-audio-audiostreamdevicechangeinfo-i.md) | Describes the event received by the application when the audio stream device is changed. |
| [AudioStreamInfo](arkts-audio-audiostreaminfo-i.md) | Describes audio stream information. |
| [AudioStreamManager](arkts-audio-audiostreammanager-i.md) | This interface implements audio stream management.Before calling any API in AudioStreamManager, you must use[getStreamManager](arkts-audio-audiomanager-i.md#getstreammanager-1) to obtain anAudioStreamManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [AudioTimestampInfo](arkts-audio-audiotimestampinfo-i.md) | Describes the information about the audio stream timestamp and the current data frame position. |
| [AudioVolumeGroupManager](arkts-audio-audiovolumegroupmanager-i.md) | This interface implements volume management for an audio group.Before calling any API in AudioVolumeGroupManager, you must use[getVolumeGroupManager](arkts-audio-audiovolumemanager-i.md#getvolumegroupmanager-1)to obtain an AudioVolumeGroupManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [AudioVolumeManager](arkts-audio-audiovolumemanager-i.md) | This interface implements audio volume management.Before calling any API in AudioVolumeManager, you must use[getVolumeManager](arkts-audio-audiomanager-i.md#getvolumemanager-1) to obtain anAudioVolumeManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [CaptureFilterOptions](arkts-audio-capturefilteroptions-i.md) | Defines the options for filtering the played audio streams to be recorded. |
| [CurrentInputDeviceChangedEvent](arkts-audio-currentinputdevicechangedevent-i.md) | Describes the event indicating that the input device changes. |
| [CurrentOutputDeviceChangedEvent](arkts-audio-currentoutputdevicechangedevent-i.md) | Describes the event indicating that the output device changes. |
| [DeviceBlockStatusInfo](arkts-audio-deviceblockstatusinfo-i.md) | Describes the audio device blocked status and device information. |
| [DeviceChangeAction](arkts-audio-devicechangeaction-i.md) | Describes the device connection status and device information. |
| [InterruptAction](arkts-audio-interruptaction-i.md) | Describes the callback invoked for audio interruption or focus gain events.When the audio of an applicationis interrupted by another application, the callback is invoked to notify the former application. |
| [InterruptEvent](arkts-audio-interruptevent-i.md) | Describes the interruption event received by the application when the audio is interrupted. |
| [MicStateChangeEvent](arkts-audio-micstatechangeevent-i.md) | Describes the event received by the application when the microphone mute status is changed. |
| [StreamVolumeEvent](arkts-audio-streamvolumeevent-i.md) | Describes the event received by the application when the audio stream volume is changed. |
| [VolumeEvent](arkts-audio-volumeevent-i.md) | Describes the event received by the application when the volume is changed. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ActiveStreamVolumeInfo](arkts-audio-activestreamvolumeinfo-i-sys.md) | Volume information for active audio streams. |
| [AppIdInfo](arkts-audio-appidinfo-i-sys.md) | Describes app ID information. |
| [AsrProcessingController](arkts-audio-asrprocessingcontroller-i-sys.md) | ASR processing controller. |
| [AudioCapturer](arkts-audio-audiocapturer-i-sys.md) | This interface provides APIs for audio capture.Before calling any API in AudioCapturer, you must use[createAudioCapturer](arkts-audio-createaudiocapturer-f.md#createaudiocapturer-1)to create an AudioCapturer instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 8. |
| [AudioCapturerChangeInfo](arkts-audio-audiocapturerchangeinfo-i-sys.md) | Describes the audio capturer change event. |
| [AudioCapturerFilter](arkts-audio-audiocapturerfilter-i-sys.md) | Describe audio capturer filter. |
| [AudioCapturerMicInConfig](arkts-audio-audiocapturermicinconfig-i-sys.md) | Describes audio capturer configuration that can capturemicrophone input (mic-in) audio data before any processing. |
| [AudioCapturerMicInData](arkts-audio-audiocapturermicindata-i-sys.md) | Describes audio capturer data that contains processed audio data andmicrophone input (mic-in) audio data before any processing. |
| [AudioCapturerOptions](arkts-audio-audiocaptureroptions-i-sys.md) | Describes audio capturer configurations. |
| [AudioCollaborativeManager](arkts-audio-audiocollaborativemanager-i-sys.md) | Implements audio collaborative management. |
| [AudioDeviceDescriptor](arkts-audio-audiodevicedescriptor-i-sys.md) | Describes an audio device. |
| [AudioDeviceEnhanceManager](arkts-audio-audiodeviceenhancemanager-i-sys.md) | Provides enhanced audio device management capabilities. |
| [AudioEffectManager](arkts-audio-audioeffectmanager-i-sys.md) | Implements audio effect management. |
| [AudioEffectProperty](arkts-audio-audioeffectproperty-i-sys.md) | Describes an audio effect property. |
| [AudioHRTFAnonymousDescriptor](arkts-audio-audiohrtfanonymousdescriptor-i-sys.md) | Anonymous personalzied HRTF file descriptor for cross-process transfer. |
| [AudioManager](arkts-audio-audiomanager-i-sys.md) | This interface implements audio volume and device management.Before calling any API in AudioManager, you must use[getAudioManager](arkts-audio-getaudiomanager-f.md#getaudiomanager-1) to obtain an AudioManager instance. |
| [AudioPersonalizedSpatialEnabledChangeForAnyDevice](arkts-audio-audiopersonalizedspatialenabledchangeforanydevice-i-sys.md) | This interface is used to notify the listener of personalized spatialization enabledstate change of any device. |
| [AudioRecordingManager](arkts-audio-audiorecordingmanager-i-sys.md) | Provides recording strategy management, including collaborative recordingand recording control capabilities. |
| [AudioRenderer](arkts-audio-audiorenderer-i-sys.md) | This interface provides APIs for audio rendering.Before calling any API in AudioRenderer, you must use[createAudioRenderer](arkts-audio-createaudiorenderer-f.md#createaudiorenderer-1)to create an AudioRenderer instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 8. |
| [AudioRendererChangeInfo](arkts-audio-audiorendererchangeinfo-i-sys.md) | Describes the audio renderer change event. |
| [AudioRendererFilter](arkts-audio-audiorendererfilter-i-sys.md) | Describes audio renderer filter. |
| [AudioRendererOptions](arkts-audio-audiorendereroptions-i-sys.md) | Describes audio renderer configurations. |
| [AudioRoutingManager](arkts-audio-audioroutingmanager-i-sys.md) | This interface implements audio routing management.Before calling any API in AudioRoutingManager, you must use[getRoutingManager](arkts-audio-audiomanager-i.md#getroutingmanager-1) to obtain anAudioRoutingManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [AudioSpatialDeviceState](arkts-audio-audiospatialdevicestate-i-sys.md) | Describes spatial device state. |
| [AudioSpatialEnabledStateForDevice](arkts-audio-audiospatialenabledstatefordevice-i-sys.md) | This interface is used to notify the listener of any device Spatialization or Head Tracking enableor Adaptive Spatial Rendering state change. |
| [AudioSpatializationManager](arkts-audio-audiospatializationmanager-i-sys.md) | Implements audio spatialization management. |
| [AudioVolumeGroupManager](arkts-audio-audiovolumegroupmanager-i-sys.md) | This interface implements volume management for an audio group.Before calling any API in AudioVolumeGroupManager, you must use[getVolumeGroupManager](arkts-audio-audiovolumemanager-i.md#getvolumegroupmanager-1)to obtain an AudioVolumeGroupManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [AudioVolumeManager](arkts-audio-audiovolumemanager-i-sys.md) | This interface implements audio volume management.Before calling any API in AudioVolumeManager, you must use[getVolumeManager](arkts-audio-audiomanager-i.md#getvolumemanager-1) to obtain anAudioVolumeManager instance.&gt; **NOTE**&gt;&gt; - The initial APIs of this interface are supported since API version 9. |
| [InterruptResult](arkts-audio-interruptresult-i-sys.md) | Describes audio interrupt operation results. |
| [SoundCardInfo](arkts-audio-soundcardinfo-i-sys.md) | Describes sound card information. |
| [SystemRecordControllerChangeInfo](arkts-audio-systemrecordcontrollerchangeinfo-i-sys.md) | Defines the information carried when the system recording controller state changes.It includes the enable status, application UID and expected audio source type. |
| [SystemRecordControllerConfig](arkts-audio-systemrecordcontrollerconfig-i.md) | Defines the configuration for the system recording controller panel. |
| [SystemVolumeFilter](arkts-audio-systemvolumefilter-i-sys.md) | Describes the system volume filter. |
| [TonePlayer](arkts-audio-toneplayer-i-sys.md) | Provides APIs for tone playing. |
| [VolumeEvent](arkts-audio-volumeevent-i-sys.md) | Describes the event received by the application when the volume is changed. |
| [VolumeGroupInfo](arkts-audio-volumegroupinfo-i-sys.md) | Describes an audio volume group. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ActiveDeviceType](arkts-audio-activedevicetype-e.md) | Enumerates the active device types. |
| [AudioChannel](arkts-audio-audiochannel-e.md) | Enumerates the audio channels. |
| [AudioChannelLayout](arkts-audio-audiochannellayout-e.md) | Audio AudioChannel Layout.A 64-bit integer indicates that the appearance and order of the speakers for recording or playback. |
| [AudioConcurrencyMode](arkts-audio-audioconcurrencymode-e.md) | Enumerates the audio concurrency modes. |
| [AudioDataCallbackResult](arkts-audio-audiodatacallbackresult-e.md) | Enumerates the audio data callback results. |
| [AudioEffectMode](arkts-audio-audioeffectmode-e.md) | Enumerates the audio effect modes. |
| [AudioEncodingType](arkts-audio-audioencodingtype-e.md) | Enumerates the audio encoding types. |
| [AudioErrors](arkts-audio-audioerrors-e.md) | Enumerates the error codes available for audio management. |
| [AudioLatencyType](arkts-audio-audiolatencytype-e.md) | Enumerates the audio latency types. |
| [AudioLoopbackEqualizerPreset](arkts-audio-audioloopbackequalizerpreset-e.md) | Enumerates the equalizer types of audio loopback. |
| [AudioLoopbackMode](arkts-audio-audioloopbackmode-e.md) | Enumerates the audio loopback modes. |
| [AudioLoopbackReverbPreset](arkts-audio-audioloopbackreverbpreset-e.md) | Enumerates the reverb modes of audio loopback. |
| [AudioLoopbackStatus](arkts-audio-audioloopbackstatus-e.md) | Enumerates the audio loopback statuses. |
| [AudioPlaybackCaptureMode](arkts-audio-audioplaybackcapturemode-e.md) | Defines mode for playback capture, each mode means different target streams to capture. |
| [AudioPrivacyType](arkts-audio-audioprivacytype-e.md) | Enumerates whether an audio stream can be recorded by other applications. |
| [AudioRendererRate](arkts-audio-audiorendererrate-e.md) | Enumerates the audio renderer rates. |
| [AudioRingMode](arkts-audio-audioringmode-e.md) | Enumerates the audio ring modes. |
| [AudioSampleFormat](arkts-audio-audiosampleformat-e.md) | Enumerates the audio sample formats. |
| [AudioSamplingRate](arkts-audio-audiosamplingrate-e.md) | Enumerates the audio sampling rates. The sampling rates supported vary according to the device in use. |
| [AudioScene](arkts-audio-audioscene-e.md) | Enumerates the audio scenes. |
| [AudioSessionBehaviorFlags](arkts-audio-audiosessionbehaviorflags-e.md) | Enumerates audio session behavior flags. |
| [AudioSessionDeactivatedReason](arkts-audio-audiosessiondeactivatedreason-e.md) | Enumerates the reasons for deactivating an audio session. |
| [AudioSessionScene](arkts-audio-audiosessionscene-e.md) | Enumerates the audio session scenes. |
| [AudioSessionStateChangeHint](arkts-audio-audiosessionstatechangehint-e.md) | Enumerates the hints for audio session state changes.The hint is obtained when an[AudioSessionStateChangedEvent](arkts-audio-audiosessionstatechangedevent-i.md) is received.The hint specifies the action (such as audio pause or volume adjustment) to take on the audio session based on thefocus strategy.For details, see [Audio Session Management](../../../../media/audio/audio-session-management.md). |
| [AudioState](arkts-audio-audiostate-e.md) | Enumerates the audio states. |
| [AudioStreamDeviceChangeReason](arkts-audio-audiostreamdevicechangereason-e.md) | Enumerates the reasons for audio stream device changes. |
| [AudioVolumeMode](arkts-audio-audiovolumemode-e.md) | Enumerates the audio volume modes. |
| [AudioVolumeType](arkts-audio-audiovolumetype-e.md) | Enumerates the audio volume types. |
| [BluetoothAndNearlinkPreferredRecordCategory](arkts-audio-bluetoothandnearlinkpreferredrecordcategory-e.md) | Enumerates the preferred device categories available for recording with Bluetooth or NearLink. |
| [ChannelBlendMode](arkts-audio-channelblendmode-e.md) | Enumerates the audio channel blending modes. |
| [CommunicationDeviceType](arkts-audio-communicationdevicetype-e.md) | Enumerates the available device types for communication. |
| [ContentType](arkts-audio-contenttype-e.md) | Enumerates the audio content types. |
| [DeviceBlockStatus](arkts-audio-deviceblockstatus-e.md) | Enumerates the blocked statuses of audio devices. |
| [DeviceChangeType](arkts-audio-devicechangetype-e.md) | Enumerates the device connection statuses. |
| [DeviceFlag](arkts-audio-deviceflag-e.md) | Enumerates the audio device flags. |
| [DeviceRole](arkts-audio-devicerole-e.md) | Enumerates the device roles. |
| [DeviceType](arkts-audio-devicetype-e.md) | Enumerates the device types. |
| [DeviceUsage](arkts-audio-deviceusage-e.md) | Enumerates the audio device types by usage. |
| [InterruptActionType](arkts-audio-interruptactiontype-e.md) | Enumerates the returned event types for audio interruption events. |
| [InterruptForceType](arkts-audio-interruptforcetype-e.md) | Enumerates the types of force that causes audio interruption.The force type is obtained when an [InterruptEvent](arkts-audio-interruptevent-i.md) is received.This type specifies whether audio interruption is forcibly performed by the system. The operation information (suchas audio pause or stop) can be obtained through [InterruptHint](arkts-audio-interrupthint-e.md). For details about theaudio interruption policy, see [Introduction to Audio Focus](../../../../media/audio/audio-playback-concurrency.md). |
| [InterruptHint](arkts-audio-interrupthint-e.md) | Enumerates the hints provided along with audio interruption.The hint is obtained when an [InterruptEvent](arkts-audio-interruptevent-i.md) is received.The hint specifies the operation (such as audio pause or volume adjustment) to be performed on audio streams basedon the focus strategy.You can determine whether the operation is forcibly performed by the system based on[InterruptForceType](arkts-audio-interruptforcetype-e.md) in **InterruptEvent**. For details, see[Introduction to Audio Focus](../../../../media/audio/audio-playback-concurrency.md). |
| [InterruptMode](arkts-audio-interruptmode-e.md) | Enumerates the audio interruption modes. |
| [InterruptType](arkts-audio-interrupttype-e.md) | Enumerates the audio interruption types. |
| [NoiseReductionMode](arkts-audio-noisereductionmode-e.md) | Enumerates the noise reduction modes. |
| [OutputDeviceChangeRecommendedAction](arkts-audio-outputdevicechangerecommendedaction-e.md) | Enumerates the recommended actions to take after an output device changes.Common scenario example: switching between a headset and a loudspeaker device. Upon switching from the loudspeakerdevice to the headset upon wearing, the system suggests continuing playback and prompts that the application doesnot need to pause. Upon transitioning from the headset to the loudspeaker device upon removal, the system suggestssuspending playback. |
| [PlaybackCaptureStartState](arkts-audio-playbackcapturestartstate-e.md) | Defines the playback capture start state, which is returned asynchronouslyafter calling {@link AudioCapturer.requestPlaybackCaptureStart} function. |
| [SourceType](arkts-audio-sourcetype-e.md) | Enumerates the types of audio streams captured. |
| [StreamUsage](arkts-audio-streamusage-e.md) | Enumerates the types of audio streams played. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AsrAecMode](arkts-audio-asraecmode-e-sys.md) | ASR AEC mode. |
| [AsrNoiseSuppressionMode](arkts-audio-asrnoisesuppressionmode-e-sys.md) | ASR noise suppression mode. |
| [AsrVoiceControlMode](arkts-audio-asrvoicecontrolmode-e-sys.md) | ASR voice control mode. |
| [AsrVoiceMuteMode](arkts-audio-asrvoicemutemode-e-sys.md) | ASR voice mute mode. |
| [AsrWhisperDetectionMode](arkts-audio-asrwhisperdetectionmode-e-sys.md) | ASR whisper detection mode. |
| [AudioDevcieSelectStrategy](arkts-audio-audiodevcieselectstrategy-e-sys.md) | Enumerates the device select strategy. |
| [AudioPlaybackCaptureMode](arkts-audio-audioplaybackcapturemode-e-sys.md) | Defines mode for playback capture, each mode means different target streams to capture. |
| [AudioSeparationVolumeType](arkts-audio-audioseparationvolumetype-e-sys.md) | Volume type for audio separation effect. |
| [AudioSpatialDeviceType](arkts-audio-audiospatialdevicetype-e-sys.md) | Describes a spatial device type group. |
| [AudioSpatializationSceneType](arkts-audio-audiospatializationscenetype-e-sys.md) | Describes a spatialization scene type group. |
| [AudioVolumeType](arkts-audio-audiovolumetype-e-sys.md) | Enumerates the audio volume types. |
| [ConnectType](arkts-audio-connecttype-e-sys.md) | Connect type for device. |
| [DeviceFlag](arkts-audio-deviceflag-e-sys.md) | Enumerates the audio device flags. |
| [DeviceType](arkts-audio-devicetype-e-sys.md) | Enumerates the device types. |
| [EffectFlag](arkts-audio-effectflag-e-sys.md) | Enumerates audio effect flags. |
| [InterruptRequestResultType](arkts-audio-interruptrequestresulttype-e-sys.md) | Enumerates audio interrupt request result type. |
| [InterruptRequestType](arkts-audio-interruptrequesttype-e-sys.md) | Enumerates the audio interrupt request type. |
| [PolicyType](arkts-audio-policytype-e-sys.md) | Enumerates type. |
| [RenderTarget](arkts-audio-rendertarget-e-sys.md) | Audio render target. |
| [SourceType](arkts-audio-sourcetype-e-sys.md) | Enumerates the types of audio streams captured. |
| [SpatialAudioSourceType](arkts-audio-spatialaudiosourcetype-e-sys.md) | Enumerates the spatial audio source type. |
| [StreamUsage](arkts-audio-streamusage-e-sys.md) | Enumerates the types of audio streams played. |
| [ToneType](arkts-audio-tonetype-e-sys.md) | Enumerates tone types for player. |
| [VolumeAdjustType](arkts-audio-volumeadjusttype-e-sys.md) | Enumerates volume adjustment types. |
| [VolumeFlag](arkts-audio-volumeflag-e-sys.md) | Enumerates volume related operations.Flags should be powers of 2! |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AudioCapturerChangeInfoArray](arkts-audio-audiocapturerchangeinfoarray-t.md) | Defines an AudioCapturerChangeInfo array, which is read-only. |
| [AudioDeviceDescriptors](arkts-audio-audiodevicedescriptors-t.md) | Defines an [AudioDeviceDescriptor](arkts-audio-audiodevicedescriptor-i.md) array, which is read-only. |
| [AudioEffectInfoArray](arkts-audio-audioeffectinfoarray-t.md) | Defines an array that contains the audio effect mode corresponding to a specific audio content type (specified by**ContentType**) and audio stream usage (specified by **StreamUsage**). The[AudioEffectMode](arkts-audio-audioeffectmode-e.md) array is read-only. |
| [AudioRendererChangeInfoArray](arkts-audio-audiorendererchangeinfoarray-t.md) | Defines an AudioRendererChangeInfo array, which is read-only. |
| [AudioRendererWriteDataCallback](arkts-audio-audiorendererwritedatacallback-t.md) | Defines the callback function used to write data to the audio renderer. Once the callback function finishes itsexecution, the audio service queues the data pointed to by **data** for playback. Therefore, do not change the dataoutside the callback. It is crucial to fill **data** with the exact length of data designated for playback;otherwise, noises may occur during playback. |
| [DeviceTypeArray](arkts-audio-devicetypearray-t.md) | Defines the device type array. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [ActiveStreamsVolumeInfoArray](arkts-audio-activestreamsvolumeinfoarray-t-sys.md) | ActiveStreamVolumeInfo array. |
| [StreamUsageArray](arkts-audio-streamusagearray-t-sys.md) | Array of StreamUsages. |
| [VolumeGroupInfos](arkts-audio-volumegroupinfos-t-sys.md) | Array of VolumeGroupInfos, which is read-only. |
<!--DelEnd-->

### Constants

| Name | Description |
| --- | --- |
| [DEFAULT_INTERRUPT_GROUP_ID](arkts-audio-audio-con.md#default_interrupt_group_id) | Define default interrupt group id for audio. |
| [DEFAULT_VOLUME_GROUP_ID](arkts-audio-audio-con.md#default_volume_group_id) | Define default volume group id for audio. |

<!--Del-->
### Constants（系统接口）

| Name | Description |
| --- | --- |
| [LOCAL_NETWORK_ID](arkts-audio-audio-con-sys.md#local_network_id) | Define local device network id for audio. |
<!--DelEnd-->

