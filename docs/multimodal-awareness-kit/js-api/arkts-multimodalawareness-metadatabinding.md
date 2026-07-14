# @ohos.multimodalAwareness.metadataBinding

The **metadataBinding** module provides metadata binding–specific functions such as metadata transfer, event subscription, and event unsubscription.

**Since:** 18

**System capability:** SystemCapability.MultimodalAwareness.MetadataBinding

## Modules to Import

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-multimodalawareness-off-f.md#off-1) | Unsubscribes from system events that are used to obtain the encoded metadata. The respective callback will be unregistered. |
| [on](arkts-multimodalawareness-on-f.md#on-1) | Subscribes to a system event to obtain the encoded metadata. The application needs to register a callback to return the encoded metadata when the registered system event occurs. |
| [submitMetadata](arkts-multimodalawareness-submitmetadata-f.md#submitmetadata-1) | Transfers the metadata to be encoded to the MSDP. The MSDP determines whether to transfer the metadata to the system application or service that calls the encoding API. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [decodeImage](arkts-multimodalawareness-decodeimage-f-sys.md#decodeimage-1) | Decodes the information carried in the image. This API uses a promise to return the result. |
| [encodeImage](arkts-multimodalawareness-encodeimage-f-sys.md#encodeimage-1) | Encodes metadata into an image. This API uses a promise to return the result. |
| [notifyMetadataBindingEvent](arkts-multimodalawareness-notifymetadatabindingevent-f-sys.md#notifymetadatabindingevent-1) | Transfers metadata to the application or service that calls the encoding API. This API uses a promise to return the result. |
<!--DelEnd-->

