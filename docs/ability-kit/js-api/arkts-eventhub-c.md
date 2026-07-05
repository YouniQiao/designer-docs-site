# EventHub

EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。通过事件名，实现了发送方和订阅方之间的解耦，支持不同业务模块间的高效数据传递和状态同步。 主要用于[UIAbility组件与UI的数据通信](docroot://application-models/uiability-data-sync-with-ui.md)。 不同的Context对象拥有不同的EventHub对象，不同EventHub对象之间无法直接通信。事件的订阅、取消订阅、触发都作用在某一个具体的EventHub对象上。 由于Worker、Taskpool通过Actor模型实现[多线程并发](docroot://arkts-utils/multi-thread-concurrency-overview.md#多线程并发模型)，不同虚拟机实例之间拥有独占 的内存，因此EventHub对象不能用于线程间的数据通信。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## emit

```TypeScript
emit(event: string, ...args: Object[]): void
```

触发指定事件。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 事件名称。 |
| args | Object[] | Yes | 可变参数，事件触发时，传递给回调函数的参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## emit

```TypeScript
emit(event: string, ...args: (Object|null|undefined)[]): void
```

触发指定事件。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 事件名称。 |
| args | (Object\|null\|undefined)[] | Yes | 可变参数，事件触发时，传递给回调函数的参数。 |

## off

```TypeScript
off(event: string, callback?: Function): void
```

取消订阅指定事件。 - 传入callback：取消指定的callback对指定事件的订阅，当该事件触发后，将不会回调该callback。 - 不传callback：取消所有callback对指定事件的订阅。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 事件名称。 |
| callback | Function | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## on

```TypeScript
on(event: string, callback: Function): void
```

订阅指定事件。 > **说明：** > > callback被emit触发时，调用方是EventHub对象，如果要修改callback中this的指向，可以使用箭头函数。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 事件名称。 |
| callback | Function | Yes | 事件回调，事件触发后调用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

