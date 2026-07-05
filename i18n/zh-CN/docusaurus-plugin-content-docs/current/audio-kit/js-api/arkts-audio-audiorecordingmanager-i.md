# AudioRecordingManager

Provides recording strategy management, including collaborative recording and recording control capabilities.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

## 导入模块

```TypeScript
import { audio } from '@kit.AudioKit';
```

## enableSystemRecordController

```TypeScript
enableSystemRecordController(show: boolean, config: SystemRecordControllerConfig): Promise<void>
```

Enables or disables the system recording controller panel. The application can call this API to pull up the recording controller panel before starting the recording stream, allowing the user to finish selecting the recording device or audio effect parameters. The recording service can then be started to avoid inconsistent audio effects caused by switching during the recording process. The application must be in the foreground to enable the panel; the enable operation does not take effect if the application is in the background. Disabling the panel is not restricted by the application's foreground or background status. The API uses a promise to return the result.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| show | boolean | 是 | A boolean value indicating whether to show (true) or hide (false)  the system recording controller panel. |
| config | SystemRecordControllerConfig | 是 | Configuration for the system recording controller panel. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio service error occurs like service died. |

## offSystemRecordControllerEnabledChange

```TypeScript
offSystemRecordControllerEnabledChange(callback?: Callback<SystemRecordControllerChangeInfo>): void
```

Unsubscribes from the system recording controller panel enabled state change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SystemRecordControllerChangeInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800301 | Audio service error occurs like service died. |

## onSystemRecordControllerEnabledChange

```TypeScript
onSystemRecordControllerEnabledChange(callback: Callback<SystemRecordControllerChangeInfo>): void
```

Subscribes to the system recording controller panel enabled state change event.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Audio.Capturer

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SystemRecordControllerChangeInfo> | 是 | Callback used to listen  whether the system recording controller panel enabled state change event. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 6800101 | Parameter verification failed. |
| 6800102 | Memory allocation failed. |
| 6800301 | Audio service error occurs like service died. |

