# ObservedResult

Provides the result of whether the object can be observed.

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@ohos.arkui.StateManagement';
```

## decoratorInfo

```TypeScript
decoratorInfo: Array<DecoratorInfo>
```

Decorator and component information associated with the observable object. If the object cannot be observed, the array is empty.

**Type:** Array<DecoratorInfo>

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isObserved

```TypeScript
isObserved: boolean
```

Whether an object can be observed. **true**: The object can be observed. **false**: The object cannot be observed.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## reason

```TypeScript
reason: string
```

Reason for the object's observability. For the object that cannot be observed: The object itself cannot be observed. For the object that can be observed: 1. The V1 object is decorated by the [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) decorator or the object is converted by the [makeV1Observed](arkts-arkui-uiutils-c.md#makev1observed-1) method. 2. The V1 object is decorated by the [@Observed](../../../../ui/state-management/arkts-observed-and-objectlink.md) decorator or the object is converted by the [makeV1Observed](arkts-arkui-uiutils-c.md#makev1observed-1) method, but the object is not used by the UI component. 3. The V1 object is converted by the [enableV2Compatibility](arkts-arkui-uiutils-c.md#enablev2compatibility-1) method and then passed to the V2 component. 4. The V1 object is converted by the [enableV2Compatibility](arkts-arkui-uiutils-c.md#enablev2compatibility-1) method and then passed to the V2 component, but is not used by the V2 component. 5. The V2 object is decorated by the [@ObservedV2 or @Trace](../../../../ui/state-management/arkts-new-observedV2-and-trace.md) decorator. 6. The V2 object is converted by the [makeObserved](arkts-arkui-uiutils-c.md#makeobserved-1) method. 7. The V2 object is of the Array, Map, Set, or Date type. 8. The V2 object is decorated by the [@ObservedV2 or @Trace](../../../../ui/state-management/arkts-new-observedV2-and-trace.md) decorator, but is not used by the UI component. 9. The V2 object is converted by the [makeObserved](arkts-arkui-uiutils-c.md#makeobserved-1) method, but the object is not used by the UI component. 10. The V2 object is of the Array, Map, Set, or Date type, but is not used by the UI component.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

