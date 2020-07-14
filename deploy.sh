#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'ououe.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 使用 travis cl 自动构建
#git push -f git@github.com:lcctju/lcctju.github.io.git master
git push -f git@gitee.com:tjuchaochao/lcctju.git master

cd -
