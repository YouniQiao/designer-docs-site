# ShortMessage

Defines an SMS message instance.

**Since:** 6

<!--Device-sms-export interface ShortMessage--><!--Device-sms-export interface ShortMessage-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## hasReplyPath

```TypeScript
hasReplyPath: boolean
```

Indicates whether the received SMS contains "TP-Reply-Path".

**Type:** boolean

**Since:** 6

<!--Device-ShortMessage-hasReplyPath: boolean--><!--Device-ShortMessage-hasReplyPath: boolean-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## isReplaceMessage

```TypeScript
isReplaceMessage: boolean
```

Indicates whether the received SMS is a "replace short message".

**Type:** boolean

**Since:** 6

<!--Device-ShortMessage-isReplaceMessage: boolean--><!--Device-ShortMessage-isReplaceMessage: boolean-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## isSmsStatusReportMessage

```TypeScript
isSmsStatusReportMessage: boolean
```

Indicates whether the current message is SMS-STATUS-REPORT.

**Type:** boolean

**Since:** 6

<!--Device-ShortMessage-isSmsStatusReportMessage: boolean--><!--Device-ShortMessage-isSmsStatusReportMessage: boolean-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## messageClass

```TypeScript
messageClass: ShortMessageClass
```

Indicates the SMS type.

**Type:** ShortMessageClass

**Since:** 6

<!--Device-ShortMessage-messageClass: ShortMessageClass--><!--Device-ShortMessage-messageClass: ShortMessageClass-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## pdu

```TypeScript
pdu: Array<number>
```

Indicates Protocol Data Units (PDUs) from an SMS message.

**Type:** Array<number>

**Since:** 6

<!--Device-ShortMessage-pdu: Array<int>--><!--Device-ShortMessage-pdu: Array<int>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## protocolId

```TypeScript
protocolId: number
```

Indicates the protocol identifier.

**Type:** number

**Since:** 6

<!--Device-ShortMessage-protocolId: int--><!--Device-ShortMessage-protocolId: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## scAddress

```TypeScript
scAddress: string
```

Indicates the short message service center (SMSC) address.

**Type:** string

**Since:** 6

<!--Device-ShortMessage-scAddress: string--><!--Device-ShortMessage-scAddress: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## scTimestamp

```TypeScript
scTimestamp: number
```

Indicates the SMSC timestamp.

**Type:** number

**Since:** 6

<!--Device-ShortMessage-scTimestamp: long--><!--Device-ShortMessage-scTimestamp: long-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## status

```TypeScript
status: number
```

Indicates the SMS message status from the SMS-STATUS-REPORT message sent by the Short Message Service Center (SMSC).

**Type:** number

**Since:** 6

<!--Device-ShortMessage-status: int--><!--Device-ShortMessage-status: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## visibleMessageBody

```TypeScript
visibleMessageBody: string
```

Indicates the SMS message body.

**Type:** string

**Since:** 6

<!--Device-ShortMessage-visibleMessageBody: string--><!--Device-ShortMessage-visibleMessageBody: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

## visibleRawAddress

```TypeScript
visibleRawAddress: string
```

Indicates the address of the sender, which is to be displayed on the UI.

**Type:** string

**Since:** 6

<!--Device-ShortMessage-visibleRawAddress: string--><!--Device-ShortMessage-visibleRawAddress: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

