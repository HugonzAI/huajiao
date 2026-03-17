# betterhealth.localhub.nz 部署说明

## 当前项目类型
- Next.js static export
- 构建产物目录：`out/`
- Cloudflare 部署配置：`wrangler.toml`

## 本地部署命令
```bash
npm install
npm run build
npx wrangler pages deploy out --project-name betterhealth-localhub
```

## 目标域名
- `betterhealth.localhub.nz`

## Cloudflare 侧需要完成的事
1. 在 Cloudflare Pages 创建或确认项目 `betterhealth-localhub`
2. 上传/部署 `out/` 目录
3. 为项目添加自定义域：`betterhealth.localhub.nz`
4. 如果需要手动 DNS：
   - 优先让 Cloudflare 自动创建
   - 若手动配置，按控制台提示添加对应 CNAME

## 当前状态
- 本地 `npm run build` 已通过
- `out/` 产物已生成
- 下一步是执行部署并绑定自定义域
