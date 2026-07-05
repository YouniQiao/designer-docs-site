# createGlobalAudioLoopback

## createGlobalAudioLoopback

```TypeScript
function createGlobalAudioLoopback(mode: AudioLoopbackMode, isController: boolean): Promise<AudioLoopback | null>
```

Creates a global audio loopback instance, which provides low-latency in-ear monitor function. Hardware audio loopback can only be created in supported platform, application can use {@link AudioStreamManager#isAudioLoopbackSupported} to check first. There should be only one main instance that own the global loopback in the system, the others are controllers. A controller can manage the global loopback by sending commands to the main instance, and listen status change from it.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Audio.Capturer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AudioLoopbackMode | Yes | Audio loopback mode to create. |
| isController | boolean | Yes | Create an object that own the audio loopback or only a controller. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AudioLoopback \| null> | Promise used to return the audio loopback instance,  or null when an error happens. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800104 | Loopback mode is unsupported. |

