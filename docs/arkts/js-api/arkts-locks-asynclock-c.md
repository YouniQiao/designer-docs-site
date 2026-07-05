# AsyncLock

在锁下执行异步操作的类。

**Since:** 12

**Decorator:** @Sendable

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

默认构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## lockAsync

```TypeScript
lockAsync<T>(callback: AsyncLockCallback<T>): Promise<T>
```

在获取的独占锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用lockAsync的同一线程中以异步方式执行。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncLockCallback&lt;T> | Yes | 获取锁后要调用的函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | 回调执行后将解决的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200030 | The lock does not exist. |

## lockAsync

```TypeScript
lockAsync<T>(callback: AsyncLockCallback<T>, mode: AsyncLockMode): Promise<T>
```

在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用lockAsync的同一线程中以异步方式执行。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncLockCallback&lt;T> | Yes | 获取锁后要调用的函数。 |
| mode | AsyncLockMode | Yes | 锁的操作模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T> | 回调执行后将解决或拒绝的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200030 | The lock does not exist. |

## lockAsync

```TypeScript
lockAsync<T, U>(callback: AsyncLockCallback<T>, mode: AsyncLockMode,
        options: AsyncLockOptions<U>): Promise<T | U>
```

在获取的锁下执行操作。该方法首先获取锁，然后调用回调，最后释放锁。回调在调用lockAsync的同一线程中以异步方式执行。 在{@link AsyncLockOptions}中可以提供一个可选的超时值。在这种情况下，如果超时前未能获取锁，lockAsync将返回被拒绝的Promise并带上一个BusinessError实例。 这种情况下，错误信息将包含持有的锁和等待的锁的信息以及可能的死锁警告。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncLockCallback&lt;T> | Yes | 获取锁后要调用的函数。 |
| mode | AsyncLockMode | Yes | 锁的操作模式。 |
| options | AsyncLockOptions&lt;U> | Yes | 锁的操作选项。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;T \| U> | 回调执行后将解决的Promise，或者在超时情况下被拒绝。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200030 | The lock does not exist. |
| 10200031 | Timeout exceeded. |

## query

```TypeScript
static query(name: string): AsyncLockState
```

查询指定锁的信息。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 锁的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| AsyncLockState | 返回AsyncLockState实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200030 | The lock does not exist. |

## queryAll

```TypeScript
static queryAll(): AsyncLockState[]
```

查询所有锁的信息。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| AsyncLockState[] | 返回AsyncLockState数组。 |

## request

```TypeScript
static request(name: string): AsyncLock
```

使用指定的名称查找或创建AsyncLock实例。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 要查找或创建的锁的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| AsyncLock | 返回AsyncLock实例。 |

## name

```TypeScript
readonly name: string
```

锁的名称。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

