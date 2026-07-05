# UIUtils

UIUtils提供一些方法，用于处理状态管理相关的数据转换。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { Binding,ComponentReuse,CustomComponentLifecycleState,ComponentInactive,PersistenceV2,ComponentDisappear,MutableBinding,CustomComponentLifecycleObserver,AppStorageV2,Type,ConnectOptionsCollections,CollectionType,CustomComponentContext,IReusePool,ConnectOptions,UIUtils,ComponentActive,CustomComponentLifecycle,ComponentInit,ComponentAppear,ComponentBuilt,ComponentRecycle,IReusableInfo } from '@kit.ArkUI';
```

## addMonitor

```TypeScript
static addMonitor(target: object, path: string | string[], monitorCallback: MonitorCallback, options?: MonitorOptions): void
```

给状态管理V2的状态变量动态添加监听方法，详见 [addMonitor/clearMonitor](docroot://ui/state-management/arkts-new-addMonitor-clearMonitor.md)。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | object | Yes | 目标对象，仅支持  [@ComponentV2](docroot://ui/state-management/arkts-create-custom-components.md#componentv2)和  [@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)实例。  对于不支持的类型，会抛出运行时错误。 |
| path | string \| string[] | Yes | 添加监听的变量名路径。可指定一个路径或者传入string数组用于一次性指定多个监听的变量路径。  仅支持string和string数组，对于不支持的类型，会抛出运行时错误。 |
| monitorCallback | MonitorCallback | Yes | 给对应的状态变量注册的监听函数，即path路径对应的状态变量改变时，会回调对应的函数。  对于不支持的类型，会抛出运行时错误。 |
| options | MonitorOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 130000 | The target is not a custom component instance or V2 class instance. |
| 130001 | The path is invalid. |
| 130002 | monitorCallback is not a function or an anonymous function. |

## applySync

```TypeScript
static applySync<T>(task: TaskCallback): T
```

同步刷新指定的状态变量，该接口接收一个闭包函数，仅刷新闭包函数内的修改，包括更新[@Computed计算](docroot://ui/state-management/arkts-new-computed.md)、 [@Monitor回调](docroot://ui/state-management/arkts-new-monitor.md)以及重新渲染UI节点，详见 [applySync/flushUpdates/flushUIUpdates接口：同步刷新](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md)。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| task | TaskCallback | Yes | 闭包函数，该闭包中产生的状态变量修改会同步执行。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 闭包函数执行得到的返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 140001 | The function is not allowed to be called in @Computed |

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

判断数据对象是否为可观察对象，并返回观察结果。详见[canBeObserved接口：判断对象是否为可被观察对象](docroot://ui/state-management/arkts-new-canBeObserved.md)。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | 输入一个数据对象，判断其是否可被观察。支持Array、Map、Set和Date类型数据。  具体使用规则，详见  [canBeObserved接口：判断对象是否为可被观察对象](docroot://ui/state-management/arkts-new-canBeObserved.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| ObservedResult | 返回对象是否可被观察的结果。 |

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
      })
    })
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

删除通过[addMonitor](arkts-uiutils-c.md#addMonitor)给状态管理V2的状态变量添加的监听方法，详见 [addMonitor/clearMonitor](docroot://ui/state-management/arkts-new-addMonitor-clearMonitor.md)。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | object | Yes | 目标对象，仅支持  [@ComponentV2](docroot://ui/state-management/arkts-create-custom-components.md#componentv2)和  [@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)实例。  对于不支持的类型，会抛出运行时错误。 |
| path | string \| string[] | Yes | 删除监听的变量名路径。可指定一个路径或者传入string数组用于一次性指定删除多个状态变量的监听函数。  仅支持string和数组，对于不支持的类型，会抛出运行时错误。 |
| monitorCallback | MonitorCallback | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 130000 | The target is not a custom component instance or V2 class instance. |
| 130001 | The path is invalid. |
| 130002 | monitorCallback is not a function or an anonymous function. |

## enableV2Compatibility

```TypeScript
static enableV2Compatibility<T extends object>(source: T): T
```

使V1的状态变量能够在\@ComponentV2中观察，主要应用于状态管理V1、V2混用场景。详见 [状态管理V1和V2混用指导（API version 19及之后）](docroot://ui/state-management/arkts-v1-v2-mixusage.md)。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | 数据源，仅支持V1状态数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 如果数据源是V1的状态数据，则返回能够在@ComponentV2中观察的数据。否则返回数据源本身。 |

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

立即处理在调用该函数之前所有的状态变量修改，同步[标脏](docroot://ui/state-management/arkts-state-management-introduce.md#触发更新)对应的UI节点，但不会同步执行

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 140001 | The function is not allowed to be called in @Computed |
| 140002 | The function is not allowed to be called in @Monitor |

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

同步刷新在调用该函数之前所有的状态变量修改，包括更新@Computed计算、@Monitor回调以及重新渲染UI节点，详见 [applySync/flushUpdates/flushUIUpdates接口：同步刷新](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md)。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 140001 | The function is not allowed to be called in @Computed |
| 140002 | The function is not allowed to be called in @Monitor |

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

返回给定@Component(V1)或@ComponentV2的[CustomComponentContext](arkts-customcomponentcontext-i.md#CustomComponentContext)。使用它来访问组件的复用池。有关复用池的详细信息，请参阅 [全局复用池：集中化的组件回收与复用](docroot://ui/state-management/arkts-global-reuse-pool.md)。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customComponent | T | Yes | 要获取其上下文的@Component或@ComponentV2实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| CustomComponentContext | 给定组件实例的上下文对象。 |

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

getLifecycle用于获取[自定义组件的生命周期]ComponentInit实例。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customComponent | T | Yes | 自定义组件实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| CustomComponentLifecycle | 自定义组件的生命周期实例。 |

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

从状态管理框架包裹的代理对象中获取原始对象。详见[getTarget接口：获取状态管理框架代理前的原始对象](docroot://ui/state-management/arkts-new-getTarget.md)。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | 数据源对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 数据源对象去除状态管理框架所加代理后的原始对象。 |

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

创建只读的单向数据绑定实例，用于构建[\@Builder](docroot://ui/state-management/arkts-builder.md)函数中参数类型为`Binding`的对应实参。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| getter | GetterCallback&lt;T> | Yes | 获取值的回调函数，每次访问值都会重新执行函数，获取最新值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Binding&lt;T> | 仅包含一个`value`属性，用于获取当前绑定的值。只能读取值，不能直接修改。 |

**Example**

```TypeScript
import { Binding, MutableBinding, UIUtils } from '@kit.ArkUI';

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

创建可修改的双向数据绑定实例，用于构建\@Builder函数中参数类型为`MutableBinding`的对应实参。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| getter | GetterCallback&lt;T> | Yes | 获取值的回调函数，每次访问值都会重新执行函数，获取最新值。 |
| setter | SetterCallback&lt;T> | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| MutableBinding&lt;T> | 包含一个`value`属性，支持通过`.value`读取和修改数据，设置值时会检查类型是否匹配泛型`T`。 |

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

将普通不可观察数据变为可观察数据。详见[makeObserved接口：将非观察数据变为可观察数据](docroot://ui/state-management/arkts-new-makeObserved.md)。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | 数据源对象。支持非@Observed和@ObservedV2装饰的class，JSON.parse返回的Object和@Sendable修饰的class。  支持Array、Map、Set和Date。  支持collections.Array, collections.Set和collections.Map。  具体使用规则，详见  [makeObserved接口：将非观察数据变为可观察数据](docroot://ui/state-management/arkts-new-makeObserved.md)。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 可观察的数据。 |

**Example**

```TypeScript
import { UIUtils } from '@kit.ArkUI';

class NonObservedClass {
  name: string = 'Tom';
}

@Entry
@ComponentV2
struct Index {
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

将不可观察的对象包装成状态管理V1可观察的对象，其能力等同于@Observed，可初始化@ObjectLink。 该接口可搭配[enableV2Compatibility](arkts-uiutils-c.md#enableV2Compatibility)应用于状态管理V1和V2混用场景，详见 [状态管理V1和V2混用指导（API version 19及之后）](docroot://ui/state-management/arkts-v1-v2-mixusage.md)。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | T | Yes | 数据源。支持普通class、Array、Map、Set、Date类型。  不支持[@arkts.collections (ArkTS容器集)](../../apis-arkts/arkts-apis/arkts-collections.md#collections)和  [@Sendable](docroot://arkts-utils/arkts-sendable.md)修饰的class。  不支持undefined和null。不支持状态管理V2的数据和  [makeObserved](arkts-uiutils-c.md#makeObserved)的返回值。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 对于支持的入参类型，返回状态管理V1的观察数据。对于不支持的入参类型，返回数据源对象本身。 |

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

