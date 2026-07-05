# OnMessageCallback

```TypeScript
type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void
```

Callback function on receiving a custom message.

**Since:** 23

**System capability:** SystemCapability.MiscServices.InputMethodFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msgId | string | Yes | the identifier of the message. |
| msgParam | ArrayBuffer | no |  |

