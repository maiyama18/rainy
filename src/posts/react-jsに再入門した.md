---
date: 2018-10-28T02:30:37.774Z
title: react.jsに再入門した
---
プログラミングのリハビリに、昔に少し書いたことがあるreact.jsに再入門した。人間はプログラミングを覚えるととりあえずtodoアプリを書いてしまう習性があるので、todoアプリを作った。

#### APIサーバをGoで書いたやつ

reactでtodoアプリを書くのは手癖でなんとかなったので、サーバ側で新しいことをやろうと思ってgoでAPIを書いてみた。gormというORマッパーを使ってみたが、railsみたいなことができて非常に便利。

- コード：https://github.com/ymr-39/todo-go-react


#### firebase/firestoreを使ったやつ

firebaseも昔ちょっとだけ勉強したことがあったので再入門したくてやってみた。reactのコードは上のやつとだいたい同じ。簡単なアプリならいちいちサーバを書かなくてもfirebaseで一瞬でAPI+DB+認証を出来るようになっておきたい。

- コード：https://github.com/ymr-39/todo-react-firebase
- デモ：https://todo-react-firebase-9fa7e.firebaseapp.com/

firebase hostingを使うと労力０でデプロイが出来るのありがたすぎる。

firestoreを使うと、データベースで更新が走った際にその変更をローカルに自動的に反映させることが簡単にできて便利なんだけど、当然コードから更新のタイミングが制御できないのでステートの管理を明示的にやりたいreduxとの相性がいまいちだと感じた。これは絶対に解決してる人がいるはずと思ったら[redux-firestore](https://github.com/prescottprue/redux-firestore)というライブラリがあるらしい。[redux-firestoreを使ったtutorial](https://dusty.phillips.codes/2018/08/25/react-redux-firebase-with-firestore-tutorial/)も発見したので、次はこれをやってみたい。
