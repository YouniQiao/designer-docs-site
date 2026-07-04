#!/usr/bin/env python3
"""Migrate designer-docs API reference to Docusaurus i18n structure."""
import os, shutil, json, re

SRC = "/tmp/designer_check"
DST = "/Users/hhxi/designer-docs-site"
DOCS_EN = f"{DST}/docs"
DOCS_ZH = f"{DST}/i18n/zh-CN/docusaurus-plugin-content-docs/current"

# Kit display name mapping
KIT_NAMES = {
    "apis-ability-kit": "Ability Kit",
    "apis-accessibility-kit": "Accessibility Kit",
    "apis-ads-kit": "Ads Kit",
    "apis-arkdata": "ArkData",
    "apis-arkgraphics2d": "ArkGraphics 2D",
    "apis-arkgraphics3d": "ArkGraphics 3D",
    "apis-arkts": "ArkTS",
    "apis-arkui": "ArkUI",
    "apis-ark-uikit": "ArkUI Kit (C)",
    "apis-arkweb": "ArkWeb",
    "apis-asset-store-kit": "Asset Store Kit",
    "apis-audio-kit": "Audio Kit",
    "apis-avcodec-kit": "AVCodec Kit",
    "apis-avsession-kit": "AVSession Kit",
    "apis-background-tasks-kit": "Background Tasks Kit",
    "apis-basic-service-kit": "Basic Service Kit",
    "apis-basic-services-kit": "Basic Services Kit",
    "apis-calendar-kit": "Calendar Kit",
    "apis-camera-kit": "Camera Kit",
    "apis-connectivity-kit": "Connectivity Kit",
    "apis-contacts-kit": "Contacts Kit",
    "apis-content-embed-kit": "Content Embed Kit",
    "apis-core-file-kit": "Core File Kit",
    "apis-crypto-architecture-kit": "Crypto Architecture Kit",
    "apis-cstandard-library": "C Standard Library",
    "apis-data-protection-kit": "Data Protection Kit",
    "apis-default": "Default",
    "apis-device-certificate-kit": "Device Certificate Kit",
    "apis-distributed-service-kit": "Distributed Service Kit",
    "apis-driver-development-kit": "Driver Development Kit",
    "apis-drm-kit": "DRM Kit",
    "apis-form-kit": "Form Kit",
    "apis-function-flow-runtime-kit": "Function Flow Runtime Kit",
    "apis-game-controller-kit": "Game Controller Kit",
    "apis-image-kit": "Image Kit",
    "apis-ime-kit": "IME Kit",
    "apis-input-kit": "Input Kit",
    "apis-ipc-kit": "IPC Kit",
    "apis-kernel-enhance-kit": "Kernel Enhance Kit",
    "apis-localization-kit": "Localization Kit",
    "apis-location-kit": "Location Kit",
    "apis-mdm-kit": "MDM Kit",
    "apis-mechanic-kit": "Mechanic Kit",
    "apis-media-kit": "Media Kit",
    "apis-media-library-kit": "Media Library Kit",
    "apis-mind-spore-lite-kit": "MindSpore Lite Kit",
    "apis-multimodal-awareness-kit": "Multimodal Awareness Kit",
    "apis-na": "NA",
    "apis-network-kit": "Network Kit",
    "apis-neural-network-runtime-kit": "Neural Network Runtime Kit",
    "apis-notification-kit": "Notification Kit",
    "apis-performance-analysis-kit": "Performance Analysis Kit",
    "apis-security-guard-kit": "Security Guard Kit",
    "apis-sensor-service-kit": "Sensor Service Kit",
    "apis-tee-kit": "TEE Kit",
    "apis-telephony-kit": "Telephony Kit",
    "apis-test-kit": "Test Kit",
    "apis-third_party": "Third Party",
    "apis-universal-keystore-kit": "Universal Keystore Kit",
    "apis-user-authentication-kit": "User Authentication Kit",
    "others": "Others",
}

def kit_slug(name):
    return name.replace("apis-", "").replace("_", "-")

def kit_label(name):
    return KIT_NAMES.get(name, name.replace("apis-", "").replace("-", " ").title())

# Collect all kits from both JS and C, zh and en
kits = {}  # kit_name -> { js_zh, js_en, c_zh, c_en }

for src_path, key in [
    (f"{SRC}/interface_sdk-js-md/zh-cn/application-dev/reference", "js_zh"),
    (f"{SRC}/interface_sdk-js-md/en/application-dev/reference", "js_en"),
    (f"{SRC}/interface_sdk_c-md/zh-cn/application-dev/reference", "c_zh"),
    (f"{SRC}/interface_sdk_c-md/en/application-dev/reference", "c_en"),
]:
    if not os.path.isdir(src_path):
        continue
    for kit in os.listdir(src_path):
        kit_path = os.path.join(src_path, kit)
        if not os.path.isdir(kit_path):
            continue
        if kit not in kits:
            kits[kit] = {}
        kits[kit][key] = kit_path

# Clean target dirs
shutil.rmtree(DOCS_EN, ignore_errors=True)
shutil.rmtree(DOCS_ZH, ignore_errors=True)
os.makedirs(DOCS_EN, exist_ok=True)
os.makedirs(DOCS_ZH, exist_ok=True)

sidebar_categories = []

for kit_name in sorted(kits.keys()):
    info = kits[kit_name]
    slug = kit_slug(kit_name)
    label = kit_label(kit_name)
    
    subcats = []  # for sidebar
    
    # Copy JS API files (en → docs, zh → i18n)
    for key, subdir, sublabel in [
        ("js_en", "js-api", "JS API"),
        ("js_zh", "js-api", "JS API"),
        ("c_en", "c-api", "C API"),
        ("c_zh", "c-api", "C API"),
    ]:
        if key not in info:
            continue
        
        is_zh = key.endswith("_zh")
        base = DOCS_ZH if is_zh else DOCS_EN
        dest = f"{base}/{slug}/{subdir}"
        
        # Find the actual child dir inside the kit (e.g., arkts-apis/ or c-apis/)
        src_dir = info[key]
        children = [d for d in os.listdir(src_dir) if os.path.isdir(os.path.join(src_dir, d))]
        
        if not children:
            continue
        
        for child in children:
            child_src = os.path.join(src_dir, child)
            os.makedirs(dest, exist_ok=True)
            
            for f in os.listdir(child_src):
                if f.endswith(".md"):
                    shutil.copy2(os.path.join(child_src, f), os.path.join(dest, f))
        
        # Only add to sidebar once (from en)
        if not is_zh:
            subcats.append({"slug": slug, "subdir": subdir, "sublabel": sublabel})
    
    if subcats:
        sidebar_categories.append({
            "slug": slug,
            "label": label,
            "subcats": subcats,
        })

# Write _category_.json for each kit and subcategory
for cat in sidebar_categories:
    slug = cat["slug"]
    
    # Kit-level category
    kit_cat = {"label": cat["label"], "position": len(sidebar_categories)}
    os.makedirs(f"{DOCS_EN}/{slug}", exist_ok=True)
    with open(f"{DOCS_EN}/{slug}/_category_.json", "w") as f:
        json.dump(kit_cat, f, indent=2, ensure_ascii=False)
    os.makedirs(f"{DOCS_ZH}/{slug}", exist_ok=True)
    with open(f"{DOCS_ZH}/{slug}/_category_.json", "w") as f:
        json.dump({"label": cat["label"], "position": len(sidebar_categories)}, f, indent=2, ensure_ascii=False)
    
    for sc in cat["subcats"]:
        sc_path_en = f"{DOCS_EN}/{slug}/{sc['subdir']}"
        sc_path_zh = f"{DOCS_ZH}/{slug}/{sc['subdir']}"
        os.makedirs(sc_path_en, exist_ok=True)
        os.makedirs(sc_path_zh, exist_ok=True)
        with open(f"{sc_path_en}/_category_.json", "w") as f:
            json.dump({"label": sc["sublabel"]}, f, indent=2, ensure_ascii=False)
        with open(f"{sc_path_zh}/_category_.json", "w") as f:
            json.dump({"label": sc["sublabel"]}, f, indent=2, ensure_ascii=False)

# Generate sidebars.ts
sidebar_items = []
for cat in sidebar_categories:
    items = []
    for sc in cat["subcats"]:
        items.append({
            "type": "category",
            "label": sc["sublabel"],
            "items": [{"type": "autogenerated", "dirName": f"{cat['slug']}/{sc['subdir']}"}],
        })
    sidebar_items.append({
        "type": "category",
        "label": cat["label"],
        "items": items,
    })

sidebar_ts = f"""// Auto-generated sidebar
import type {{SidebarsConfig}} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {{
  apiSidebar: {json.dumps(sidebar_items, indent=4, ensure_ascii=False)},
}};

export default sidebars;
"""

with open(f"{DST}/sidebars.ts", "w") as f:
    f.write(sidebar_ts)

# Count
en_count = sum(1 for _ in os.walk(DOCS_EN) for f in _[2] if f.endswith(".md"))
zh_count = sum(1 for _ in os.walk(DOCS_ZH) for f in _[2] if f.endswith(".md"))
print(f"Migrated: {en_count} EN files, {zh_count} ZH files")
print(f"Kits: {len(sidebar_categories)}")
