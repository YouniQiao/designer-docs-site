# ToneAttrs

Tone attributes.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { systemSoundManager } from '@kit.AudioKit';
```

## getCategory

```TypeScript
getCategory(): int
```

Gets tone category.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Tone category. This value can be one of {@link TONE_CATEGORY_RINGTONE},  {@link TONE_CATEGORY_TEXT_MESSAGE}, {@link TONE_CATEGORY_NOTIFICATION}, {@link TONE_CATEGORY_ALARM}.  In addition, this value can be result of OR logical operator of these constants. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneAttrs.getCategory();

```

## getCustomizedType

```TypeScript
getCustomizedType(): ToneCustomizedType
```

Gets customized type of tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ToneCustomizedType | Customized type of tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneAttrs.getCustomizedType();

```

## getFileName

```TypeScript
getFileName(): string
```

Gets file name of tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | file name. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneAttrs.getFileName();

```

## getMediaType

```TypeScript
getMediaType(): MediaType
```

Gets media type. This function returns {@link MediaType#AUDIO} if the media type has not been changed by {@link setMediaType}.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| MediaType | Media type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneAttrs.getMediaType();

```

## getTitle

```TypeScript
getTitle(): string
```

Gets title of tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | title. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneAttrs.getTitle();

```

## getUri

```TypeScript
getUri(): string
```

Gets uri of tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | uri. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
toneAttrs.getUri();

```

## setCategory

```TypeScript
setCategory(category: int): void
```

Sets tone category.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| category | int | 是 | tone category. This parameter can be one of {@link TONE_CATEGORY_RINGTONE},  {@link TONE_CATEGORY_TEXT_MESSAGE}, {@link TONE_CATEGORY_NOTIFICATION}, {@link TONE_CATEGORY_ALARM}.  In addition, this parameter can be result of OR logical operator of these constants. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
let toneAttrs = systemSoundManager.createCustomizedToneAttrs();
let categoryValue = systemSoundManager.TONE_CATEGORY_ALARM; // 需更改为实际所需类型常量。
toneAttrs.setCategory(categoryValue);

```

## setFileName

```TypeScript
setFileName(name: string): void
```

Sets file name of tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | file name. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
let toneAttrs = systemSoundManager.createCustomizedToneAttrs();
let fileName = 'textFileName';
toneAttrs.setFileName(fileName);

```

## setMediaType

```TypeScript
setMediaType(type: MediaType): void
```

Sets media type.

**起始版本：** 20

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | MediaType | 是 | Target media type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |

**示例：**

```TypeScript
let type: systemSoundManager.MediaType = systemSoundManager.MediaType.VIDEO; // 需更改为实际所需类型。
let toneAttrs = systemSoundManager.createCustomizedToneAttrs();
toneAttrs.setMediaType(type);

```

## setTitle

```TypeScript
setTitle(title: string): void
```

Sets title of tone.

**起始版本：** 12

**系统能力：** SystemCapability.Multimedia.SystemSound.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 是 | Title of tone. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
let toneAttrs = systemSoundManager.createCustomizedToneAttrs();
let title = 'text';
toneAttrs.setTitle(title);

```

