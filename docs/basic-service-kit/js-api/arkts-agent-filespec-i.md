# FileSpec

表单项的文件信息。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## path

```TypeScript
path: string
```

文件路径。 - 相对路径，位于调用方的缓存路径下。 例如："./xxx/yyy/zzz.html"、"xxx/yyy/zzz.html"。 - internal协议路径，支持"internal://"及其子路径。internal为调用方（即传入的context）对应路径，"internal://cache"对应context.cacheDir。 例如："internal://cache/path/to/file.txt"。 - 应用沙箱目录，只支持到base及其子目录下。 例如："/data/storage/el1/base/path/to/file.txt"。 - file协议路径，必须匹配应用包名，只支持到base及其子目录下。 例如："file://com.example.test/data/storage/el2/base/file.txt"。 - 用户公共文件，仅支持上传任务。 例如："file://media/Photo/path/to/file.img"。仅支持前台任务。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## filename

```TypeScript
filename?: string
```

文件名，默认值通过路径获取。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## extras

```TypeScript
extras?: object
```

文件信息的附加内容，该参数不会体现在HTTP请求中。默认值为空。

**Type:** object

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

```TypeScript
extras?: Record<string, string>
```

The extras for the file information.

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.Request.FileTransferAgent

## mimeType

```TypeScript
mimeType?: string
```

文件的mimeType，通过文件名获取，默认值为文件名后缀。 从 API version 18 开始废弃，建议使用contentType替代。

**Type:** string

**Since:** 10

**Deprecated since:** 18

**Substitute:** request.agent.FileSpec.contentType

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Request.FileTransferAgent

## contentType

```TypeScript
contentType?: string
```

文件内容类型，默认值为文件名后缀。该选项会被填写到HTTP表单指定的Content-Type字段中。

**Type:** string

**Since:** 18

**System capability:** SystemCapability.Request.FileTransferAgent

