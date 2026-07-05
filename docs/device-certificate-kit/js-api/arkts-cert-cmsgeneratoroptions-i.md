# CmsGeneratorOptions

表示生成CMS消息的配置选项。

**Since:** 18

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## contentDataFormat

```TypeScript
contentDataFormat?: CmsContentDataFormat
```

内容数据的格式。默认为CmsContentDataFormat.BINARY。

**Type:** CmsContentDataFormat

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## isDetached

```TypeScript
isDetached?: boolean
```

Cms最终数据是否不包含原始数据。默认为false。true为不包含，false为包含。

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

## outFormat

```TypeScript
outFormat?: CmsFormat
```

Cms最终数据的输出格式。默认为DER。

**Type:** CmsFormat

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

