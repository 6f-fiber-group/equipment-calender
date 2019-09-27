#!/bin/bash
read -p "日本で二番目に高い山は槍ヶ岳でしょうか？ [y/n]" input
if [ $input = "n" ]; then
	echo 正解です。
else 
	echo 不正解です。
fi

