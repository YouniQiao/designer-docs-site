# native_audio_common.h

## Overview

Declare the audio common base data structure.Defines the types of public return values for audio interfaces.

**Library**: libohaudio.so

**System capability**: SystemCapability.Multimedia.Audio.Core

**Since**: 12

**Related module**: [OHAudio](capi-ohaudio.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_AudioCommon_Result](#oh_audiocommon_result) | OH_AudioCommon_Result | Define the result of the function execution. |
| [OH_AudioScene](#oh_audioscene) | OH_AudioScene | Defines the audio scene. |
| [OH_AudioRingerMode](#oh_audioringermode) | OH_AudioRingerMode | Defines the ringer mode. |

## Enum type description

### OH_AudioCommon_Result

```c
enum OH_AudioCommon_Result
```

**Description**

Define the result of the function execution.

**Since**: 12

| Enum item | Description |
| -- | -- |
| AUDIOCOMMON_RESULT_SUCCESS = 0 | The call was successful. |
| AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM = 6800101 | This means that the input parameter is invalid. |
| AUDIOCOMMON_RESULT_ERROR_NO_MEMORY = 6800102 | This means there is no memory left. |
| AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE = 6800103 | Execution status exception. |
| AUDIOCOMMON_RESULT_ERROR_UNSUPPORTED = 6800104 | This means the operation is unsupported. |
| AUDIOCOMMON_RESULT_ERROR_TIMEOUT = 6800105 | This means the operation timed out. |
| AUDIOCOMMON_RESULT_ERROR_STREAM_LIMIT = 6800201 | This means the stream limit is reached. |
| AUDIOCOMMON_RESULT_ERROR_SYSTEM = 6800301 | A system error has occurred. |

### OH_AudioScene

```c
enum OH_AudioScene
```

**Description**

Defines the audio scene.

**Since**: 12

| Enum item | Description |
| -- | -- |
| AUDIO_SCENE_DEFAULT = 0 |  |
| AUDIO_SCENE_RINGING = 1 |  |
| AUDIO_SCENE_PHONE_CALL = 2 |  |
| AUDIO_SCENE_VOICE_CHAT = 3 |  |

### OH_AudioRingerMode

```c
enum OH_AudioRingerMode
```

**Description**

Defines the ringer mode.

**Since**: 20

| Enum item | Description |
| -- | -- |
| AUDIO_RINGER_MODE_SILENT = 0 |  |
| AUDIO_RINGER_MODE_VIBRATE = 1 |  |
| AUDIO_RINGER_MODE_NORMAL = 2 |  |


