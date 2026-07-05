# getSync

## getSync

```TypeScript
function getSync(key: string, def?: string): string
```

获取系统参数Key对应的值。

**Since:** 9

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待查询的系统参数Key。最大长度128字节，只允许字母数字加"."，"-"，"@"，":"或"_"，不允许".."。 |
| def | string | No | def为所要获取的系统参数的默认值； def为可选参数，仅当系统参数不存在时生效； def可以传undefined或自定义的任意值。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 系统参数值。  若key存在,返回设定的值。  若key不存在且def有效，返回def；若未指定def或def无效(如undefined)，抛异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.incorrect parameter types; 3.parameter verification failed. |
| 14700101 | System parameter not found. |
| 14700103 | The operation on the system permission is denied. |
| 14700104 | System internal error such as out memory or deadlock. |

**Example**

```TypeScript
try {
    let info: string = systemParameterEnhance.getSync("const.ohos.apiversion");
    console.info(JSON.stringify(info));
} catch(e) {
    console.error("getSync unexpected error: " + e);
}

```

