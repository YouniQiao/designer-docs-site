# Privilege

指定的端云共享数据的权限。

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { cloudData } from '@kit.ArkData';
```

## shareable

```TypeScript
shareable?: boolean
```

被共享者是否可将共享的数据再次共享给其他参与者。true表示可再次共享，false表示不可再次共享，默认不可再次共享。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## readable

```TypeScript
readable?: boolean
```

被共享者是否可读取共享的数据。true表示可读取，false表示不可读取，默认不可读取

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## deletable

```TypeScript
deletable?: boolean
```

被共享者是否可删除共享的数据。true表示可删除，false表示不可删除，默认不可删除。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## creatable

```TypeScript
creatable?: boolean
```

被共享者是否可创建新的共享数据。true表示可创建，false表示不可创建，默认不可创建。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

## writable

```TypeScript
writable?: boolean
```

被共享者是否可修改共享的数据。true表示可修改，false表示不可修改，默认不可修改。

**Type:** boolean

**Since:** 11

**System capability:** SystemCapability.DistributedDataManager.CloudSync.Client

**System API:** This is a system API.

