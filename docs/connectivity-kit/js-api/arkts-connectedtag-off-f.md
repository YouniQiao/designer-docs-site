# off

## off('notify')

```TypeScript
function off(type: 'notify', callback?: Callback<number>): void
```

Unsubscribes NFC RF status change events. <p>All callback functions will be unregistered If there is no specific callback parameter.</p>

**Since:** 8

**Required permissions:** 

 ohos.permission.NFC_TAG

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notify' | Yes | The callback type. |
| callback | Callback&lt;number> | No | The callback function to be unregistered. |

