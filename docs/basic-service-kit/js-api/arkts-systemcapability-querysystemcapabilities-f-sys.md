# querySystemCapabilities

## querySystemCapabilities

```TypeScript
function querySystemCapabilities(callback: AsyncCallback<string>): void
```

Get System Capability.

**Since:** 9

**System capability:** SystemCapability.Developtools.Syscap

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes |  |

**Example**

```TypeScript
try {
    systemCapability.querySystemCapabilities((err:Error, data:string) => {
    if (err == undefined) {
        console.info("get system capabilities:" + data);
    } else {
        console.error(" get system capabilities err:" + err);
    }});
}catch(e){
    console.error("get unexpected error: " + e);
}

```

## querySystemCapabilities

```TypeScript
function querySystemCapabilities(): Promise<string>
```

Get System Capability.

**Since:** 9

**System capability:** SystemCapability.Developtools.Syscap

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | system capability string. |

**Example**

```TypeScript
try {
    systemCapability.querySystemCapabilities().then((value:string) => {
        console.info("get system capabilities: " + value);
    }).catch((err:Error) => {
        console.error("get system capabilities error: " + err);
    });
}catch(e){
    console.error("get unexpected error: " + e);
}

```

