@echo off
npm run build&&cd docs&&git init&&git add -A&&git commit -m 'deploy'&&git push -f https://github.com/zemaximo87/ze.git master:gh-pages&&cd ..