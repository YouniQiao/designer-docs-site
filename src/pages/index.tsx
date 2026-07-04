import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Section({title, children}: {title: string; children: ReactNode}) {
  return (
    <div className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>{title}</Heading>
      <div className={styles.sectionBody}>{children}</div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="HarmonyOS API reference, organized by Kit.">
      <header className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>
            HarmonyOS 开发者 API 参考文档，按 Kit 分类整理。
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <Section title="📦 内容来源">
            <p>
              本站所有 API 参考文档来源于 OpenHarmony 官方仓库：
            </p>
            <p>
              <a href="https://gitcode.com/openharmony_devops/designer-docs" target="_blank" rel="noopener">
                gitcode.com/openharmony_devops/designer-docs
              </a>
            </p>
            <p>
              该仓库包含 HarmonyOS SDK 中所有 Kit 的 ArkTS（JS）和 C 语言 API 参考文档，分为中英文两个版本。
            </p>
          </Section>

          <Section title="🗂️ 内容组装">
            <p>
              本站以 <strong>Kit</strong> 为顶层组织单元，每个 Kit 下按语言分为两个子目录：
            </p>
            <ul>
              <li><code>js-api/</code> — ArkTS（JavaScript）API 参考</li>
              <li><code>c-api/</code> — C 语言 API 参考</li>
            </ul>
            <p>
              例如 <code>ability-kit</code> 的页面结构为：
              <code>/ability-kit/js-api/</code> 和 <code>/ability-kit/c-api/</code>，
              将源码仓库中分散的 API 文档按 Kit 聚合呈现。
            </p>
          </Section>

          <Section title="🌐 中英文关系">
            <p>
              英文文档为默认语言（路径前缀 <code>/</code>），中文文档位于 <code>/zh-CN/</code> 路径下。
            </p>
            <p>
              中英文内容均来自同一源码仓库，通过 Docusaurus 的 i18n 机制独立管理。
              页面底部标注了 <strong>最后更新时间</strong>（Last updated），方便判断内容时效性。
            </p>
            <p>
              如果某篇文档暂无中文翻译，页面会自动降级展示英文原文（该机制在后续迭代中完善）。
            </p>
          </Section>

          <Section title="🔄 内容刷新">
            <p>
              本站通过 GitHub Actions 定时任务，<strong>每天北京时间凌晨 2:00</strong> 自动从源码仓库拉取最新文档。
            </p>
            <p>
              <strong>更新检测机制</strong>：同步脚本对每个文件计算 SHA256 哈希值，
              仅当哈希值与本地文件不一致时才执行更新，避免全量覆写。
              更新后的文件会在 frontmatter 中记录新的 <code>last_update</code> 日期。
            </p>
            <p>
              当检测到内容变更时，系统会自动触发站点重新构建并部署，确保文档保持最新。
            </p>
          </Section>

          <Section title="💡 补充说明">
            <ul>
              <li>
                本站由 <strong>Docusaurus</strong> 构建，部署在 Netlify + Cloudflare CDN 上，
                由自托管 GitHub Actions Runner 执行构建。
              </li>
              <li>
                文档中的跨 Kit 交叉引用链接可能无法完全解析（受限于文档源格式），
                但不影响页面主体内容的浏览。
              </li>
              <li>
                如需反馈问题或参与贡献，请通过{" "}
                <a href="https://github.com/YouniQiao/designer-docs-site" target="_blank" rel="noopener">
                  GitHub Issues
                </a>{" "}
                联系我们。
              </li>
            </ul>
          </Section>
        </div>
      </main>
    </Layout>
  );
}
