# Network

**起始版本：** 3

**系统能力：** SystemCapability.Communication.NetManager.Core

## getType

```TypeScript
static getType(options?: {
    /**
     * Called when the network type is obtained.
     ***/
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the network type fails to be obtained.
     ***/
    fail?: (data: any, code: number) => void;
    /**
     * Called when the execution is completed.
     ***/
    complete?: () => void;
  }): void
```

Obtains the network type.

**起始版本：** 3

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | {
    /**
     * Called when the network type is obtained.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the network type fails to be obtained.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    fail?: (data: any, code: number) => void;
    /**
     * Called when the execution is completed.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    complete?: () => void;
  } | 否 | Options. |

## subscribe

```TypeScript
static subscribe(options?: {
    /**
     * Called when the network connection state changes.
     ***/
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the listening fails.
     ***/
    fail?: (data: any, code: number) => void;
  }): void
```

Listens to the network connection state. If this method is called multiple times, the last call takes effect.

**起始版本：** 3

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | {
    /**
     * Called when the network connection state changes.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the listening fails.
     * @syscap SystemCapability.Communication.NetManager.Core
     * @since 3
     */
    fail?: (data: any, code: number) => void;
  } | 否 | Options. |

## unsubscribe

```TypeScript
static unsubscribe(): void
```

Cancels listening to the network connection state.

**起始版本：** 3

**系统能力：** SystemCapability.Communication.NetManager.Core

