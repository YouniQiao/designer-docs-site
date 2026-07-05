# canShowFloating

## canShowFloating

```TypeScript
function canShowFloating(callback: AsyncCallback<boolean>): void
```

Checks whether a specified application can show as a floating window.

**Since:** 7

**Deprecated since:** 26.0.0

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | Yes |  |

**Example**

```TypeScript
settings.canShowFloating((err:Error, status: boolean) => {
  if (err) {
    console.error(`Failed to Checks whether a specified application can show as float window ${err.message} `);
    return;
  }
  console.info('Checks whether a specified application can show as float window.');
});

```

## canShowFloating

```TypeScript
function canShowFloating(): Promise<boolean>
```

Checks whether a specified application can show as a floating window.

**Since:** 7

**Deprecated since:** 26.0.0

**System capability:** SystemCapability.Applications.Settings.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the application can draw over other applications; returns  {@code false} otherwise. |

**Example**

```TypeScript
settings.canShowFloating().then((status:boolean) => {
    console.info('Checks whether a specified application can show as float window.');
});

```

