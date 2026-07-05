# $r

## $r

```TypeScript
declare function $r(value: string, ...params: any[]): Resource
```

global $r function

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | The value format is 'belonging.type.name'.  belonging: group to which the resource belongs, which can be 'sys' or 'app'.  type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',  'strarray', 'string', or 'media'.  name: resource name, which is determined during resource definition. |
| params | any[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| Resource |  |

