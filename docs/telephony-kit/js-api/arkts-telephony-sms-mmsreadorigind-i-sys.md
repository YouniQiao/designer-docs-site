# MmsReadOrigInd (System API)

Defines the original MMS message reading indication.

**Since:** 8

<!--Device-sms-export interface MmsReadOrigInd--><!--Device-sms-export interface MmsReadOrigInd-End-->

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

Indicates the date for the original MMS message reading indication.

**Type:** number

**Since:** 8

<!--Device-MmsReadOrigInd-date: long--><!--Device-MmsReadOrigInd-date: long-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## from

```TypeScript
from: MmsAddress
```

Indicates the source address for the original MMS message reading indication.

**Type:** MmsAddress

**Since:** 8

<!--Device-MmsReadOrigInd-from: MmsAddress--><!--Device-MmsReadOrigInd-from: MmsAddress-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## messageId

```TypeScript
messageId: string
```

Indicates the message ID for the original MMS message reading indication.

**Type:** string

**Since:** 8

<!--Device-MmsReadOrigInd-messageId: string--><!--Device-MmsReadOrigInd-messageId: string-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## readStatus

```TypeScript
readStatus: number
```

Indicates the read status for the original MMS message reading indication.

**Type:** number

**Since:** 8

<!--Device-MmsReadOrigInd-readStatus: int--><!--Device-MmsReadOrigInd-readStatus: int-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## to

```TypeScript
to: Array<MmsAddress>
```

Indicates the destination address for the original MMS message reading indication.

**Type:** Array<MmsAddress>

**Since:** 8

<!--Device-MmsReadOrigInd-to: Array<MmsAddress>--><!--Device-MmsReadOrigInd-to: Array<MmsAddress>-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## version

```TypeScript
version: MmsVersionType
```

Indicates the version for the original MMS message reading indication.

**Type:** MmsVersionType

**Since:** 8

<!--Device-MmsReadOrigInd-version: MmsVersionType--><!--Device-MmsReadOrigInd-version: MmsVersionType-End-->

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

