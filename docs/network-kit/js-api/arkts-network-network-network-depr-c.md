# Network

**Since:** 3

<!--Device-unnamed-export default class Network--><!--Device-unnamed-export default class Network-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

<a id="gettype"></a>
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

**Since:** 3

<!--Device-Network-static getType(options?: {
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
  }): void--><!--Device-Network-static getType(options?: {
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
  }): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | {     /**      * Called when the network type is obtained.      * @syscap SystemCapability.Communication.NetManager.Core      * @since 3      */     success?: (data: NetworkResponse) =&gt; void;     /**      * Called when the network type fails to be obtained.      * @syscap SystemCapability.Communication.NetManager.Core      * @since 3      */     fail?: (data: any, code: number) =&gt; void;     /**      * Called when the execution is completed.      * @syscap SystemCapability.Communication.NetManager.Core      * @since 3      */     complete?: () =&gt; void;   } | No | Options. |

<a id="subscribe"></a>
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

**Since:** 3

<!--Device-Network-static subscribe(options?: {
    /**
     * Called when the network connection state changes.
     ***/
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the listening fails.
     ***/
    fail?: (data: any, code: number) => void;
  }): void--><!--Device-Network-static subscribe(options?: {
    /**
     * Called when the network connection state changes.
     ***/
    success?: (data: NetworkResponse) => void;
    /**
     * Called when the listening fails.
     ***/
    fail?: (data: any, code: number) => void;
  }): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | {     /**      * Called when the network connection state changes.      * @syscap SystemCapability.Communication.NetManager.Core      * @since 3      */     success?: (data: NetworkResponse) =&gt; void;     /**      * Called when the listening fails.      * @syscap SystemCapability.Communication.NetManager.Core      * @since 3      */     fail?: (data: any, code: number) =&gt; void;   } | No | Options. |

<a id="unsubscribe"></a>
## unsubscribe

```TypeScript
static unsubscribe(): void
```

Cancels listening to the network connection state.

**Since:** 3

<!--Device-Network-static unsubscribe(): void--><!--Device-Network-static unsubscribe(): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

