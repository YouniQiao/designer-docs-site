# SourceOpenCallback

```TypeScript
type SourceOpenCallback = (request: MediaSourceLoadingRequest) => number
```

This callback function is implemented by applications to handle resource open requests and return a unique handle
for the opened resource.

> **NOTE**
>
> The client must return the handle immediately after processing the request.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| request | MediaSourceLoadingRequest | Yes | Parameters for the resource open request, including detailedinformation about the requested resource and the data push method. |

**Return value:**

| Type | Description |
| --- | --- |
| long | Handle for the current resource open request. A value greater than 0 means the request issuccessful, whereas a value less than or equal to 0 means it fails.<br> - The handle for the request object is unique. |

