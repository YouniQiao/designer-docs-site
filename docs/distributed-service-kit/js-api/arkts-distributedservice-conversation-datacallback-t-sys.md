# DataCallback (System API)

```TypeScript
type DataCallback = (networkId: string, msg: ArrayBuffer) => void
```

Defines a callback for receiving data.

**Since:** 26.1.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-conversation-type DataCallback = (networkId: string, msg: ArrayBuffer) => void--><!--Device-conversation-type DataCallback = (networkId: string, msg: ArrayBuffer) => void-End-->

**System capability:** SystemCapability.Communication.SoftBus.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| networkId | string | Yes | Network ID of the source device that sends data.  |
| msg | ArrayBuffer | Yes | Message received, which is binary data in **ArrayBuffer** format. The data format is the same as that of the data sent and is defined by the application layer protocol.  |

