# MatchResult

表示敏感内容的识别结果。

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## Modules to Import

```TypeScript
import { identifySensitiveContent } from '@kit.DataProtectionKit';
```

## matchContent

```TypeScript
readonly matchContent: string
```

表示匹配到的敏感内容片段，即文件中实际匹配到关键字或正则表达式的文本内容。

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## sensitiveLabel

```TypeScript
readonly sensitiveLabel: string
```

表示识别策略的标签，与输入策略中的sensitiveLabel对应，用于标识匹配结果对应的识别策略。

**Type:** string

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

## matchNumber

```TypeScript
readonly matchNumber: number
```

表示匹配内容的总数。

**Type:** number

**Since:** 21

**System capability:** SystemCapability.Security.DataLossPrevention

