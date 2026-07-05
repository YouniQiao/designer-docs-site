# AudioDeviceEnhanceManager

Provides enhanced audio device management capabilities.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## getSoundCardInfo

```TypeScript
getSoundCardInfo(): Promise<SoundCardInfo>
```

Obtains the sound card information. This method uses a Promise to return the query result.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;SoundCardInfo> | Promise used to return the sound card information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Not system App. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

## isEnhancedRoutingSupported

```TypeScript
isEnhancedRoutingSupported(): boolean
```

Queries whether the system supports the enhanced routing functions provided by this manager, including selecting input and output devices for the application or audio streams. Your application is advised to call this API first to confirm system support before using these enhanced routing APIs. Even for the same type of host device, some models may support these functions while others may not due to hardware limitations. If the system does not support these enhanced routing functions, calling them will have no effect, and the system will select default input/output devices for the application or audio streams instead.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | The value true indicates that the system supports enhanced routing functions. |

## selectInputDevice

```TypeScript
selectInputDevice(inputDevice: AudioDeviceDescriptor): Promise<void>
```

Selects the input device for your application. This setting applies to all recording streams created under your application, unless a specific input device is designated for a particular stream by {@link AudioDeviceEnhanceManager.selectInputDeviceForAudioCapturer}. When application implements its own UX for input device selection, it can obtain the list of available input devices through {@link AudioRoutingManager.getAvailableDevices}, and use the {@link AudioRoutingManager.getPreferredInputDeviceForCapturerInfo} API to obtain the currently selected input device. The selection will become invalid when your application exits or the selected device goes offline. After your application restarts or the device comes back online, your application must re-issue the selection for it to take effect. If the system does not support this function, it will select a default input device for your application.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| inputDevice | AudioDeviceDescriptor | 是 | Audio device descriptor in the array returned by  {@link AudioRoutingManager.getAvailableDevices}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, for example,  the selected device does not exist. |
| 6800301 | Audio service error occurs, such as the service died. |

## selectInputDeviceForAudioCapturer

```TypeScript
selectInputDeviceForAudioCapturer(capturer: AudioCapturer, inputDevice: AudioDeviceDescriptor): Promise<void>
```

Selects the input device for the target AudioCapturer. Your application must ensure that the specified AudioCapturer is valid. This selection only applies to the designated stream; other recording streams in your application will use your application's forced selection or the system's default input device. The selection will become invalid when your application exits or the selected device goes offline. After your application restarts or the device comes back online, your application must re-issue the selection for it to take effect. If the system does not support this function, the system will select a default input device for the capturer.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturer | AudioCapturer | 是 | The instance of AudioCapturer. |
| inputDevice | AudioDeviceDescriptor | 是 | Audio device descriptor in the array returned by  {@link AudioRoutingManager.getAvailableDevices}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, for example,  the selected device does not exist. |
| 6800301 | Audio service error occurs, such as the service died. |

## selectOutputDevice

```TypeScript
selectOutputDevice(outputDevice: AudioDeviceDescriptor): Promise<void>
```

Selects the output device for your application. This setting applies to all playback streams created under your application, unless a specific output device is designated for a particular stream by {@link AudioDeviceEnhanceManager.selectOutputDeviceForAudioRenderer}. When application implements its own UX for output device selection, it can obtain the list of available output devices through {@link AudioRoutingManager.getAvailableDevices}, and use the {@link AudioRoutingManager.getPreferOutputDeviceForRendererInfo} API to obtain the currently selected output device. The selection will become invalid when your application exits or the selected device goes offline. After your application restarts or the device comes back online, your application must re-issue the selection for it to take effect. If the system does not support this function, it will select a default output device for your application.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outputDevice | AudioDeviceDescriptor | 是 | Audio device descriptor in the array returned by  {@link AudioRoutingManager.getAvailableDevices}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, for example,  the selected device does not exist. |
| 6800301 | Audio service error occurs, such as the service died. |

## selectOutputDeviceForAudioRenderer

```TypeScript
selectOutputDeviceForAudioRenderer(renderer: AudioRenderer, outputDevice: AudioDeviceDescriptor): Promise<void>
```

Selects the output device for the target AudioRenderer. Your application must ensure that the specified AudioRenderer is valid. This selection only applies to the designated stream; other playback streams in your application will use your application's forced selection or the system's default output device. The selection will become invalid when your application exits or the selected device goes offline. After your application restarts or the device comes back online, your application must re-issue the selection for it to take effect. If the system does not support this function, the system will select a default output device for the renderer.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.DeviceEnhance

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| renderer | AudioRenderer | 是 | The instance of AudioRenderer. |
| outputDevice | AudioDeviceDescriptor | 是 | Audio device descriptor in the array returned by  {@link AudioRoutingManager.getAvailableDevices}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed, for example,  the selected device does not exist. |
| 6800301 | Audio service error occurs, such as the service died. |

