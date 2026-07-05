# on

## on('notify')

```TypeScript
function on(type: 'notify', callback: Callback<number>): void
```

Subscribes NFC RF status change events.

**Since:** 8

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notify' | Yes | The callback type. |
| callback | Callback&lt;number> | Yes | The callback function to be registered. |

