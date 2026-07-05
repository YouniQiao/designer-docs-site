# SystemDefinedRecord

Represents specific data types defined by OpenHarmony. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of OpenHarmony-specific data types. You are advised to use the child class of **SystemDefinedRecord**, for example, [SystemDefinedForm]unifiedDataChannel.SystemDefinedForm, [SystemDefinedAppItem]unifiedDataChannel.SystemDefinedAppItem, and [SystemDefinedPixelMap]unifiedDataChannel.SystemDefinedPixelMap, to describe OpenHarmony-specific data.

**Inheritance:** SystemDefinedRecordextends: UnifiedRecord.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## details

```TypeScript
details?: Record<string, int | long | double | string | Uint8Array>
```

A dictionary type object, where the key is of the string type, and the value can be a number, a string, or a Uint 8Array. The default value is an empty dictionary object.

**Type:** Record<string, int | long | double | string | Uint8Array>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get details(): Record<string, int | long | double | string | Uint8Array> | undefined
```

Indicates the details of system defined data

**Type:** Record<string, int | long | double | string | Uint8Array>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set details(value: Record<string, int | long | double | string | Uint8Array> | undefined)
```

Indicates the details of system defined data

**Type:** Record<string, int | long | double | string | Uint8Array>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

