# CustomProperty

表示自定义策略。

**Since:** 20

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## enterprise

```TypeScript
enterprise: string
```

表示企业定制策略的JSON字符串。长度不超过2<sup>22</sup>字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 20

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## options

```TypeScript
options?: DlpFileQueryOptions
```

企业DLP文件的查询选项，默认为空。

**Type:** DlpFileQueryOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

