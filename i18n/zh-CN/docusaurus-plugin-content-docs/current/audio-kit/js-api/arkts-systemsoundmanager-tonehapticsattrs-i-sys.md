# ToneHapticsAttrs

Haptics attributes in tone scenario.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { systemSoundManager } from '@kit.AudioKit';
```

## getFileName

```TypeScript
getFileName(): string
```

Get file name of haptics.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Haptics title. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneHapticsAttrs.getFileName();

```

## getGentleFileName

```TypeScript
getGentleFileName(): string | null
```

Get file name of gentle haptics.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Haptics file name or null if not gentle haptics not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneHapticsAttrs.getGentleFileName();

```

## getGentleTitle

```TypeScript
getGentleTitle(): string | null
```

Get title of gentle haptics.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Haptics title or null if not gentle haptics not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneHapticsAttrs.getGentleTitle();

```

## getGentleUri

```TypeScript
getGentleUri(): string | null
```

Get gentle haptics URI.

**起始版本：** 22

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Haptics URI or null if not gentle haptics not exist. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneHapticsAttrs.getGentleUri();

```

## getTitle

```TypeScript
getTitle(): string
```

Get title of haptics.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Haptics title. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneHapticsAttrs.getTitle();

```

## getUri

```TypeScript
getUri(): string
```

Get haptics uri.

**起始版本：** 14

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Haptics uri. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneHapticsAttrs.getUri();

```

