# @ohos.util.json

The JSON module provides a series of APIs for converting JSON text into JSON objects or values and converting objects into JSON text.

**Since:** 12

<!--Device-unnamed-declare namespace json--><!--Device-unnamed-declare namespace json-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { JSON } from '@kit.ArkTS';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [has](arkts-arkts-json-has-f.md#has) | Checks whether an ArkTS object contains a key. This API can be used for related operations after [JSON.parse](arkts-arkts-json-parse-f.md#parse-1) is called to parse a JSON string. This API supports only valid JSON strings whose outermost layer is in dictionary format (in braces instead of square brackets). |
| [parse](arkts-arkts-json-parse-f.md#parse) | Parses a JSON string into an ArkTS object or null. |
| [remove](arkts-arkts-json-remove-f.md#remove) | Removes a key from an ArkTS object. This API can be used for related operations after [JSON.parse](arkts-arkts-json-parse-f.md#parse-1) is called to parse a JSON string. This API supports only valid JSON strings whose outermost layer is in dictionary format (in braces instead of square brackets). |
| [stringify](arkts-arkts-json-stringify-f.md#stringify) | Converts an ArkTS object or array into a JSON string. In the case of a container, linear containers are supported,but non-linear containers are not. |
| [stringify](arkts-arkts-json-stringify-f.md#stringify-1) | Converts an ArkTS object or array into a JSON string. In the case of a container, linear containers are supported,but non-linear containers are not. |

### Interfaces

| Name | Description |
| --- | --- |
| [ParseOptions](arkts-arkts-json-parseoptions-i.md) | Describes the parsing options, which can define the mode for processing BigInt. |

### Enums

| Name | Description |
| --- | --- |
| [BigIntMode](arkts-arkts-json-bigintmode-e.md) | Enumerates the modes for processing BigInt. |

### Types

| Name | Description |
| --- | --- |
| [Transformer](arkts-arkts-json-transformer-t.md) | Defines the type of the conversion result function.  When used as a parameter of [JSON.parse](arkts-arkts-json-parse-f.md#parse-1), the function is called by each member of the object,allowing for custom data processing or conversion during parsing.  When used as a parameter of [JSON.stringify](arkts-arkts-json-stringify-f.md#stringify-1), the function is used to transfer and handle each property during serialization. |

