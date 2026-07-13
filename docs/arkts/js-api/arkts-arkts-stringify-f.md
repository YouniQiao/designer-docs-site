# stringify

## Modules to Import

```TypeScript
import { JSON } from '@kit.ArkTS';
```

## stringify

```TypeScript
function stringify(value: Object, replacer?: (number | string)[] | null, space?: string | number): string
```

Converts an ArkTS object or array into a JSON string. In the case of a container, linear containers are supported,
but non-linear containers are not.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object | Yes | ArkTS object or array. In the case of a container, linear containers are supported, butnon-linear containers are not. |
| replacer | (number \| string)[] \| null | No | If an array is passed in, only the keys in the array areserialized to the final JSON string. If null is passed in, all keys of the object are serialized. The defaultvalue is undefined. |
| space | string \| number | No | White spaces or strings inserted into the output JSON string for readabilitypurposes. If the parameter is a number, it represents the number of indentation spaces; if it is a string, itrepresents the indentation characters. If no parameter is provided, there will be no indentation. The defaultvalue is an empty string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Return a JSON text. |


## stringify

```TypeScript
function stringify(value: Object, replacer?: Transformer, space?: string | number): string
```

Converts an ArkTS object or array into a JSON string. In the case of a container, linear containers are supported,
but non-linear containers are not.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object | Yes | ArkTS object or array. In the case of a container, linear containers are supported, butnon-linear containers are not. |
| replacer | Transformer | No | During serialization, each key of the serialized value is converted andprocessed by this function. The default value is undefined. |
| space | string \| number | No | Indentation, white space, or line break characters inserted into the outputJSON string for readability purposes. If a number is passed in, it indicates the number of space characters tobe used as indentation. If a string is passed in, the string is inserted before the output JSON string. If nullis passed in, no white space is used. The default value is an empty string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Return a JSON text. |

