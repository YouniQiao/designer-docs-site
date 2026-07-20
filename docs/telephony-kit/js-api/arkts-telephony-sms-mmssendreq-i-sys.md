# MmsSendReq (System API)

Defines an MMS message sending request.

**Since:** 8

<!--Device-sms-export interface MmsSendReq--><!--Device-sms-export interface MmsSendReq-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## bcc

```TypeScript
bcc?: Array<MmsAddress>
```

Indicates the blind carbon copy address for the MMS message sending request.

**Type:** Array<MmsAddress>

**Since:** 8

<!--Device-MmsSendReq-bcc?: Array<MmsAddress>--><!--Device-MmsSendReq-bcc?: Array<MmsAddress>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## cc

```TypeScript
cc?: Array<MmsAddress>
```

Indicates the carbon copy address for the MMS message sending request.

**Type:** Array<MmsAddress>

**Since:** 8

<!--Device-MmsSendReq-cc?: Array<MmsAddress>--><!--Device-MmsSendReq-cc?: Array<MmsAddress>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## contentType

```TypeScript
contentType: string
```

Indicates the content type for the MMS message sending request.

**Type:** string

**Since:** 8

<!--Device-MmsSendReq-contentType: string--><!--Device-MmsSendReq-contentType: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## date

```TypeScript
date?: number
```

Indicates the date for the MMS message sending request.

**Type:** number

**Since:** 8

<!--Device-MmsSendReq-date?: long--><!--Device-MmsSendReq-date?: long-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## deliveryReport

```TypeScript
deliveryReport?: number
```

Indicates the delivery report for the MMS message sending request.

**Type:** number

**Since:** 8

<!--Device-MmsSendReq-deliveryReport?: int--><!--Device-MmsSendReq-deliveryReport?: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## expiry

```TypeScript
expiry?: number
```

Indicates the expiration for the MMS message sending request.

**Type:** number

**Since:** 8

<!--Device-MmsSendReq-expiry?: int--><!--Device-MmsSendReq-expiry?: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## from

```TypeScript
from: MmsAddress
```

Indicates the source address for the MMS message sending request.

**Type:** MmsAddress

**Since:** 8

<!--Device-MmsSendReq-from: MmsAddress--><!--Device-MmsSendReq-from: MmsAddress-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## messageClass

```TypeScript
messageClass?: number
```

Indicates the message class for the MMS message sending request.

**Type:** number

**Since:** 8

<!--Device-MmsSendReq-messageClass?: int--><!--Device-MmsSendReq-messageClass?: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## priority

```TypeScript
priority?: MmsPriorityType
```

Indicates the priority for the MMS message sending request.

**Type:** MmsPriorityType

**Since:** 8

<!--Device-MmsSendReq-priority?: MmsPriorityType--><!--Device-MmsSendReq-priority?: MmsPriorityType-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## readReport

```TypeScript
readReport?: number
```

Indicates the read report for the MMS message sending request.

**Type:** number

**Since:** 8

<!--Device-MmsSendReq-readReport?: int--><!--Device-MmsSendReq-readReport?: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## senderVisibility

```TypeScript
senderVisibility?: number
```

Indicates the sender visibility for the MMS message sending request.

**Type:** number

**Since:** 8

<!--Device-MmsSendReq-senderVisibility?: int--><!--Device-MmsSendReq-senderVisibility?: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## subject

```TypeScript
subject?: string
```

Indicates the subject for the MMS message sending request.

**Type:** string

**Since:** 8

<!--Device-MmsSendReq-subject?: string--><!--Device-MmsSendReq-subject?: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## to

```TypeScript
to?: Array<MmsAddress>
```

Indicates the destination address for the MMS message sending request.

**Type:** Array<MmsAddress>

**Since:** 8

<!--Device-MmsSendReq-to?: Array<MmsAddress>--><!--Device-MmsSendReq-to?: Array<MmsAddress>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## transactionId

```TypeScript
transactionId: string
```

Indicates the transaction ID for the MMS message sending request.

**Type:** string

**Since:** 8

<!--Device-MmsSendReq-transactionId: string--><!--Device-MmsSendReq-transactionId: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## version

```TypeScript
version: MmsVersionType
```

Indicates the version for the MMS message sending request.

**Type:** MmsVersionType

**Since:** 8

<!--Device-MmsSendReq-version: MmsVersionType--><!--Device-MmsSendReq-version: MmsVersionType-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

