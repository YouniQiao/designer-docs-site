# PathSeparatorStrategy

```TypeScript
export enum PathSeparatorStrategy
```

PathSeparatorStrategy作为[Options]zlib.Options的一个属性，用于指定解压时目标压缩包内文件路径中分隔符的处理策略。

**Since:** 21

**System capability:** SystemCapability.BundleManager.Zlib

## PATH_SEPARATOR_STRATEGY_DEFAULT

```TypeScript
PATH_SEPARATOR_STRATEGY_DEFAULT = 0
```

默认值，压缩包内文件路径中的分隔符不做处理。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

## PATH_SEPARATOR_STRATEGY_REPLACE_BACKSLASH

```TypeScript
PATH_SEPARATOR_STRATEGY_REPLACE_BACKSLASH = 1
```

压缩包内文件路径中的反斜杠'\'替换为斜杠'/'。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

