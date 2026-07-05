# setSync

## setSync

```TypeScript
function setSync(key: string, value: string): void
```

设置系统参数Key对应的值。

**Since:** 6

**Deprecated since:** 9

**Substitute:** ohos.systemParameterEnhance.etSync

**System capability:** SystemCapability.Startup.SystemInfo

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | string | Yes | 待设置的系统参数Key。 |
| value | string | Yes | 待设置的系统参数值。 |

**Example**

```TypeScript
try {
    systemParameter.setSync("test.parameter.key", "default");
} catch(e) {
    console.error("set unexpected error: " + e);
}

```

