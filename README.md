⚪︎アプリケーション名
・trajectory（軌跡）

⚪︎アプリケーション概要
・時間を掛けずに自分の歩んだ軌跡を写真で、振り返る。
  一般投稿とプライベート投稿に分けることで、簡易な軌跡（アルバム）を振り返ることができるアプリ。

⚪︎URL
・

⚪︎テスト用アカウント
・Basic認証パスワード：
・Basic認証ID：
・メールアドレス：
・パスワード：

⚪︎利用方法
・トップページからユーザー新規登録を行う。
・新規投稿ボタンから投稿を行う。（一般投稿、プライベート投稿を選択）
  →投稿内容は、画像写真、カテゴリー、コメントを入力。
  →・フォロー機能、いいね！機能を付与。
・マイページに過去の投稿一覧を表示。（一般投稿、プライベート投稿を表示）
・投稿ごとにポイント機能を付与（継続的な投稿）

⚪︎アプリケーションを作成した背景
・現代人は、仕事や家庭など、日々時間に追われ、自分の歩んできた道を記録する時間が少ない。
・写真により過去を振り返ることで、過去の記憶を呼び起こし、友人や上司との会話を盛り上げるツールとしたい。

⚪︎実装した機能


⚪︎実装予定の機能
・ユーザー管理機能
・投稿機能
・いいね！機能
・フォロー機能
・ポイント付与機能

⚪︎データベース設計


⚪︎画面遷移図


⚪︎開発環境

⚪︎工夫したポイント
・公開用の投稿とプライベートの投稿を分けることで、過去の記録を一元管理できる。
・ポイント付与機能をつけることで、投稿の継続性を促す。
・多くの時間を割かなくても、容易に投稿しやすいアプリとした。


## usersテーブル

| Column                | Type    | Options                   |
| ------------------    | ------  | ------------------------- |
| nickname              | string  | null: false, unique: true |
| email                 | string  | null: false, unique: true |
| encrypted_password    | string  | null: false,              |


### Association

- has_one  : point 
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
| visibility         | integer      | null: false, default: 0                          |
<!-- | created_at         | datetime     | null: false, default: -> { 'CURRENT_TIMESTAMP' } | -->
| user_id            | references   | null: false, foreign_key:true                    |

### Association

- belongs_to : user
- has_many   : likes
- has_many   : comments

## commentsテーブル
| Column             | Type         | Options                            |
| ------------------ | ------------ | ---------------------------------- |
| comment            | text         | null: false,                       |
| user_id            | references   | null: false, foreign_key:true      |
| post_id            | references   | null: false, foreign_key:true      |

### Association

- belongs_to : comment

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

## pointsテーブル
| Column             | Type         | Options                            |
| ------------------ | ------------ | ---------------------------------- |
| point_figure       | integer      | null: false,                       |
| user_id            | references   | null: false, foreign_key:true      |

### Association

- belongs_to : user
