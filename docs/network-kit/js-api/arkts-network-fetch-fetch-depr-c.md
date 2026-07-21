# Fetch

Obtains data through a network.

**Since:** 3

<!--Device-unnamed-export default class Fetch--><!--Device-unnamed-export default class Fetch-End-->

**System capability:** SystemCapability.Communication.NetStack

<a id="fetch"></a>
## fetch

```TypeScript
static fetch(options: {
    /**
     * Resource URL.
     ***/
    url: string;
  
    /**
     * Request parameter, which can be of the string type or a JSON object.
     ***/
    data?: string | object;
  
    /**
     * Request header, which accommodates all attributes of the request.
     ***/
    header?: Object;
  
    /**
     * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.
     ***/
    method?: string;
  
    /**
     * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.
     ***/
    responseType?: string;
  
    /**
     * Called when the network data is obtained successfully.
     ***/
    success?: (data: FetchResponse) => void;
  
    /**
     * Called when the network data fails to be obtained.
     ***/
    fail?: (data: any, code: number) => void;
  
    /**
     * Called when the execution is completed.
     ***/
    complete?: () => void;
  }): void
```

Obtains data through the network.

**Since:** 3

<!--Device-Fetch-static fetch(options: {
    /**
     * Resource URL.
     ***/
    url: string;
  
    /**
     * Request parameter, which can be of the string type or a JSON object.
     ***/
    data?: string | object;
  
    /**
     * Request header, which accommodates all attributes of the request.
     ***/
    header?: Object;
  
    /**
     * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.
     ***/
    method?: string;
  
    /**
     * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.
     ***/
    responseType?: string;
  
    /**
     * Called when the network data is obtained successfully.
     ***/
    success?: (data: FetchResponse) => void;
  
    /**
     * Called when the network data fails to be obtained.
     ***/
    fail?: (data: any, code: number) => void;
  
    /**
     * Called when the execution is completed.
     ***/
    complete?: () => void;
  }): void--><!--Device-Fetch-static fetch(options: {
    /**
     * Resource URL.
     ***/
    url: string;
  
    /**
     * Request parameter, which can be of the string type or a JSON object.
     ***/
    data?: string | object;
  
    /**
     * Request header, which accommodates all attributes of the request.
     ***/
    header?: Object;
  
    /**
     * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.
     ***/
    method?: string;
  
    /**
     * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.
     ***/
    responseType?: string;
  
    /**
     * Called when the network data is obtained successfully.
     ***/
    success?: (data: FetchResponse) => void;
  
    /**
     * Called when the network data fails to be obtained.
     ***/
    fail?: (data: any, code: number) => void;
  
    /**
     * Called when the execution is completed.
     ***/
    complete?: () => void;
  }): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | {     /**      * Resource URL.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     url: string;        /**      * Request parameter, which can be of the string type or a JSON object.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     data?: string \| object;        /**      * Request header, which accommodates all attributes of the request.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     header?: Object;        /**      * Request methods available: OPTIONS, GET, HEAD, POST, PUT, DELETE and TRACE. The default value is GET.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     method?: string;        /**      * The return type can be text, or JSON. By default, the return type is determined based on Content-Type in the header returned by the server.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     responseType?: string;        /**      * Called when the network data is obtained successfully.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     success?: (data: FetchResponse) =&gt; void;        /**      * Called when the network data fails to be obtained.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     fail?: (data: any, code: number) =&gt; void;        /**      * Called when the execution is completed.      * @syscap SystemCapability.Communication.NetStack      * @since 3      */     complete?: () =&gt; void;   } | Yes | Options. |

