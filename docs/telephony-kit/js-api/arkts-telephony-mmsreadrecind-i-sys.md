# MmsReadRecInd (System API)

Defines the MMS message reading indication.

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { sms } from '@ohos.telephony.sms';
```

## date

```TypeScript
date?: number
```

Indicates the date for the MMS message reading indication.

**Type:** number

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## from

```TypeScript
from: MmsAddress
```

Indicates the source address for the MMS message reading indication.

**Type:** MmsAddress

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## messageId

```TypeScript
messageId: string
```

Indicates the message ID for the MMS message reading indication.

**Type:** string

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## readStatus

```TypeScript
readStatus: number
```

Indicates the read status for the MMS message reading indication.

**Type:** number

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## to

```TypeScript
to: Array<MmsAddress>
```

Indicates the destination address for the MMS message reading indication.

**Type:** Array<MmsAddress>

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

## version

```TypeScript
version: MmsVersionType
```

Indicates the version for the MMS message reading indication.

**Type:** MmsVersionType

**Since:** 8

**System capability:** SystemCapability.Telephony.SmsMms

**System API:** This is a system API.

