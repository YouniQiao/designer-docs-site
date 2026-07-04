# OnRequestEventCallback

```TypeScript
type OnRequestEventCallback = (source: Want, name: string, data: KVObject) => RequestEventResult
```

Plugin component request event callback.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | Want | Yes |  |
| name | string | Yes |  |
| data | KVObject | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| RequestEventResult | Returns the request event result. |

