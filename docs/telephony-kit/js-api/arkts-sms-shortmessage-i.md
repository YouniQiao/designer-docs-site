# ShortMessage

Defines an SMS message instance.

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## pdu

```TypeScript
pdu: Array<int>
```

Indicates Protocol Data Units (PDUs) from an SMS message.

**Type:** Array<int>

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## hasReplyPath

```TypeScript
hasReplyPath: boolean
```

Indicates whether the received SMS contains "TP-Reply-Path".

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## protocolId

```TypeScript
protocolId: int
```

Indicates the protocol identifier.

**Type:** int

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## visibleRawAddress

```TypeScript
visibleRawAddress: string
```

Indicates the address of the sender, which is to be displayed on the UI.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## isReplaceMessage

```TypeScript
isReplaceMessage: boolean
```

Indicates whether the received SMS is a "replace short message".

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## scAddress

```TypeScript
scAddress: string
```

Indicates the short message service center (SMSC) address.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## scTimestamp

```TypeScript
scTimestamp: long
```

Indicates the SMSC timestamp.

**Type:** long

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## messageClass

```TypeScript
messageClass: ShortMessageClass
```

Indicates the SMS type.

**Type:** ShortMessageClass

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## isSmsStatusReportMessage

```TypeScript
isSmsStatusReportMessage: boolean
```

Indicates whether the current message is SMS-STATUS-REPORT.

**Type:** boolean

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## visibleMessageBody

```TypeScript
visibleMessageBody: string
```

Indicates the SMS message body.

**Type:** string

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

## status

```TypeScript
status: int
```

Indicates the SMS message status from the SMS-STATUS-REPORT message sent by the Short Message Service Center (SMSC).

**Type:** int

**Since:** 6

**System capability:** SystemCapability.Telephony.SmsMms

