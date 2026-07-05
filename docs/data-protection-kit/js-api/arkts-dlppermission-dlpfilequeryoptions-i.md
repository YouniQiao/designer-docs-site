# DlpFileQueryOptions

表示企业DLP文件的查询选项。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## classificationLabel

```TypeScript
classificationLabel?: string
```

表示企业DLP文件的用户定义分类标签。默认为空。最大长度为255字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

