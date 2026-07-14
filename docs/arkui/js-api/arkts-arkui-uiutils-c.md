# UIUtils

Provides APIs for handling data transformations related to state management.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding, ComponentReuse, CustomComponentLifecycleState, ComponentInactive, PersistenceV2, ComponentDisappear, MutableBinding, CustomComponentLifecycleObserver, AppStorageV2, Type, ConnectOptionsCollections, CollectionType, CustomComponentContext, IReusePool, ConnectOptions, UIUtils, ComponentActive, CustomComponentLifecycle, ComponentInit, ComponentAppear, ComponentBuilt, ComponentRecycle, IReusableInfo } from '@kit.ArkUI';
```

## addMonitor

```TypeScript
static addMonitor(target: object, path: string | string[], monitorCallback: MonitorCallback, options?: MonitorOptions): void
```

Dynamically adds a listener to the state variable of state management V2. For details, see [addMonitor and clearMonitor APIs: Dynamically Adding and Removing Listeners](../../../../ui/state-management/arkts-new-addMonitor-clearMonitor.md).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | object | Yes | Target object. Only[@ComponentV2](../../../../ui/state-management/arkts-create-custom-components.md#componentv2) and[@ObservedV2](../../../../ui/state-management/arkts-new-observedV2-and-trace.md) instances are supported.<br>If an unsupported type is provided, a runtime error is thrown. |
| path | string \| string[] | Yes | Name path of the variable to be listened for. You can specify a path or pass astring array to specify multiple variable paths to be listened for at a time.<br>Only string and string array are supported. If an unsupported type is provided, a runtime error is thrown. |
| monitorCallback | MonitorCallback | Yes | Listener function registered with the corresponding state variable.That is, when the state variable corresponding to the path changes, a specific function is called.<br>If an unsupported type is provided, a runtime error is thrown. |
| options | MonitorOptions | No | Configuration item of the listener. For details, see[MonitorOptions](arkts-arkui-monitoroptions-i.md). By default, the asynchronous callback is used. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [130000](../errorcode-stateManagement.md#130000-invalid-target-object-for-addmonitorclearmonitor) | The target is not a custom component instance or V2 class instance. |
| [130001](../errorcode-stateManagement.md#130001-invalid-path-for-addmonitorclearmonitor) | The path is invalid. |
| [130002](../errorcode-stateManagement.md#130002-invalid-callback-for-addmonitorclearmonitor) | monitorCallback is not a function or an anonymous function. |

## applySync

```TypeScript
static applySync<T>(task: TaskCallback): T
```

Synchronously updates a specified state variable. This API receives a closure function and updates only the internal modifications, including the updates of [@Computed](../../../../ui/state-management/arkts-new-computed.md) and [@Monitor](../../../../ui/state-management/arkts-new-monitor.md) decorators, and re-rendering of the UI nodes. For details, see [applySync/flushUpdates/flushUIUpdates APIs: Synchronous Update](../../../../ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md).

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | TaskCallback | Yes | Closure function. The state variable modification generated in the closure will beexecuted synchronously. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Return value obtained by executing the closure function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [140001](../errorcode-stateManagement.md#140001-invalid-invocation-of-applysync-flushupdates-or-flushuiupdates) | The function is not allowed to be called in @Computed |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

@Entry
@ComponentV2
struct Index {
  @Local w: number = 50; // Width.
  @Local h: number = 50; // Height.
  @Local message: string = 'Hello';

  build() {
    Column() {
      Button('change size')
        .margin(20)
        .onClick(() => {
          // Values are changed additionally before the animation is executed.
          UIUtils.applySync(() => {
            this.w = 100;
            this.h = 100;
            this.message = 'Hello World';
          });
          // The size of the column box gradually changes from (100 × 100) to (200 × 200) within 1s, and the text in the box changes to "Hello ArkUI".
          this.getUIContext().animateTo({
            duration: 1000
          }, () => {
            console.info(`animateTo-in, w=${this.w}, h=${this.h}`);
            this.w = 200;
            this.h = 200;
            this.message = 'Hello ArkUI';
            console.info(`animateTo-out, w=${this.w}, h=${this.h}`);
          });
        })
      // Column box.
      Column() {
        Text(`${this.message}`)
      }
      .backgroundColor('#ff17a98d')
      .width(this.w)
      .height(this.h)
    }
  }
}

```

## canBeObserved

```TypeScript
static canBeObserved<T extends object>(source: T): ObservedResult
```

Determines whether a data object can be observed and returns the observation result. For details, see [canBeObserved API: Determining Whether an Object Can Be Observed](../../../../ui/state-management/arkts-new-canBeObserved.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | Data object to be determined. Array, Map, Set, and Date types are supported.<br>For details, see[canBeObserved API: Determining Whether an Object Can Be Observed](../../../../ui/state-management/arkts-new-canBeObserved.md). |

**Return value:**

| Type | Description |
| --- | --- |
| ObservedResult | Returns a result about whether the object can be observed. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';
import { DecoratorInfo, ElementInfo } from '@ohos.arkui.StateManagement';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = 'CanBeObserved';

class Student {
  public name?: string;

  constructor(name?: string) {
    this.name = name ?? '';
  }

  // Provide a method in the object to determine whether the object can be observed.
  test(): void {
    const result = UIUtils.canBeObserved(this);
    // Whether the object can be observed.
    const isObserved = result.isObserved;
    hilog.info(0x00, TAG, `isObserved: ${JSON.stringify(isObserved)}`);
    // Reason for the object's observability.
    const reason = result.reason;
    hilog.info(0x00, TAG, `reason: ${reason}`);
    // Decorator information associated with the observable object.
    const decoratorInfoArr = result.decoratorInfo;
    decoratorInfoArr.forEach((decorator: DecoratorInfo) => {
      // Decorator name.
      const decoratorName = decorator.decoratorName;
      hilog.info(0x00, TAG, `decoratorName: ${decoratorName}`);
      // Name of the attribute decorated by the decorator.
      const stateVariableName = decorator.stateVariableName;
      hilog.info(0x00, TAG, `stateVariableName: ${stateVariableName}`);
      // Name of the component where the decorator is located.
      const owningName = decorator.owningComponentOrClassName;
      hilog.info(0x00, TAG, `owningComponentOrClassName: ${owningName}`);
      // ID of the component where the decorator is located.
      const owningId = decorator.owningComponentId;
      hilog.info(0x00, TAG, `owningComponentId: ${owningId}`);
      // Information about the component associated with the decorator.
      const dependentInfo = decorator.dependentInfo;
      dependentInfo.forEach((elementInfo: ElementInfo) => {
        // Name of the component associated with the decorator.
        const eleName = elementInfo.elementName;
        hilog.info(0x00, TAG, `elementName: ${eleName}`);
        // ID of the component associated with the decorator.
        const eleId = elementInfo.elementId;
        hilog.info(0x00, TAG, `elementId: ${eleId}`);
      });
    });
  }
}

@Entry
@Component
struct Index {
  @State student: Student = new Student('LiMei');

  build() {
    Column({ space: 20 }) {
      Classroom({ student: this.student })
      Home({ student: this.student })
      Button('test')
        .onClick(() => {
          // You can use this API on any page to determine whether the current object can be observed.
          this.student.test();
        })
    }
    .height('100%')
    .width('100%')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
  }
}

@Component
export struct Classroom {
  @State student: Student = new Student();

  build() {
    Column() {
      Text('Classroom ' + this.student.name)
      School({ student: this.student })
    }
  }
}

@Component
export struct Home {
  @State student: Student = new Student();

  build() {
    Column() {
      Text('Home ' + this.student.name)
    }
  }
}

@Component
export struct School {
  @State student: Student = new Student();

  build() {
    Column() {
      Text('School ' + this.student.name)
    }
  }
}

```

## clearMonitor

```TypeScript
static clearMonitor(target: object, path: string | string[], monitorCallback?: MonitorCallback) : void
```

Deletes the listener added to the state variable of the state management V2 by calling the [addMonitor](arkts-arkui-uiutils-c.md#addmonitor-1) API. For details, see [addMonitor and clearMonitor APIs: Dynamically Adding and Removing Listeners](../../../../ui/state-management/arkts-new-addMonitor-clearMonitor.md).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | object | Yes | Target object. Only[@ComponentV2](../../../../ui/state-management/arkts-create-custom-components.md#componentv2) and[@ObservedV2](../../../../ui/state-management/arkts-new-observedV2-and-trace.md) instances are supported.<br>If an unsupported type is provided, a runtime error is thrown. |
| path | string \| string[] | Yes | Name path of the variable to be deleted. You can specify a path or pass astring array to delete the listener functions of multiple state variables at a time.<br>Only string and string array are supported. If an unsupported type is provided, a runtime error is thrown. |
| monitorCallback | MonitorCallback | No | Listener function to be deleted.<br>If this parameter is not specified, all listener functions registered with the variable corresponding tothe path will be deleted.<br>If an unsupported type is provided, a runtime error is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [130000](../errorcode-stateManagement.md#130000-invalid-target-object-for-addmonitorclearmonitor) | The target is not a custom component instance or V2 class instance. |
| [130001](../errorcode-stateManagement.md#130001-invalid-path-for-addmonitorclearmonitor) | The path is invalid. |
| [130002](../errorcode-stateManagement.md#130002-invalid-callback-for-addmonitorclearmonitor) | monitorCallback is not a function or an anonymous function. |

## enableV2Compatibility

```TypeScript
static enableV2Compatibility<T extends object>(source: T): T
```

Enables V1 state variables to be observable in @ComponentV2. This API is primarily used in scenarios where V1 and V 2 state management are mixed. For details, see [Mixed Use of State Management V1 and V2 (API Version 19 and Later)](../../../../ui/state-management/arkts-v1-v2-mixusage.md).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | Data source, which must be V1 state data. |

**Return value:**

| Type | Description |
| --- | --- |
| T | If the data source is V1 state data, returns data that can be observed in @ComponentV2; otherwise,returns the data source itself. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

@Observed
class ObservedClass {
  name: string = 'Tom';
}

@Entry
@Component
struct CompV1 {
  @State observedClass: ObservedClass = new ObservedClass();

  build() {
    Column() {
      Text(`@State observedClass: ${this.observedClass.name}`)
        .onClick(() => {
          this.observedClass.name = 'State'; // This will trigger a UI update.
        })
      // Enable the V2 observation capability for the V1 state variable.
      CompV2({ observedClass: UIUtils.enableV2Compatibility(this.observedClass) })
    }
  }
}

@ComponentV2
struct CompV2 {
  @Param observedClass: ObservedClass = new ObservedClass();

  build() {
    // After the V2 observation capability is enabled for the V1 state variable, the first-level changes can be observed in V2.
    Text(`@Param observedClass: ${this.observedClass.name}`)
      .onClick(() => {
        this.observedClass.name = 'Param'; // This will trigger a UI update.
      })
  }
}

```

## flushUIUpdates

```TypeScript
static flushUIUpdates(): void
```

Processes all state variable modifications before this API call and synchronizes the [dirty](../../../../ui/state-management/arkts-state-management-introduce.md#triggering-updates) UI nodes. However, it does not synchronize the execution of @Computed and @Monitor decorators. For details, see [applySync/flushUpdates/flushUIUpdates APIs: Synchronous Update](../../../../ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md).

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [140001](../errorcode-stateManagement.md#140001-invalid-invocation-of-applysync-flushupdates-or-flushuiupdates) | The function is not allowed to be called in @Computed |
| [140002](../errorcode-stateManagement.md#140002-invalid-invocation-of-flushupdates-or-flushuiupdates) | The function is not allowed to be called in @Monitor |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

@Entry
@ComponentV2
struct Index {
  @Local w: number = 50; // Width.
  @Local h: number = 50; // Height.
  @Local message: string = 'Hello';

  build() {
    Column() {
      Button('change size')
        .margin(20)
        .onClick(() => {
          // Values are changed additionally before the animation is executed.
          this.w = 100;
          this.h = 100;
          this.message = 'Hello World';
          // Immediately process the preceding state variable modifications and synchronize the dirty UI nodes.
          UIUtils.flushUIUpdates();
          // The size of the column box gradually changes from (100 × 100) to (200 × 200) within 1s, and the text in the box changes to "Hello ArkUI".
          this.getUIContext().animateTo({
            duration: 1000
          }, () => {
            console.info(`animateTo-in, w=${this.w}, h=${this.h}`);
            this.w = 200;
            this.h = 200;
            this.message = 'Hello ArkUI';
            console.info(`animateTo-out, w=${this.w}, h=${this.h}`);
          });
        })
      // Column box.
      Column() {
        Text(`${this.message}`)
      }
      .backgroundColor('#ff17a98d')
      .width(this.w)
      .height(this.h)
    }
  }
}

```

## flushUpdates

```TypeScript
static flushUpdates(): void
```

Synchronously updates all state variable modifications before this API call, including the updates of @Computed and @Monitor decorators, and re-rendering of the UI nodes. For details, see [applySync/flushUpdates/flushUIUpdates APIs: Synchronous Update](../../../../ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md).

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [140001](../errorcode-stateManagement.md#140001-invalid-invocation-of-applysync-flushupdates-or-flushuiupdates) | The function is not allowed to be called in @Computed |
| [140002](../errorcode-stateManagement.md#140002-invalid-invocation-of-flushupdates-or-flushuiupdates) | The function is not allowed to be called in @Monitor |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

@Entry
@ComponentV2
struct Index {
  @Local w: number = 50; // Width.
  @Local h: number = 50; // Height.
  @Local message: string = 'Hello';

  build() {
    Column() {
      Button('change size')
        .margin(20)
        .onClick(() => {
          // Values are changed additionally before the animation is executed.
          this.w = 100;
          this.h = 100;
          this.message = 'Hello World';
          UIUtils.flushUpdates();
          // The size of the column box gradually changes from (100 × 100) to (200 × 200) within 1s, and the text in the box changes to "Hello ArkUI".
          this.getUIContext().animateTo({
            duration: 1000
          }, () => {
            console.info(`animateTo-in, w=${this.w}, h=${this.h}`);
            this.w = 200;
            this.h = 200;
            this.message = 'Hello ArkUI';
            console.info(`animateTo-out, w=${this.w}, h=${this.h}`);
          });
        })
      // Column box.
      Column() {
        Text(`${this.message}`)
      }
      .backgroundColor('#ff17a98d')
      .width(this.w)
      .height(this.h)
    }
  }
}

```

## getCustomComponentContext

```TypeScript
static getCustomComponentContext<T extends BaseCustomComponent>(customComponent: T): CustomComponentContext
```

Obtains [CustomComponentContext](arkts-arkui-customcomponentcontext-i.md) of the given @Component(V1) or @ComponentV2. **CustomComponentContext** can be used to access the reuse pool of the component. For details about the reuse pool, see [Global Reuse: Centralized Component Recycling and Reuse](../../../../ui/state-management/arkts-global-reuse-pool.md).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customComponent | T | Yes | @Component or @ComponentV2 whose context is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| CustomComponentContext | Context object of the given component instance. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

@ReusableV2
@ComponentV2
struct ReusableChild {
  aboutToRecycle() {
    console.info('ReusableChild aboutToRecycle');
  }
  aboutToReuse() {
    console.info('ReusableChild aboutToReuse');
  }

  build() {
    Text('ReusableChild')
  }
}

@Entry
@ComponentV2({ 
  reusePool: 'shared', // Declare the shared global reuse pool.
  poolAccepts: [ReusableChild], // The global reuse pool accepts the child component type ReusableChild.
  freezeWhenInactive: false // Disable the component freezing feature. This parameter must be provided when reusePools is declared. You can also enable the component freezing feature.
})
struct Index {
  @Local showChild: boolean = true;

  inspectPool() {
    // Obtain CustomComponentContext of this component.
    const context = UIUtils.getCustomComponentContext(this);
    // Access the reuse pool through the context.
    const pool = context.getReusePool();
    if (pool) {
      const info = pool.getReusableInfo(ReusableChild);
      if (info && !Array.isArray(info)) {
        console.info(`ReusableChild in the pool: count=${info.count}, maxCount=${info.maxCount}`);
      }
    }
  }

  build() {
    Column() {
      Button('Switch Child Component')
        .onClick(() => { 
          this.showChild = !this.showChild;
        })
      Button('Check Pool')
        .onClick(() => {
          this.inspectPool();
        })
      if (this.showChild) {
        ReusableChild()
      }
    }
  }
}

```

## getLifecycle

```TypeScript
static getLifecycle<T extends BaseCustomComponent>(customComponent: T): CustomComponentLifecycle
```

Obtains the [lifecycle of a custom component](ComponentInit).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customComponent | T | Yes | Custom component instance. |

**Return value:**

| Type | Description |
| --- | --- |
| CustomComponentLifecycle | Lifecycle instance of a custom component obtained. |

**Example**

```TypeScript
import { UIUtils, ComponentAppear } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  @State lifecycleState: number = -1;

  @ComponentAppear
  myAppear() {
    // Obtain the lifecycle instance of a custom component through UIUtils.getLifecycle, and query the current lifecycle of the custom component through getCurrentState.
    // The expected lifecycle is CustomComponentLifecycleState.APPEARED = 1.
    this.lifecycleState = UIUtils.getLifecycle(this).getCurrentState();
  }

  build() {
    Text(`${this.lifecycleState}`)
  }
}

```

## getTarget

```TypeScript
static getTarget<T extends object>(source: T): T
```

Obtains the original object from a proxy object wrapped by the state management framework. For details, see [getTarget API: Obtaining Original Objects](../../../../ui/state-management/arkts-new-getTarget.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | Source object. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Original object of the source after the proxy added by the state management framework is removed. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

class NonObservedClass {
  name: string = 'Tom';
}

let nonObservedClass: NonObservedClass = new NonObservedClass();

@Entry
@Component
struct Index {
  @State someClass: NonObservedClass = nonObservedClass;

  build() {
    Column() {
      Text(`this.someClass === nonObservedClass: ${this.someClass === nonObservedClass}`) // false
      Text(`UIUtils.getTarget(this.someClass) === nonObservedClass: ${UIUtils.getTarget(this.someClass) ===
        nonObservedClass}`) // true
    }
  }
}

```

## makeBinding

```TypeScript
static makeBinding<T>(getter: GetterCallback<T>): Binding<T>
```

Creates a read-only one-way data binding instance, which is used to construct the arguments of the **Binding** type in the [\@Builder](../../../../ui/state-management/arkts-builder.md) function.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| getter | GetterCallback&lt;T&gt; | Yes | Callback used to obtain the value. Each value access triggers this functionto obtain the latest value. |

**Return value:**

| Type | Description |
| --- | --- |
| Binding&lt;T&gt; | Returns a read-only one-way data binding instance with a **value** attribute, which is usedto obtain the currently bound value. The value can only be read and cannot be directly modified. |

**Example**

```TypeScript
import { Binding, UIUtils } from '@kit.ArkUI';

@Builder
function CustomButton(num1: Binding<number>) {
  Row() {
    Button(`Custom Button: ${num1.value}`)
      .onClick(() => {
        // num1.value += 1; will throw an error because the Binding element does not support modification.
      })
  }
}

@Entry
@ComponentV2
struct CompV2 {
  @Local number1: number = 5;
  @Local number2: number = 10;

  build() {
    Column() {
      Text('parent component')

      CustomButton(
        /**
         * Creates a read-only binding instance.
         * @param getter - Function for returning this.number1.
         * @returns Read-only Binding<number> object.
         *
         * Features:
         * 1. The value is recalculated each time .value is accessed.
         * 2. The value cannot be directly modified.
         */
        UIUtils.makeBinding<number>(
          () => this.number1 // GetterCallback
        )
      )
    }
  }
}

```

## makeBinding

```TypeScript
static makeBinding<T>(getter: GetterCallback<T>, setter: SetterCallback<T>): MutableBinding<T>
```

Creates a mutable two-way data binding instance, which is used to construct the argument of the **MutableBinding** type in the \@Builder function.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| getter | GetterCallback&lt;T&gt; | Yes | Callback used to obtain the value. Each value access triggers this functionto obtain the latest value. |
| setter | SetterCallback&lt;T&gt; | Yes | Callback used to update the value. Each modification to **.value** triggersthis function. |

**Return value:**

| Type | Description |
| --- | --- |
| MutableBinding&lt;T&gt; | Returns a two-way data binding instance with a **value** attribute, which allows youto read and modify data. If the value is set, the system checks whether the value type matches the generic type**T**. |

**Example**

```TypeScript
import { Binding, MutableBinding, UIUtils } from '@kit.ArkUI';

@Builder
function CustomButton(num2: MutableBinding<number>) {
  Row() {
    Button(`Custom Button: ${num2.value}`)
      .onClick(() => {
        // MutableBinding type, which can be modified.
        num2.value += 1;
      })
  }
}

@Entry
@ComponentV2
struct CompV2 {
  @Local number1: number = 5;
  @Local number2: number = 10;

  build() {
    Column() {
      Text('parent component')

      CustomButton(
        /**
         * Creates a mutable binding.
         * @param getter - Function that returns this.number2.
         * @param setter - Callback called when the binding value is modified.
         * @returns A mutable MutableBinding<number> object.
         *
         * Features:
         * 1. Read and write operations are supported.
         * 2. The setter callback is automatically called when .value is modified.
         */
        UIUtils.makeBinding<number>(
          () => this.number2, // GetterCallback
          (val: number) => {
            this.number2 = val;
          }) // SetterCallback
      )
    }
  }
}

```

## makeObserved

```TypeScript
static makeObserved<T extends object>(source: T): T
```

Converts ordinary unobservable data into observable data. For details, see [makeObserved API: Changing Unobservable Data to Observable Data](../../../../ui/state-management/arkts-new-makeObserved.md).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | Source object. It supports classes not decorated by @Observed or @ObservedV2, objectsreturned by **JSON.parse**, and classes decorated by @Sendable.<br>Array, Map, Set, and Date types are supported.<br>collections.Array, collections.Set, and collections.Map are supported.<br>For details, see[makeObserved API: Changing Unobservable Data to Observable Data](../../../../ui/state-management/arkts-new-makeObserved.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Observable data. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

class NonObservedClass {
  name: string = 'Tom';
}

@Entry
@ComponentV2
struct Index {
  // Use makeObserved to make the NonObservedClass instance observable.
  observedClass: NonObservedClass = UIUtils.makeObserved(new NonObservedClass());
  nonObservedClass: NonObservedClass = new NonObservedClass();

  build() {
    Column() {
      Text(`observedClass: ${this.observedClass.name}`)
        .onClick(() => {
          this.observedClass.name = 'Jane'; // This will trigger a UI update.
        })
      Text(`observedClass: ${this.nonObservedClass.name}`)
        .onClick(() => {
          this.nonObservedClass.name = 'Jane'; // This will not trigger a UI update.
        })
    }
  }
}

```

## makeV1Observed

```TypeScript
static makeV1Observed<T extends object>(source: T): T
```

Wraps an unobservable object into an object that is observable by V1 state management. This API is equivalent to @ Observed and can be used to initialize @ObjectLink. This API can be used together with [enableV2Compatibility](arkts-arkui-uiutils-c.md#enablev2compatibility-1) in scenarios where state management V1 and V2 are used together. For details, see [Mixed Use of State Management V1 and V2 (API Version 19 and Later)](../../../../ui/state-management/arkts-v1-v2-mixusage.md).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | Data source. Common classes, Array, Map, Set, and Date types are supported.<br>[@arkts.collections](../../apis-arkts/arkts-apis/arkts-collections.md) (ArkTS containers) andclasses decorated with [@Sendable](../../../../arkts-utils/arkts-sendable.md) are not supported.<br>**undefined** and **null** are not supported. V2 state management data andthe return value of [makeObserved](arkts-arkui-uiutils-c.md#makeobserved-1) are not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | For supported input parameter types, returns data observable by V1 state management. For unsupportedinput parameter types, returns the data source object itself. |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

class Outer {
  outerValue: string = 'outer';
  inner: Inner;

  constructor(inner: Inner) {
    this.inner = inner;
  }
}

class Inner {
  interValue: string = 'inner';
}

@Entry
@Component
struct Index {
  // Use makeV1Observed to wrap the Inner instance as a V1 observable object and pass it to the Outer constructor.
  @State outer: Outer = new Outer(UIUtils.makeV1Observed(new Inner()));

  build() {
    Column() {
      // The return value of makeV1Observed can be used to initialize @ObjectLink.
      Child({ inner: this.outer.inner })
    }
    .height('100%')
    .width('100%')
  }
}

@Component
struct Child {
  @ObjectLink inner: Inner;

  build() {
    Text(`${this.inner.interValue}`)
      .onClick(() => {
        this.inner.interValue += '!';
      })
  }
}

```

