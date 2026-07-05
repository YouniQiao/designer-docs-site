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
| <!--DelRow-->[decodeImage](arkts-metadatabinding-decodeimage-f-sys.md#decodeImage-1) | Decodes the information carried in the image. This API uses a promise to return the result. |
| <!--DelRow-->[encodeImage](arkts-metadatabinding-encodeimage-f-sys.md#encodeImage-1) | Encodes metadata into an image. This API uses a promise to return the result. |
| <!--DelRow-->[notifyMetadataBindingEvent](arkts-metadatabinding-notifymetadatabindingevent-f-sys.md#notifyMetadataBindingEvent-1) | Transfers metadata to the application or service that calls the encoding API. This API uses a promise to return the result. |
| [off](arkts-metadatabinding-off-f.md#off-1) | Unsubscribes from system events that are used to obtain the encoded metadata. The respective callback will be unregistered. |
| [offOperationSubmitMetadata](arkts-metadatabinding-offoperationsubmitmetadata-f.md#offOperationSubmitMetadata-1) | Unsubscribes from system events that are used to obtain the encoded metadata. |
| [on](arkts-metadatabinding-on-f.md#on-1) | Subscribes to a system event to obtain the encoded metadata. The application needs to register a callback to return the encoded metadata when the registered system event occurs. |
| [onOperationSubmitMetadata](arkts-metadatabinding-onoperationsubmitmetadata-f.md#onOperationSubmitMetadata-1) | Subscribes to a system event to obtain the encoded metadata. |
| [submitMetadata](arkts-metadatabinding-submitmetadata-f.md#submitMetadata-1) | Transfers the metadata to be encoded to the MSDP. The MSDP determines whether to transfer the metadata to the system application or service that calls the encoding API. |

