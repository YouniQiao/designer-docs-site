# SystemSoundPlayer

Implements a system sound player that provides functions for loading, unloading, playing system sounds. Before using these functions, application must call [createSystemSoundPlayer]#systemSoundManager.createSystemSoundPlayer to create a SystemSoundPlayer instance first.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

## load

```TypeScript
load(soundType: systemSoundManager.SystemSoundType): Promise<void>
```

Loads a system sound.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| soundType | systemSoundManager.SystemSoundType | 是 | type of sound to preload. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | I/O error. |
| 5400105 | Crash or blocking occurs in system process. |
| 5400108 | Parameter check failed. Returned by promise. |

## play

```TypeScript
play(soundType: systemSoundManager.SystemSoundType): Promise<void>
```

Plays a system sound.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| soundType | systemSoundManager.SystemSoundType | 是 | type of sound to play. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400103 | I/O error. |
| 5400105 | Crash or blocking occurs in system process. |
| 5400108 | Parameter check failed. Returned by promise. |

## release

```TypeScript
release(): Promise<void>
```

Releases this system sound player instance.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400105 | Crash or blocking occurs in system process. |

## unload

```TypeScript
unload(soundType: systemSoundManager.SystemSoundType): Promise<void>
```

Unloads a system sound that has been loaded before.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| soundType | systemSoundManager.SystemSoundType | 是 | type of sound to unload. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400105 | Crash or blocking occurs in system process. |
| 5400108 | Parameter check failed. Returned by promise. |

