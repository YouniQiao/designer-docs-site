# createGlobalAudioLoopback

## createGlobalAudioLoopback

```TypeScript
function createGlobalAudioLoopback(mode: AudioLoopbackMode, isController: boolean): Promise<AudioLoopback | null>
```

Creates a global audio loopback instance, which provides low-latency in-ear monitor function. Hardware audio loopback can only be created in supported platform, application can use {@link AudioStreamManager#isAudioLoopbackSupported} to check first. There should be only one main instance that own the global loopback in the system, the others are controllers. A controller can manage the global loopback by sending commands to the main instance, and listen status change from it.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mode | AudioLoopbackMode | 是 | Audio loopback mode to create. |
| isController | boolean | 是 | Create an object that own the audio loopback or only a controller. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AudioLoopback \| null> | Promise used to return the audio loopback instance,  or null when an error happens. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800104 | Loopback mode is unsupported. |

