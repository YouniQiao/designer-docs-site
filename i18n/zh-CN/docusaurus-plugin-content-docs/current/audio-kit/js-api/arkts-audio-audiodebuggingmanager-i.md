# AudioDebuggingManager

Provides audio debug management capabilities.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Core

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## printAppInfo

```TypeScript
printAppInfo(fd: int): void
```

Prints full audio runtime snapshot for current app process. The snapshot will contain all audio renderers, capturers, audio session information. Note that the information details and format may vary from different version, it can only be used for manual debugging, user should not rely on the information for actual function realization or file content extraction.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fd | int | 是 | fd is a file descriptor, indicates the location that the snapshot information will be  written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the  running log, otherwise the snapshot will be written into the file. |

## printCapturerInfo

```TypeScript
printCapturerInfo(capturer: AudioCapturer, fd: int): void
```

Prints full audio runtime snapshot for target audio capturer instance. The snapshot will contain the stream, pipe, volume and device information. Note that the information details and format may vary from different version, it can only be used for manual debugging, user should not rely on the information for actual function realization or file content extraction.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capturer | AudioCapturer | 是 | target audio capturer instance to print snapshot. |
| fd | int | 是 | fd is a file descriptor, indicates the location that the snapshot information will be  written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the  running log, otherwise the snapshot will be written into the file. |

## printLoopbackInfo

```TypeScript
printLoopbackInfo(loopback: AudioLoopback, fd: int): void
```

Prints full audio runtime snapshot for target audio loopback instance. The snapshot will contain the loopback status, device and effect information. Note that the information details and format may vary from different version, it can only be used for manual debugging, user should not rely on the information for actual function realization or file content extraction.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| loopback | AudioLoopback | 是 | target audio loopback instance to print snapshot. |
| fd | int | 是 | fd is a file descriptor, indicates the location that the snapshot information will be  written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the  running log, otherwise the snapshot will be written into the file. |

## printRendererInfo

```TypeScript
printRendererInfo(renderer: AudioRenderer, fd: int): void
```

Prints full audio runtime snapshot for target audio renderer instance. The snapshot will contain the stream, pipe, volume and device information. Note that the information details and format may vary from different version, it can only be used for manual debugging, user should not rely on the information for actual function realization or file content extraction.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| renderer | AudioRenderer | 是 | target audio renderer instance to print snapshot. |
| fd | int | 是 | fd is a file descriptor, indicates the location that the snapshot information will be  written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the  running log, otherwise the snapshot will be written into the file. |

## printSessionInfo

```TypeScript
printSessionInfo(session: AudioSessionManager, fd: int): void
```

Prints full audio runtime snapshot for target audio session manager instance. The snapshot will contain the session status, scene, strategy and device information. Note that the information details and format may vary from different version, it can only be used for manual debugging, user should not rely on the information for actual function realization or file content extraction.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| session | AudioSessionManager | 是 | target audio session manager instance to print snapshot. |
| fd | int | 是 | fd is a file descriptor, indicates the location that the snapshot information will be  written to. If the fd is less than 0 or no writable, the snapshot information will be printed into the  running log, otherwise the snapshot will be written into the file. |

