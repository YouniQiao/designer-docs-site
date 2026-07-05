# ShortMessage

Defines an SMS message instance.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## 导入模块

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## pdu

```TypeScript
pdu: Array<int>
```

Indicates Protocol Data Units (PDUs) from an SMS message.

**类型：** Array<int>

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## hasReplyPath

```TypeScript
hasReplyPath: boolean
```

Indicates whether the received SMS contains "TP-Reply-Path".

**类型：** boolean

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## protocolId

```TypeScript
protocolId: int
```

Indicates the protocol identifier.

**类型：** int

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## visibleRawAddress

```TypeScript
visibleRawAddress: string
```

Indicates the address of the sender, which is to be displayed on the UI.

**类型：** string

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## isReplaceMessage

```TypeScript
isReplaceMessage: boolean
```

Indicates whether the received SMS is a "replace short message".

**类型：** boolean

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## scAddress

```TypeScript
scAddress: string
```

Indicates the short message service center (SMSC) address.

**类型：** string

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## scTimestamp

```TypeScript
scTimestamp: long
```

Indicates the SMSC timestamp.

**类型：** long

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## messageClass

```TypeScript
messageClass: ShortMessageClass
```

Indicates the SMS type.

**类型：** ShortMessageClass

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## isSmsStatusReportMessage

```TypeScript
isSmsStatusReportMessage: boolean
```

Indicates whether the current message is SMS-STATUS-REPORT.

**类型：** boolean

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## visibleMessageBody

```TypeScript
visibleMessageBody: string
```

Indicates the SMS message body.

**类型：** string

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

## status

```TypeScript
status: int
```

Indicates the SMS message status from the SMS-STATUS-REPORT message sent by the Short Message Service Center (SMSC).

**类型：** int

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.SmsMms

