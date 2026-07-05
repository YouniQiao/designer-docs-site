# DecoratorInfo

可被观察对象关联的装饰器和组件信息。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## stateVariableName

```TypeScript
stateVariableName: string
```

被装饰器装饰的属性名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dependentInfo

```TypeScript
dependentInfo: Array<ElementInfo>
```

使用该可观察对象的组件信息。若对象没有用在任何UI上，则返回空数组。

**Type:** Array<ElementInfo>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoratorName

```TypeScript
decoratorName: string
```

当对象是V1对象时，值是对象关联的装饰器名称。 当V1对象使用[@Track](docroot://ui/state-management/arkts-track.md)时，值为：'@Track'。 当V2对象使用[@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)时，值为：'@Trace'。 当V2对象使用[makeObserved](arkts-uiutils-c.md#makeObserved)时，值为：'MakeObserved'。 当V2对象使用[enableV2Compatibility](arkts-uiutils-c.md#enableV2Compatibility)时，值为：'EnableV2Compatible'。 当V2对象使用built-in类型数据时，值为：'ProxyObservedV2'。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## owningComponentId

```TypeScript
owningComponentId: number
```

V1对象返回被使用的组件id。 **V1对象有属性使用[@Track](docroot://ui/state-management/arkts-track.md)装饰器时和V2对象返回的是对象名称，无组件id，返回-1。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## owningComponentOrClassName

```TypeScript
owningComponentOrClassName: string
```

V1对象返回被使用的组件名称。 V1对象有属性使用[@Track](docroot://ui/state-management/arkts-track.md)装饰器时返回对象名称。 V2对象返回对象名称。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

