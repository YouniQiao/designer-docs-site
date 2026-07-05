# MediaSourceLoadingRequest

The MediaSourceLoadingRequest class defines a loading request object. Applications use this object to obtain the location of the requested resource and to interact with the player for data exchange.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.Core

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## finishLoading

```TypeScript
finishLoading(uuid: long, state: LoadingRequestError): void
```

Notifies the player of the current request status. After pushing all the data for a single resource, the application should send the **LOADING_ERROR_SUCCESS** state to notify the player that the resource push is complete.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | long | Yes | ID for the resource handle. The source is  [SourceOpenCallback](arkts-media-sourceopencallback-t.md#SourceOpenCallback). |
| state | LoadingRequestError | Yes | Request status. |

## respondData

```TypeScript
respondData(uuid: number, offset: number, buffer: ArrayBuffer): number
```

Sends data to the player.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | number | Yes | ID for the resource handle. The source is  [SourceOpenCallback](arkts-media-sourceopencallback-t.md#SourceOpenCallback). |
| offset | number | Yes | Offset of the current media data relative to the start of the resource. The value  cannot be less than 0. |
| buffer | ArrayBuffer | Yes | Media data sent to the player. Note: Do not transmit irrelevant data, as  it can affect normal data parsing and playback. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of bytes received by the server.  - A return value less than 0 indicates failure.  - A return value of -2 indicates that the player no longer needs the current data, and the client should stop  the current read process.  - A return value of -3 indicates that the player's buffer is full, and the client should wait for the next read. |

## respondData

```TypeScript
respondData(uuid: long, offset: long, buffer: ArrayBuffer): int | undefined
```

The interface for application used to send requested data to AVPlayer.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | long | Yes | ID for the resource handle. |
| offset | long | Yes | Offset of the current media data relative to the start of the resource. |
| buffer | ArrayBuffer | Yes | Media data sent to the player. |

**Return value:**

| Type | Description |
| --- | --- |
| int | - accept bytes for current read. The value less than zero means failed.  -2, means player need current data any more, the client should stop current read process.  -3, means player buffer is full, the client should wait for next read. |

## respondHeader

```TypeScript
respondHeader(uuid: long, header?: Record<string, string>, redirectUrl?: string): void
```

Sends response header information to the player. This API must be called before the first call to [respondData]media.MediaSourceLoadingRequest.respondData(uuid: number, offset: number, buffer: ArrayBuffer).

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | long | Yes | ID for the resource handle. The source is  [SourceOpenCallback](arkts-media-sourceopencallback-t.md#SourceOpenCallback). |
| header | Record&lt;string, string> | No |  |
| redirectUrl | string | No |  |

## header

```TypeScript
header?: Record<string, string>
```

HTTP request header. If the header exists, the application should set the header information in the HTTP request when downloading data.

**Type:** Record<string, string>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

## url

```TypeScript
url: string
```

Resource URL, which is the path to the resource that the application needs to open.

**Type:** string

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Media.Core

