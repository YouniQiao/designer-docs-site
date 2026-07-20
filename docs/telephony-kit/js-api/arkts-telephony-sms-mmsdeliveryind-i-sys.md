# MmsDeliveryInd (System API)

Defines an MMS message delivery indication.

**Since:** 8

<!--Device-sms-export interface MmsDeliveryInd--><!--Device-sms-export interface MmsDeliveryInd-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { sms } from '@kit.TelephonyKit';
```

## date

```TypeScript
date: number
```

Indicates the date for the MMS message delivery indication.

**Type:** number

**Since:** 8

<!--Device-MmsDeliveryInd-date: long--><!--Device-MmsDeliveryInd-date: long-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## messageId

```TypeScript
messageId: string
```

Indicates the message ID for the MMS message delivery indication.

**Type:** string

**Since:** 8

<!--Device-MmsDeliveryInd-messageId: string--><!--Device-MmsDeliveryInd-messageId: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## status

```TypeScript
status: number
```

Indicates the status for the MMS message delivery indication.

**Type:** number

**Since:** 8

<!--Device-MmsDeliveryInd-status: int--><!--Device-MmsDeliveryInd-status: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## to

```TypeScript
to: Array<MmsAddress>
```

Indicates the destination address for the MMS message delivery indication.

**Type:** Array<MmsAddress>

**Since:** 8

<!--Device-MmsDeliveryInd-to: Array<MmsAddress>--><!--Device-MmsDeliveryInd-to: Array<MmsAddress>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## version

```TypeScript
version: MmsVersionType
```

Indicates the version for the MMS message delivery indication.

**Type:** MmsVersionType

**Since:** 8

<!--Device-MmsDeliveryInd-version: MmsVersionType--><!--Device-MmsDeliveryInd-version: MmsVersionType-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

