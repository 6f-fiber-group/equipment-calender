#!/bin/bash
echo "テンプレートディレクトリのディレクトリ名を入力してください。"
read -p "ディレクトリ名： " dname
mkdir $dname
cd $dname
touch "1"
touch "2"
touch "3"
