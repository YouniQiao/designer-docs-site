# canShowFloating

## Modules to Import

```TypeScript
import { settings } from '@kit.BasicServicesKit';
```

## canShowFloating

```TypeScript
function canShowFloating(callback: AsyncCallback<boolean>): void
```

Checks whether a specified application can show as a floating window.

**Since:** 7

**Deprecated since:** 26.0.0

<!--Device-settings-function canShowFloating(callback: AsyncCallback<boolean>): void--><!--Device-settings-function canShowFloating(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<boolean> | Yes | The callback of canShowFloating result. |

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

<!--Device-settings-function canShowFloating(): Promise<boolean>--><!--Device-settings-function canShowFloating(): Promise<boolean>-End-->

**System capability:** SystemCapability.Applications.Settings.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Returns {@code true} if the application can draw over other applications; returns{@code false} otherwise. |

**Example**

```TypeScript
settings.canShowFloating().then((status:boolean) => {
    console.info('Checks whether a specified application can show as float window.');
});

```

