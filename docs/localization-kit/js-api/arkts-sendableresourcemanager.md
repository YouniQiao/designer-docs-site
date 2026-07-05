# @ohos.sendableResourceManager

资源管理导入sendableResourceManager模块，通过调用 [resourceToSendableResource]{@link sendableResourceManager.resourceToSendableResource}和 [sendableResourceToResource]{@link sendableResourceManager.sendableResourceToResource}方法可以将 [Resource]{@link sendableResourceManager.Resource}对象和 [SendableResource]{@link sendableResourceManager.resourceToSendableResource}对象进行互转。 Resource对象通过转换为SendableResource对象后，可以被[Sendable类](docroot://arkts-utils/arkts-sendable.md)持有。Sendable类在跨线程传输后，取出持有的 SendableResource对象转为Resource对象，作为参数获取资源。

**Since:** 12

**System capability:** SystemCapability.Global.ResourceManager

## Modules to Import

```TypeScript
import { sendableResourceManager } from '@kit.LocalizationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [resourceToSendableResource](arkts-sendableresourcemanager-resourcetosendableresource-f.md#resourceToSendableResource-1) | 将Resource对象转换为SendableResource对象。 |
| [sendableResourceToResource](arkts-sendableresourcemanager-sendableresourcetoresource-f.md#sendableResourceToResource-1) | 将SendableResource对象转换为Resource对象。 |

### Types

| Name | Description |
| --- | --- |
| [Resource](arkts-sendableresourcemanager-resource-t.md) | 表示Resource资源信息。 |
| [SendableResource](arkts-sendableresourcemanager-sendableresource-t.md) | 表示SendableResource资源信息。 |

