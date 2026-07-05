# querySystemCapabilities

## querySystemCapabilities

```TypeScript
function querySystemCapabilities(callback: AsyncCallback<string>): void
```

Get System Capability.

**起始版本：** 9

**系统能力：** SystemCapability.Developtools.Syscap

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 |  |

**示例：**

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

**起始版本：** 9

**系统能力：** SystemCapability.Developtools.Syscap

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | system capability string. |

**示例：**

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

