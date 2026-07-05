# ISendShortMessageCallback

Provides the callback for the SMS message sending result.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## 导入模块

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## result

```TypeScript
result: SendSmsResult
```

Indicates the SMS message sending result.

**类型：** SendSmsResult

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## isLastPart

```TypeScript
isLastPart: boolean
```

Specifies whether this is the last part of a multi-part SMS message.

**类型：** boolean

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## url

```TypeScript
url: string
```

Indicates the URI to store the sent SMS message.

**类型：** string

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

