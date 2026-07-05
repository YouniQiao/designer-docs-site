# ArcAlphabetIndexerInitInfo

定义弧形字母索引条的初始化参数。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcAlphabetIndexerAttribute,ArcAlphabetIndexer } from '@kit.ArkUI';
```

## arrayValue

```TypeScript
arrayValue: string[]
```

字母索引字符串数组，不可设置为空。

**Type:** string[]

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## selected

```TypeScript
selected: number
```

初始选中项索引值，若超出索引值范围，则取默认值0。 该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md)双向绑定变量。

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

