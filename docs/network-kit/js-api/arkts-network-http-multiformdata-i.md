# MultiFormData

Represents the properties of a form object.

**Since:** 12

<!--Device-http-export interface MultiFormData--><!--Device-http-export interface MultiFormData-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@kit.NetworkKit';
```

## contentType

```TypeScript
contentType: string
```

Content type of the data field.

**Type:** string

**Since:** 12

<!--Device-MultiFormData-contentType: string--><!--Device-MultiFormData-contentType: string-End-->

**System capability:** SystemCapability.Communication.NetStack

## data

```TypeScript
data?: string | Object | ArrayBuffer
```

This parameter sets a mime part's body content from memory data.

**Type:** string | Object | ArrayBuffer

**Since:** 12

<!--Device-MultiFormData-data?: string | Object | ArrayBuffer--><!--Device-MultiFormData-data?: string | Object | ArrayBuffer-End-->

**System capability:** SystemCapability.Communication.NetStack

## filePath

```TypeScript
filePath?: string
```

This parameter sets a mime part's body content from the file's contents.This is an alternative to curl_mime_data for setting data to a mime part.If data is empty, filePath must be set.If data has a value, filePath does not take effect.

**Type:** string

**Since:** 12

<!--Device-MultiFormData-filePath?: string--><!--Device-MultiFormData-filePath?: string-End-->

**System capability:** SystemCapability.Communication.NetStack

## name

```TypeScript
name: string
```

MIME name for the data field.

**Type:** string

**Since:** 12

<!--Device-MultiFormData-name: string--><!--Device-MultiFormData-name: string-End-->

**System capability:** SystemCapability.Communication.NetStack

## remoteFileName

```TypeScript
remoteFileName?: string
```

Remote file name for the data field.

**Type:** string

**Since:** 12

<!--Device-MultiFormData-remoteFileName?: string--><!--Device-MultiFormData-remoteFileName?: string-End-->

**System capability:** SystemCapability.Communication.NetStack

