# DataCallback (System API)

```TypeScript
type DataCallback = (networkId: string, msg: ArrayBuffer) => void
```

Callback function invoked when a message is received.

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-conversation-type DataCallback = (networkId: string, msg: ArrayBuffer) => void--><!--Device-conversation-type DataCallback = (networkId: string, msg: ArrayBuffer) => void-End-->

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | NetworkId of the source device that sent the message. |
| msg | ArrayBuffer | Yes | Message content received as a string. |

