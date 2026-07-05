# CacheDownloadOptions

缓存下载的配置选项。包括HTTP选项、传输选项和任务选项。

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { cacheDownload } from '@kit.BasicServicesKit';
```

## headers

```TypeScript
headers?: Record<string, string>
```

缓存下载任务在HTTP传输时使用的请求头。默认值为空。

**Type:** Record<string, string>

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

## sslType

```TypeScript
sslType?: SslType
```

使用安全通信协议TLS或TLCP，默认使用TLS。当前TLS和TLCP均不支持双向认证。

**Type:** SslType

**Since:** 21

**System capability:** SystemCapability.Request.FileTransferAgent

## cacheStrategy

```TypeScript
cacheStrategy?: CacheStrategy
```

使用缓存刷新策略FORCE或LAZY，默认使用FORCE。

**Type:** CacheStrategy

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## timeout

```TypeScript
timeout?: TimeoutOptions
```

Task timeout configuration.

**Type:** TimeoutOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Request.FileTransferAgent

## retry

```TypeScript
retry?: RetryOptions
```

Task retry configuration.

**Type:** RetryOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Request.FileTransferAgent

## caPath

```TypeScript
caPath?: string
```

CA证书路径。目前仅支持.pem格式证书，默认使用系统预设的CA证书。

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Request.FileTransferAgent

