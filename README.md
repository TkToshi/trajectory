# アプリケーション名
* trajectory（軌跡）  

# アプリケーション概要
* 簡易的に投稿でき、自分の歩んだ軌跡を写真をメインに振り返ることができます。  
* また、一般投稿とプライベート投稿に分けることで、自分だけのアルバムとして活用できるアプリです。  

# URL
・http://52.192.38.60

# テスト用アカウント
* メールアドレス：umi@com
* パスワード：u11111
* メールアドレス：sora@com
* パスワード：s11111

# 利用方法
* ユーザー新規登録を行います。
* ユーザー登録したのち、投稿を行います。
  * 投稿内容は、一般投稿、プライベート投稿を選択できます。
  * 投稿内容は、カテゴリー分けができます。
  * フォロー機能やいいね！機能があります。
* マイページに過去の投稿一覧を表示できます。
* トップページは、公開用の投稿のみ表示されます。

# アプリケーションを作成した背景
* 仕事や家庭など、日々時間に追われている人が、自分が体験してきたことを簡易的に記録するツールがあればよいと考えました。
* また、視覚的な写真を見ることで、自分の記憶が戻りやすいのではないかと考えました。
* 友人やビジネスでのコミュニケーションの中で、視覚的に共有することで、共感を得やすいと考えました。


# 実装した機能
* ユーザー管理機能
* 投稿機能
* いいね！機能
* フォロー機能
* 画像投稿機能
* [![Image from Gyazo](https://i.gyazo.com/be13694d559281710efb97d795e392b4.png)](https://gyazo.com/be13694d559281710efb97d795e392b4)
* [![Image from Gyazo](https://i.gyazo.com/a73f2d71a53da8a15eb3595f710e7dbd.png)](https://gyazo.com/a73f2d71a53da8a15eb3595f710e7dbd)

# 実装予定の機能
* 地図閲覧機能

# データベース設計
* [![Image from Gyazo](https://i.gyazo.com/6745f2db12231f816a48583f39cb86d1.png)](https://gyazo.com/6745f2db12231f816a48583f39cb86d1)

# 画面遷移図
* [![Image from Gyazo](https://i.gyazo.com/09aa0d10a0dd39bda63d8cc4d06945f7.png)](https://gyazo.com/09aa0d10a0dd39bda63d8cc4d06945f7)


# 開発環境
* 言語：HTML、CSS、Ruby、JavaScript
* フレームワーク：Ruby on Rails
* データベース：MySQL


# 工夫したポイント
* 公開用の投稿とプライベートの投稿を分けることで、過去の記録を一元管理できる。
* 簡易な操作で、投稿を保存できるアプリとした。


## usersテーブル

| Column                | Type    | Options                   |
| ------------------    | ------  | ------------------------- |
| nickname              | string  | null: false, unique: true |
| email                 | string  | null: false, unique: true |
| encrypted_password    | string  | null: false,              |


### Association

- has_one  : profile 
- has_many : posts 
- has_many : likes 
- has_many : relationships 
- has_many : followers, through: :relationships 
- has_many : followings, through: :relationships 

## profileテーブル

| Column                | Type    | Options                   |
| ------------------    | ------  | ------------------------- |
| gender_id             | integer | null: false,              |
| user_profile          | text    | null: false,              |
| user_follower_figure  | integer | null: false,              |
| user_following_figure | integer | null: false,              |


### Association

- belongs_to : user


## postsテーブル
| Column             | Type         | Options                                          |
| ------------------ | ------------ | ------------------------------------------------ |
| post_text          | text         | null: false,                                     |
| category_id        | integer      | null: false,                                     |
| visibility_id      | integer      | null: false, default: 0                          |
| user_id            | references   | null: false, foreign_key:true                    |

### Association

- belongs_to : user
- has_many   : likes

## likesテーブル
| Column             | Type         | Options                            |
| ------------------ | ------------ | ---------------------------------- |
| user_id            | references   | null: false, foreign_key:true      |
| post_id            | references   | null: false, foreign_key:true      |

### Association

- belongs_to : user
- belongs_to : post

## relationshipsテーブル
| Column             | Type         | Options                                             |
| ------------------ | ------------ | --------------------------------------------------- |
| follower_id        | references   | null: false, foreign_key:true: { to_table: :users } |
| followed_id        | references   | null: false, foreign_key:true: { to_table: :users } |

### Association

- belongs_to :follower, class_name: 'User'
- belongs_to :followed, class_name: 'User'


