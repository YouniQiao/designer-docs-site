# UploadProgressCallback

```TypeScript
export type UploadProgressCallback = (uploadedSize: long, totalSize: long) => void
```

The callback function for the download progress event.

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uploadedSize | long | Yes | the length of uploaded data, in bytes |
| totalSize | long | Yes | the length of data expected to be uploaded, in bytes. |

