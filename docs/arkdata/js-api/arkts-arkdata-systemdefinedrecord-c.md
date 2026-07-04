# SystemDefinedRecord

Represents specific data types defined by OpenHarmony. It is a child class of [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord) and a base class of OpenHarmony-specific data types. You are advised to use the child class of **SystemDefinedRecord**, for example, [SystemDefinedForm](arkts-arkdata-systemdefinedform-c.md#systemdefinedform), [SystemDefinedAppItem](arkts-arkdata-systemdefinedappitem-c.md#systemdefinedappitem), and [SystemDefinedPixelMap](arkts-arkdata-systemdefinedpixelmap-c.md#systemdefinedpixelmap), to describe OpenHarmony-specific data.

**Inheritance/Implementation:** SystemDefinedRecord extends [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord)

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## details

```TypeScript
details?: Record<string, number | number | number | string | Uint8Array>
```

A dictionary type object, where the key is of the string type, and the value can be a number, a string, or a Uint 8Array. The default value is an empty dictionary object.

**Type:** Record<string, number | number | number | string | Uint8Array>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

