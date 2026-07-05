# AudioCapturerOptions

Describes audio capturer configurations.

**Since:** 8

**System capability:** SystemCapability.Multimedia.Audio.Capturer

## Modules to Import

```TypeScript
import { audio } from '@ohos.multimedia.audio';
```

## preferredInputDevice

```TypeScript
preferredInputDevice?: AudioDeviceDescriptor
```

Perfered input device for this audio capturer. The preferredInputDevice must be an input device, and the source type in {@link captureInfo} must be {@link SourceType#SOURCE_TYPE_RECONGITION} or {@link SourceType#SOURCE_TYPE_VOICE_TRANSCRIPTION}, otherwise this parameter will be ignored. If the user does not specify a device, the system automatically selects the recording device for the audio capturer. When the user specifies a prefer device to create a recongition or transcription recording, 1) If the prefer device is online, the current audiocapturer may use the preferred device for recording; if the prefer device goes offline during operation, the system automatically selects a recording device. 2) If the prefer device is offline, the system automatically selects a recording device; if the prefer device comes online during operation, it may switch to the prefer device for recording. Users can query the device which is in use by {@link AudioCapturer#getCurrentAudioCapturerChangeInfo}.

**Type:** AudioDeviceDescriptor

**Since:** 22

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

