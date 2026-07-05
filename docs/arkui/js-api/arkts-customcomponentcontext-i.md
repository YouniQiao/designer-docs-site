# CustomComponentContext

`CustomComponentContext`类提供对组件级服务的访问，包括复用池。通过 [UIUtils.getCustomComponentContext](arkts-uiutils-c.md#getCustomComponentContext)获取实例。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## getReusePool

```TypeScript
getReusePool(): IReusePool | undefined
```

返回该自定义组件拥有的全局复用池。如果组件没有通过`reusePool`和`poolAccepts`配置复用池，则返回`undefined`。配置全局复用池方式请参考 [全局复用开发指南](docroot://ui/state-management/arkts-global-reuse-pool.md)。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| IReusePool | If a global reuse pool is configured for the current component, the reuse pool  information is returned. Otherwise, undefined is returned. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

@ReusableV2
@ComponentV2
struct ReusableChild {
  build() {
    Text('ReusableChild')
  }
}

@Entry
@ComponentV2({ reusePool: 'perInstance', poolAccepts: [ReusableChild], freezeWhenInactive: false })
struct PoolOwner {
  checkPool() {
    const pool = UIUtils.getCustomComponentContext(this).getReusePool();
    if (pool) {
      console.info('Global reuse pool configured.');
    } else {
      console.info('No global reuse pool configured.');
    }
  }

  build() {
    Column() {
      ReusableChild()
      Button('Check Pool')
        .onClick(() => {
          this.checkPool();
        })
    }
  }
}

```

