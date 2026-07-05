# @ohos.file.hash

该模块提供文件哈希处理能力，对文件内容进行哈希处理。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { hash } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createHash](arkts-hash-createhash-f.md#createHash-1) | 创建并返回 HashStream 对象，该对象可用于使用给定的 algorithm 生成哈希摘要。 |
| [hash](arkts-hash-f.md#hash-1) | 计算文件的哈希值，使用Promise异步回调。 |
| [hash](arkts-hash-f.md#hash-2) | 计算文件的哈希值，使用callback异步回调。 |

### Classes

| Name | Description |
| --- | --- |
| [HashStream](arkts-hash-hashstream-c.md) | HashStream 类是用于创建数据的哈希摘要的实用工具。由 [createHash]{@link hash.createHash} 接口获得。 |

