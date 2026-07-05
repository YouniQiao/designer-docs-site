# loadModelFromFile

## Modules to Import

```TypeScript
import { mindSporeLite } from '@ohos.ai.mindSporeLite';
```

## loadModelFromFile

```TypeScript
function loadModelFromFile(
    model: string,
    context?: Context): Promise<Model>
```

Create a Model instance from file path

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | string | Yes | model indicates model path to be loaded |
| context | Context | No | context indicates model context information |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Model&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1000000 | Model path error. Possible causes: 1. The model path is null; 2. The model pathdoes not exist.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. Thedevice information is incorrect.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000002 | Failed to create native model. Possible causes: 1. Insufficient permission toaccess the model path; 2. The model file is corrupted.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000003 | Error in model loading method. Possible causes: 1. The loading method must bepath, buffer, or fd.**ArkTS mode:** This error code applies only to ArkTS-Sta. |

**Example**

```TypeScript
let modelFile = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile).then((mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
}).catch((error: Error) => {
  console.error(`Failed to load model from file. Model file: ${modelFile}, Error: ${error.message}`);
});

```


## loadModelFromFile

```TypeScript
function loadModelFromFile(
    model: string, callback: Callback<Model>): void
```

Create a Model instance from file path.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | string | Yes | model indicates model path to be loaded |
| callback | Callback&lt;Model&gt; | Yes | the callback of model |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1000000 | Model path error. Possible causes: 1. The model path is null; 2. The model pathdoes not exist.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. Thedevice information is incorrect.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000002 | Failed to create native model. Possible causes: 1. Insufficient permission toaccess the model path; 2. The model file is corrupted.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000003 | Error in model loading method. Possible causes: 1. The loading method must bepath, buffer, or fd.**ArkTS mode:** This error code applies only to ArkTS-Sta. |

**Example**

```TypeScript
let modelFile: string = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile, (mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
})

```


## loadModelFromFile

```TypeScript
function loadModelFromFile(
    model: string,
    context: Context, callback: Callback<Model>): void
```

Create a Model instance from file path.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| model | string | Yes | model indicates model path to be loaded |
| context | Context | Yes | context indicates model context information |
| callback | Callback&lt;Model&gt; | Yes | the callback of model |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1000000 | Model path error. Possible causes: 1. The model path is null; 2. The model pathdoes not exist.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000001 | Invalid context. Possible causes: 1. The context target is incorrect; 2. Thedevice information is incorrect.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000002 | Failed to create native model. Possible causes: 1. Insufficient permission toaccess the model path; 2. The model file is corrupted.**ArkTS mode:** This error code applies only to ArkTS-Sta. |
| 1000003 | Error in model loading method. Possible causes: 1. The loading method must bepath, buffer, or fd.**ArkTS mode:** This error code applies only to ArkTS-Sta. |

**Example**

```TypeScript
let context: mindSporeLite.Context = {};
context.target = ['cpu'];
let modelFile: string = '/path/to/xxx.ms';
mindSporeLite.loadModelFromFile(modelFile, context, (mindSporeLiteModel: mindSporeLite.Model) => {
  let modelInputs: mindSporeLite.MSTensor[] = mindSporeLiteModel.getInputs();
  if (modelInputs == null) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Context: ${JSON.stringify(context)}, Result: null`);
  } else if (modelInputs.length === 0) {
    console.error(`Failed to get model inputs. Model file: ${modelFile}, Context: ${JSON.stringify(context)}, Input count: 0`);
  } else {
    console.info(`Succeeded in getting model inputs. Model file: ${modelFile}, Input name: ${modelInputs[0].name}`);
  }
})

```

