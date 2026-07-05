# NetworkState

```TypeScript
enum NetworkState
```

播放器的网络状态。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## EMPTY

```TypeScript
EMPTY = 0
```

播放器还没有开始下载数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## IDLE

```TypeScript
IDLE = 1
```

播放器网络状态空闲，比如媒体分片下载完成，下一个分片还没有开始下载。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## LOADING

```TypeScript
LOADING = 2
```

播放器正在下载媒体数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## NETWORK_ERROR

```TypeScript
NETWORK_ERROR = 3
```

发生了网络错误。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

