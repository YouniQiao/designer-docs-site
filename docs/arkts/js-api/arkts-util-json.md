# @ohos.util.json

The JSON module provides a series of APIs for converting JSON text into JSON objects or values and converting objects
into JSON text.

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { JSON } from '@kit.ArkTS';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [has](arkts-arkts-has-f.md#has-1) | Checks whether an ArkTS object contains a key. This API can be used for related operations after[JSON.parse](arkts-arkts-parse-f.md#parse-1) is called to parse a JSON string. This API supports only valid JSON strings whoseoutermost layer is in dictionary format (in braces instead of square brackets). |
| [parse](arkts-arkts-parse-f.md#parse-1) | Parses a JSON string into an ArkTS object or null. |
| [remove](arkts-arkts-remove-f.md#remove-1) | Removes a key from an ArkTS object. This API can be used for related operations after[JSON.parse](arkts-arkts-parse-f.md#parse-1) is called to parse a JSON string. This API supports only valid JSON strings whoseoutermost layer is in dictionary format (in braces instead of square brackets). |
| [stringify](arkts-arkts-stringify-f.md#stringify-1) | Converts an ArkTS object or array into a JSON string. In the case of a container, linear containers are supported,but non-linear containers are not. |
| [stringify](arkts-arkts-stringify-f.md#stringify-2) | Converts an ArkTS object or array into a JSON string. In the case of a container, linear containers are supported,but non-linear containers are not. |

### Interfaces

| Name | Description |
| --- | --- |
| [ParseOptions](arkts-arkts-parseoptions-i.md) | Describes the parsing options, which can define the mode for processing BigInt. |

### Enums

| Name | Description |
| --- | --- |
| [BigIntMode](arkts-arkts-bigintmode-e.md) | Enumerates the modes for processing BigInt. |

### Types

| Name | Description |
| --- | --- |
| [Transformer](arkts-arkts-transformer-t.md) | Defines the type of the conversion result function.When used as a parameter of [JSON.parse](arkts-arkts-parse-f.md#parse-1), the function is called by each member of the object,allowing for custom data processing or conversion during parsing.When used as a parameter of[JSON.stringify](json.stringify(value: Object, replacer?: Transformer, space?: string \| number)), thefunction is used to transfer and handle each property during serialization. |

