# native_audio_device_enhance_manager.h

## Overview

Declares audio device enhancement manager related interfaces.The interfaces in this file are used for obtaining the OH_AudioDeviceEnhanceManager handle,selecting the input or output devices of your application itself,as well as other enhanced functions related to audio devices or routing.

**Library**: libohaudio.so

**System capability**: SystemCapability.Multimedia.Audio.Core

**Since**: 26.0.0

**Related module**: [OHAudio](capi-ohaudio.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) | OH_AudioDeviceEnhanceManager | Defines the handle type of the audio device enhancement manager,which is used for enhanced audio device management functions. |

### Function

| Name | Description |
| -- | -- |
| [OH_AudioCommon_Result OH_AudioManager_GetAudioDeviceEnhanceManager(OH_AudioDeviceEnhanceManager **audioDeviceEnhanceManager)](#oh_audiomanager_getaudiodeviceenhancemanager) | Obtains the audio device enhancement manager handle.This handle is used as the first parameter when calling enhanced audio device management functions.The functional APIs of this manager are only available on specific devices.Your application can first call [OH_AudioDeviceEnhanceManager_IsEnhancedRoutingSupported](capi-native-audio-device-enhance-manager-h.md#oh_audiodeviceenhancemanager_isenhancedroutingsupported) to checkif the system supports them before using. |
| [OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_IsEnhancedRoutingSupported(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, bool *supported)](#oh_audiodeviceenhancemanager_isenhancedroutingsupported) | Queries whether the system supports the enhanced routing functions provided by this manager.The enhanced routing functions support selecting input and output devices for the application or audio streams.You are advised to call this API to check system support before using the enhanced routing functions.Even for the same type of host device, some models may support these functions while others may not dueto hardware limitations. If the system does not support these enhanced routing functions, calling them willhave no effect, and the system will select default input/output devices for the application or audio streams instead. |
| [OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectOutputDevice(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioDeviceDescriptor *deviceDescriptor)](#oh_audiodeviceenhancemanager_selectoutputdevice) | Sets the preferred output device for the application.This configuration applies to all playback streams created by the application, unless a specificoutput device is designated for an individual stream. When the application implements its own UXfor output device selection, it can obtain the list of available output devices through{@link OH_AudioRoutingManager_GetAvailableDevices}, and use the{@link OH_AudioRoutingManager_GetPreferredOutputDevice} API to obtain the currently selected outputdevice. The application can register a callback via{@link OH_AudioDeviceEnhanceManager_RegisterCurrentOutputDeviceChangeCallback} to listen for changes tothe actual output device. The selection becomes invalid when the application exits or the selecteddevice goes offline. After the application restarts or the device comes back online, the selectionmust be re-issued to take effect. If the system does not support this function, it will select adefault output device for the application. |
| [OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectInputDevice(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioDeviceDescriptor *deviceDescriptor)](#oh_audiodeviceenhancemanager_selectinputdevice) | Sets the preferred input device for the application.This setting applies to all recording streams created by the application, unless a specific input deviceis designated for an individual stream. When the application implements its own UX for input device selection,it can obtain the list of available input devices through {@link OH_AudioRoutingManager_GetAvailableDevices},and use the {@link OH_AudioRoutingManager_GetPreferredInputDevice} API to obtain the currently selected input device.Your application can register a callback via{@link OH_AudioDeviceEnhanceManager_RegisterCurrentInputDeviceChangeCallback} to listen for changes to the actualinput device. The selection becomes invalid when the application exits or the selected device goes offline.After the application restarts or the device comes back online, you must re-issue the selection for it totake effect. If the system does not support this function, a default input device will be selected automatically. |
| [OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectOutputDeviceForAudioRenderer(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioRenderer *renderer, OH_AudioDeviceDescriptor *deviceDescriptor)](#oh_audiodeviceenhancemanager_selectoutputdeviceforaudiorenderer) | Sets the preferred output device for a specific audio renderer.Your application must ensure that the specified renderer is valid. This selection only applies tothe designated stream; other playback streams in your application will use the application's forcedselection or the system's default output device. The selection becomes invalid when the applicationexits or the selected device goes offline. After the application restarts or the device comes back online,you must re-issue the selection for it to take effect. If the system does not support this function,it will select a default output device for the renderer. |
| [OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectInputDeviceForAudioCapturer(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioCapturer *capturer, OH_AudioDeviceDescriptor *deviceDescriptor)](#oh_audiodeviceenhancemanager_selectinputdeviceforaudiocapturer) | Sets the preferred input device for a specific audio capturer.Your application must ensure that the specified capturer is valid. This selection only applies tothe designated stream; other recording streams in your application will use the application's forcedselection or the system's default input device. The selection becomes invalid when the application exitsor the selected device goes offline. After the application restarts or the device comes back online,you must re-issue the selection for it to take effect. If the system does not support this function,it will select a default input device for the capturer. |

## Function description

### OH_AudioManager_GetAudioDeviceEnhanceManager()

```c
OH_AudioCommon_Result OH_AudioManager_GetAudioDeviceEnhanceManager(OH_AudioDeviceEnhanceManager **audioDeviceEnhanceManager)
```

**Description**

Obtains the audio device enhancement manager handle.This handle is used as the first parameter when calling enhanced audio device management functions.The functional APIs of this manager are only available on specific devices.Your application can first call [OH_AudioDeviceEnhanceManager_IsEnhancedRoutingSupported](capi-native-audio-device-enhance-manager-h.md#oh_audiodeviceenhancemanager_isenhancedroutingsupported) to checkif the system supports them before using.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) **audioDeviceEnhanceManager | Indicates the pointer to the [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md)handle obtained by this function. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioCommon_Result](capi-native-audio-common-h.md#oh_audiocommon_result) | [AUDIOCOMMON_RESULT_SUCCESS](capi-native-audio-common-h.md#oh_audiocommon_result) If the execution is successful,<br>     or [AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM](capi-native-audio-common-h.md#oh_audiocommon_result) if the input audioDeviceEnhanceManager<br>     pointer is NULL. |

### OH_AudioDeviceEnhanceManager_IsEnhancedRoutingSupported()

```c
OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_IsEnhancedRoutingSupported(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, bool *supported)
```

**Description**

Queries whether the system supports the enhanced routing functions provided by this manager.The enhanced routing functions support selecting input and output devices for the application or audio streams.You are advised to call this API to check system support before using the enhanced routing functions.Even for the same type of host device, some models may support these functions while others may not dueto hardware limitations. If the system does not support these enhanced routing functions, calling them willhave no effect, and the system will select default input/output devices for the application or audio streams instead.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) *audioDeviceEnhanceManager | the [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) handle returnedby [OH_AudioManager_GetAudioDeviceEnhanceManager](capi-native-audio-device-enhance-manager-h.md#oh_audiomanager_getaudiodeviceenhancemanager). |
| bool *supported | query result, true means the system supports the enhanced functions,false means not supported. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioCommon_Result](capi-native-audio-common-h.md#oh_audiocommon_result) | [AUDIOCOMMON_RESULT_SUCCESS](capi-native-audio-common-h.md#oh_audiocommon_result) if execution succeeds,<br>     or [AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM](capi-native-audio-common-h.md#oh_audiocommon_result) if audioDeviceEnhanceManager is NULL or<br>     supported is NULL,<br>     or [AUDIOCOMMON_RESULT_ERROR_SYSTEM](capi-native-audio-common-h.md#oh_audiocommon_result) Audio service error occurs, such as the service died. |

### OH_AudioDeviceEnhanceManager_SelectOutputDevice()

```c
OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectOutputDevice(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioDeviceDescriptor *deviceDescriptor)
```

**Description**

Sets the preferred output device for the application.This configuration applies to all playback streams created by the application, unless a specificoutput device is designated for an individual stream. When the application implements its own UXfor output device selection, it can obtain the list of available output devices through{@link OH_AudioRoutingManager_GetAvailableDevices}, and use the{@link OH_AudioRoutingManager_GetPreferredOutputDevice} API to obtain the currently selected outputdevice. The application can register a callback via{@link OH_AudioDeviceEnhanceManager_RegisterCurrentOutputDeviceChangeCallback} to listen for changes tothe actual output device. The selection becomes invalid when the application exits or the selecteddevice goes offline. After the application restarts or the device comes back online, the selectionmust be re-issued to take effect. If the system does not support this function, it will select adefault output device for the application.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) *audioDeviceEnhanceManager | the [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) handle returnedby [OH_AudioManager_GetAudioDeviceEnhanceManager](capi-native-audio-device-enhance-manager-h.md#oh_audiomanager_getaudiodeviceenhancemanager). |
| [OH_AudioDeviceDescriptor](capi-ohaudio-oh-audiodevicedescriptor.md) *deviceDescriptor | The target device. The available device must be in the array returnedby {@link OH_AudioRoutingManager_GetAvailableDevices}.If nullptr is passed, system will clear the last selection and select a defaultoutput device for your application. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioCommon_Result](capi-native-audio-common-h.md#oh_audiocommon_result) | [AUDIOCOMMON_RESULT_SUCCESS](capi-native-audio-common-h.md#oh_audiocommon_result) if execution succeeds,<br>     or [AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM](capi-native-audio-common-h.md#oh_audiocommon_result)  if audioDeviceEnhanceManager is NULL,<br>     deviceDescriptor is invalid, or the specified device has gone offline,<br>     or [AUDIOCOMMON_RESULT_ERROR_SYSTEM](capi-native-audio-common-h.md#oh_audiocommon_result) Audio service error occurs, such as the service died. |

### OH_AudioDeviceEnhanceManager_SelectInputDevice()

```c
OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectInputDevice(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioDeviceDescriptor *deviceDescriptor)
```

**Description**

Sets the preferred input device for the application.This setting applies to all recording streams created by the application, unless a specific input deviceis designated for an individual stream. When the application implements its own UX for input device selection,it can obtain the list of available input devices through {@link OH_AudioRoutingManager_GetAvailableDevices},and use the {@link OH_AudioRoutingManager_GetPreferredInputDevice} API to obtain the currently selected input device.Your application can register a callback via{@link OH_AudioDeviceEnhanceManager_RegisterCurrentInputDeviceChangeCallback} to listen for changes to the actualinput device. The selection becomes invalid when the application exits or the selected device goes offline.After the application restarts or the device comes back online, you must re-issue the selection for it totake effect. If the system does not support this function, a default input device will be selected automatically.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) *audioDeviceEnhanceManager | the [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) handle returnedby [OH_AudioManager_GetAudioDeviceEnhanceManager](capi-native-audio-device-enhance-manager-h.md#oh_audiomanager_getaudiodeviceenhancemanager). |
| [OH_AudioDeviceDescriptor](capi-ohaudio-oh-audiodevicedescriptor.md) *deviceDescriptor | The target device. The available device must be in the array returnedby {@link OH_AudioRoutingManager_GetAvailableDevices}.If nullptr is passed, system will clear the last selection and select a defaultinput device for your application. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioCommon_Result](capi-native-audio-common-h.md#oh_audiocommon_result) | [AUDIOCOMMON_RESULT_SUCCESS](capi-native-audio-common-h.md#oh_audiocommon_result) if execution succeeds,<br>     or [AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM](capi-native-audio-common-h.md#oh_audiocommon_result) if audioDeviceEnhanceManager is NULL,<br>     deviceDescriptor is invalid, or the specified input device has gone offline,<br>     or [AUDIOCOMMON_RESULT_ERROR_SYSTEM](capi-native-audio-common-h.md#oh_audiocommon_result) Audio service error occurs, such as the service died. |

### OH_AudioDeviceEnhanceManager_SelectOutputDeviceForAudioRenderer()

```c
OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectOutputDeviceForAudioRenderer(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioRenderer *renderer, OH_AudioDeviceDescriptor *deviceDescriptor)
```

**Description**

Sets the preferred output device for a specific audio renderer.Your application must ensure that the specified renderer is valid. This selection only applies tothe designated stream; other playback streams in your application will use the application's forcedselection or the system's default output device. The selection becomes invalid when the applicationexits or the selected device goes offline. After the application restarts or the device comes back online,you must re-issue the selection for it to take effect. If the system does not support this function,it will select a default output device for the renderer.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) *audioDeviceEnhanceManager | the [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) handle returnedby [OH_AudioManager_GetAudioDeviceEnhanceManager](capi-native-audio-device-enhance-manager-h.md#oh_audiomanager_getaudiodeviceenhancemanager). |
| [OH_AudioRenderer](capi-ohaudio-oh-audiorendererstruct.md) *renderer | Indicates the renderer reference created by {@link OH_AudioStreamBuilder_GenerateRenderer}. |
| [OH_AudioDeviceDescriptor](capi-ohaudio-oh-audiodevicedescriptor.md) *deviceDescriptor | The target device. The available device must be in the array returnedby {@link OH_AudioRoutingManager_GetAvailableDevices}.If nullptr is passed, system will clear the last selection and select a defaultoutput device for the renderer. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioCommon_Result](capi-native-audio-common-h.md#oh_audiocommon_result) | [AUDIOCOMMON_RESULT_SUCCESS](capi-native-audio-common-h.md#oh_audiocommon_result) if execution succeeds,<br>     or [AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM](capi-native-audio-common-h.md#oh_audiocommon_result) if audioDeviceEnhanceManager is NULL, renderer is NULL,<br>     deviceDescriptor is invalid, or the specified output device has gone offline,<br>     or [AUDIOCOMMON_RESULT_ERROR_SYSTEM](capi-native-audio-common-h.md#oh_audiocommon_result) Audio service error occurs, such as the service died. |

### OH_AudioDeviceEnhanceManager_SelectInputDeviceForAudioCapturer()

```c
OH_AudioCommon_Result OH_AudioDeviceEnhanceManager_SelectInputDeviceForAudioCapturer(OH_AudioDeviceEnhanceManager *audioDeviceEnhanceManager, OH_AudioCapturer *capturer, OH_AudioDeviceDescriptor *deviceDescriptor)
```

**Description**

Sets the preferred input device for a specific audio capturer.Your application must ensure that the specified capturer is valid. This selection only applies tothe designated stream; other recording streams in your application will use the application's forcedselection or the system's default input device. The selection becomes invalid when the application exitsor the selected device goes offline. After the application restarts or the device comes back online,you must re-issue the selection for it to take effect. If the system does not support this function,it will select a default input device for the capturer.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) *audioDeviceEnhanceManager | the [OH_AudioDeviceEnhanceManager](capi-ohaudio-oh-audiodeviceenhancemanager.md) handle returnedby [OH_AudioManager_GetAudioDeviceEnhanceManager](capi-native-audio-device-enhance-manager-h.md#oh_audiomanager_getaudiodeviceenhancemanager). |
| [OH_AudioCapturer](capi-ohaudio-oh-audiocapturerstruct.md) *capturer | Indicates the capturer reference created by {@link OH_AudioStreamBuilder_GenerateCapturer}. |
| [OH_AudioDeviceDescriptor](capi-ohaudio-oh-audiodevicedescriptor.md) *deviceDescriptor | The target device. The available device must be in the array returnedby {@link OH_AudioRoutingManager_GetAvailableDevices}.If nullptr is passed, system will clear the last selection and select a defaultinput device for the capturer. |

**Returns**:

| Type | Description |
| -- | -- |
| [OH_AudioCommon_Result](capi-native-audio-common-h.md#oh_audiocommon_result) | [AUDIOCOMMON_RESULT_SUCCESS](capi-native-audio-common-h.md#oh_audiocommon_result) if execution succeeds,<br>     or [AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM](capi-native-audio-common-h.md#oh_audiocommon_result) if audioDeviceEnhanceManager is NULL, capturer is NULL,<br>     deviceDescriptor is invalid, or the specified input device has gone offline,<br>     or [AUDIOCOMMON_RESULT_ERROR_SYSTEM](capi-native-audio-common-h.md#oh_audiocommon_result) Audio service error occurs, such as the service died. |


