# UploadConfig

上传任务的配置信息。

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## begins

```TypeScript
begins?: long
```

上传任务开始时读取的文件起点，单位为字节（B）。默认值为0，取值范围为闭区间，表示从头开始传输。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.MiscServices.Upload

## data

```TypeScript
data: Array<RequestData>
```

请求的表单数据。

**Type:** Array<RequestData>

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

## method

```TypeScript
method: string
```

HTTP请求方法：POST、PUT，缺省为POST。使用POST新增资源，使用PUT修改资源。

**Type:** string

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

## ends

```TypeScript
ends?: long
```

上传任务结束时读取的文件终点，单位为字节（B）。默认值为-1，取值范围为闭区间，表示传输到整个文件末尾结束。

**Type:** long

**Since:** 11

**System capability:** SystemCapability.MiscServices.Upload

## files

```TypeScript
files: Array<File>
```

要上传的文件列表。文件以HTTP的multipart/form-data格式提交。

**Type:** Array<File>

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

## index

```TypeScript
index?: int
```

任务的路径索引，默认值为0。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.MiscServices.Upload

## header

```TypeScript
header: Object
```

添加要包含在上传请求中的HTTP或HTTPS标志头。

**Type:** Object

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

```TypeScript
header: Record<string, string>
```

Adds an HTTP or HTTPS header to be included with the upload request.

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.MiscServices.Upload

## url

```TypeScript
url: string
```

资源地址。从API 6到API 14，最大长度为2048个字符；从API 15开始，最大长度为8192个字符。支持 [HTTP拦截](docroot://basic-services/request/app-file-upload-download.md#http拦截)功能。

**Type:** string

**Since:** 6

**System capability:** SystemCapability.MiscServices.Upload

