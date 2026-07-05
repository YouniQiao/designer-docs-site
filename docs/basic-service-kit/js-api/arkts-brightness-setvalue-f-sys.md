# setValue

## setValue

```TypeScript
function setValue(value: int): void
```

设置系统的屏幕亮度。

**Since:** 7

**System capability:** SystemCapability.PowerManager.DisplayPowerManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | int | Yes | 亮度的值。范围：0~255；该参数必须为数字类型。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameter types; |
| 4700101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    brightness.setValue(128);
} catch(err) {
    console.error('set brightness failed, err: ' + err);
}

```

## setValue

```TypeScript
function setValue(value: int, continuous: boolean): void
```

设置系统的屏幕亮度。用于连续调节亮度的场景，在连续调节亮度过程中，设置continuous为true，结束时设置continuous为false，会有更好的性能。

**Since:** 11

**System capability:** SystemCapability.PowerManager.DisplayPowerManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | int | Yes | 亮度的值。范围：0~255。 |
| continuous | boolean | Yes | 亮度调节是否连续。true表示亮度调节连续，false表示亮度调节不连续，默认为false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameter types; |
| 4700101 | Failed to connect to the service. |

**Example**

```TypeScript
try {
    brightness.setValue(128, true);
} catch(err) {
    console.error('set brightness failed, err: ' + err);
}

```

