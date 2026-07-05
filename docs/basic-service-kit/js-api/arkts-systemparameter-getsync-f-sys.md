# getSync

## getSync

```TypeScript
function getSync(key: string, def?: string): string
```

获取系统参数Key对应的值。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.systemParameterEnhance.getSync

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待查询的系统参数Key。 |
| def | string | No | def为所要获取的系统参数的默认值。 def为可选参数，仅当系统参数不存在时生效。 def可以传undefined或自定义的任意值。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 系统参数值。  若key存在,返回设定的值。  若key不存在且def有效，返回def；若未指定def或def无效(如undefined)，返回空字符串。 |

**Example**

```TypeScript
try {
    let info: string = systemParameter.getSync("const.ohos.apiversion");
    console.info(JSON.stringify(info));
} catch(e) {
    console.error("getSync unexpected error: " + e);
}

```

