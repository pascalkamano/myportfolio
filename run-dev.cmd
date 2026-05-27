@echo off
cd /d "%~dp0"
node.exe node_modules\nuxt\bin\nuxt.mjs dev --host 127.0.0.1 --port 3000 > nuxt-dev.log 2>&1
