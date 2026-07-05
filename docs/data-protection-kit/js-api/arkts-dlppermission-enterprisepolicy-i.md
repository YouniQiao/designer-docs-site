# EnterprisePolicy

表示企业定制策略。

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## policyString

```TypeScript
policyString: string
```

表示企业定制策略的JSON字符串。长度不超过2<sup>22</sup>字节，超出此范围抛出错误码19100001。

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

