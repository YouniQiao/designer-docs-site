# CacheDownloadOptions

Provides configuration options for download and cache, including HTTP options, transmission options, and task options.

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { cacheDownload } from '@ohos.request.cacheDownload';
```

## caPath

```TypeScript
caPath?: string
```

CA certificate path. Currently, only the .pem certificate is supported. The CA certificate preset by the system is used by default.

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Request.FileTransferAgent

## cacheStrategy

```TypeScript
cacheStrategy?: CacheStrategy
```

Cache update strategies, including **FORCE** or **LAZY**. The **FORCE** policy is used by default.

**Type:** CacheStrategy

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## headers

```TypeScript
headers?: Record<string, string>
```

Request header used by a download task during HTTP transfer. The default value is empty.

**Type:** Record<string, string>

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

## retry

```TypeScript
retry?: RetryOptions
```

Task retry configuration.

**Type:** RetryOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Request.FileTransferAgent

## sslType

```TypeScript
sslType?: SslType
```

Secure communication protocol, such as TSL or TLCP. TLS is used by default. Currently, TLS and TLCP do not support two-way authentication.

**Type:** SslType

**Since:** 21

**System capability:** SystemCapability.Request.FileTransferAgent

## timeout

```TypeScript
timeout?: TimeoutOptions
```

Task timeout configuration.

**Type:** TimeoutOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Request.FileTransferAgent

