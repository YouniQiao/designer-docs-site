# EncodingInfo

Defines the detect encoding result information.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## confidence

```TypeScript
confidence: int
```

An integer between 0 to 100, determine the accuracy of the result. Higher value indicates a more reliable detection result.

**类型：** int

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## encodingName

```TypeScript
encodingName: string
```

Name of the detect encoding result, the value can be "UTF-8", "UTF-16BE", "UTF-16LE", "UTF-32BE", "UTF-32LE", "Shift_JIS", "ISO-2022-JP", "ISO-2022-CN", "ISO-2022-KR", "GB18030", "Big5", "EUC-JP", "EUC-KR", "ISO-8859-1", "ISO-8859-2", "ISO-8859-5", "ISO-8859-6", "ISO-8859-7", "ISO-8859-8", "ISO-8859-9", "windows-1250", "windows-1251", "windows-1252", "windows-1253", "windows-1254", "windows-1255", "windows-1256", "KOI8-R", "IBM420", "IBM424".

**类型：** string

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

