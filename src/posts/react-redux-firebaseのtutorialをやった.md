---
date: 2018-10-28T16:23:03.356Z
title: react-redux-firebaseのtutorialをやった
---
来月中くらいにはreactとfirebaseで一瞬でそれなりのアプリが作れるようになりたいので、reactのfirebase bindingの`react-redux-firebase`とreduxのfirestore bindingの`redux-firestore`を使うチュートリアルをやった（[React Redux Firebase With Firestore Tutorial](https://dusty.phillips.codes/2018/08/25/react-redux-firebase-with-firestore-tutorial/)）。この著者、例えばfirestoreのデータベース構造はどうすべきかみたいな難しそうな話になると、自分は正直よく分からんがこう思うぜみたいな感じで進んでいくので個人的にはすごく好感が持てるがtutorialの読者としてはちゃんと教えてくれという気持ちになった。それでも全体としてtutorialとしてよく出来ていると思う。

以下感想。

- firestore、APIもそこそこわかりやすいしリモートのデータ更新がリアルタイムでローカルに反映できるし便利なのは良いが、モデルの種類が３とかを超えてくると普通にRDBが欲しくなってくる
  - firestoreのデータ構造のベストプラクティスを知らないだけでコツがわかれば使いやすいのかも
- `react-redux-firebase`の`firestoreConnect`というAPIは若干やりすぎでわかりにくいと思う。`redux-firestore`のAPIはもう少し生のfirestoreのものに近くて良さそうなので、次はそっちを使って自分で適当なアプリを作ってみたい
- 立て続けにreactを書いてて、なんとなく感覚が戻ってきた気がして嬉しい
