# PasteDataProperty

Defines the properties of PasteData in the pasteboard, including the timestamp, data types, pasteable range, and additional data. The defined properties can be applied to the pasteboard only with the [setProperty]pasteboard.PasteData.setProperty(property: PasteDataProperty) method.

**Since:** 7

**System capability:** SystemCapability.MiscServices.Pasteboard

## Modules to Import

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## localOnly

```TypeScript
localOnly: boolean
```

Whether the pasteboard content is for local access only. The default value is **false**. The value will be overwritten by the value of the **shareOption** attribute. You are advised to use the [ShareOption]pasteboard.ShareOption attribute instead.

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## mimeTypes

```TypeScript
readonly mimeTypes: Array<string>
```

Data types of all records in PasteData.

**Type:** Array<string>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## additions

```TypeScript
additions: Record<string, object>
```

Additional property data. It does not allow for dynamic adding of properties. Properties can be added only by re- assigning values. This parameter is left empty by default. For details, see the example of **setProperty**.

**Type:** Record<string, object>

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

```TypeScript
additions: Record<string, RecordData>
```

additional property data. key-value pairs.

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.MiscServices.Pasteboard

## tag

```TypeScript
tag: string
```

Custom tag. This parameter is left empty by default.

**Type:** string

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## shareOption

```TypeScript
shareOption: ShareOption
```

Pasteable ranges of PasteData. The default value is **CROSSDEVICE**.

**Type:** ShareOption

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

## timestamp

```TypeScript
readonly timestamp: long
```

Timestamp when data is written to the pasteboard (unit: nanoseconds since the device is powered on).

**Type:** long

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.MiscServices.Pasteboard

